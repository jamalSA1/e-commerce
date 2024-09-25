import React from "react";
import { Metadata } from "next";

import { RenderParams } from "../../_components/RenderParams";
import { getMeUser } from "../../_utilities/getMeUser";
import { mergeOpenGraph } from "../../_utilities/mergeOpenGraph";
import LoginForm from "./LoginForm";

import classes from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      "أنت مسجل الدخول بالفعل."
    )}`
  });

  return (
    <section className={classes.login}>
      <div className={classes.heroImg}>
        {/* <Link href="/">
          <Image
            src="/logo-black.svg"
            alt="logo"
            width={250}
            height={23}
            className={classes.logo}
          />
        </Link> */}
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />

          <div className={classes.formTitle}>
            <Image
              src="/assets/icons/hand.png"
              alt="welcome"
              width={30}
              height={30}
              />
              <h3> مرحبًا بعودتك </h3>
          </div>

          <p></p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Login",
  description: "تسجيل الدخول أو إنشاء حساب للبدء.",
  openGraph: mergeOpenGraph({
    title: "Login",
    url: "/login"
  })
};
