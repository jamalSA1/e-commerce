import dotenv from 'dotenv';
import next from 'next';
import path from 'path';
import express from 'express';
import payload from 'payload';
import { exec } from 'child_process'; // لإضافة عملية exec لتشغيل next build كـ CLI
import { seed } from './payload/seed';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();
const PORT = process.env.PORT || 3000;

const start = async (): Promise<void> => {
  // Initialize Payload CMS
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Seed the database if PAYLOAD_SEED is true
  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload);
    process.exit();
  }

  // Run Next.js build if NEXT_BUILD is true
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, () => {
      payload.logger.info(`Next.js is now building...`);

      // Run the `next build` command using child_process
      exec('npm run build', { cwd: path.join(__dirname, '../') }, (error, stdout, stderr) => {
        if (error) {
          payload.logger.error(`Error during Next.js build: ${error.message}`);
          return;
        }
        if (stderr) {
          payload.logger.warn(`Next.js build warnings: ${stderr}`);
        }
        payload.logger.info(`Next.js build output: ${stdout}`);
        process.exit();
      });
    });

    return;
  }

  // If no build is needed, start the Next.js app
  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  });

  const nextHandler = nextApp.getRequestHandler();

  app.use((req, res) => nextHandler(req, res));

  // Prepare Next.js and start the server
  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...');

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`);
    });
  });
};

start();
