import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { RenderParams } from '../../_components/RenderParams'

export default async function RecoverPassword() {
  return (
    <section className={classes.recoverPassword}>
    {/* <div className={classes.heroImg}>
      <Link href="/">
        <Image
          src="/logo-black.svg"
          alt="logo"
          width={250}
          height={23}
          className={classes.logo}
        />
      </Link>
    </div> */}

    <div className={classes.formWrapper}>
      <div className={classes.formContainer}>
        <RenderParams className={classes.params}/>

        <Link href='/login' className={classes.backLogin}>
        <div>
          <Image src='/assets/icons/arrow-left.svg' alt='back' width={24} height={24} />
        </div>
          العودة
        </Link>
        <div className={classes.formTitle}>
            <h3> اعادة كلمة المرور</h3>
        </div>

        <p></p>
        <RecoverPasswordForm />
      </div>
    </div>
  </section>
  )
}

export const metadata: Metadata = {
  title: 'استعادة كلمة المرور',
  description: 'أدخل عنوان بريدك الإلكتروني لاستعادة كلمة المرور الخاصة بك.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
