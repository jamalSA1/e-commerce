import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'لا يمكن إنشاء حساب جديد أثناء تسجيل الدخول، يرجى تسجيل الخروج والمحاولة مرة أخرى.',
    )}`,
  })

  return (
    <section className={classes.createAccount}>
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
            <h3> مرحبًا </h3>
        </div>

        <p></p>
        <CreateAccountForm />
      </div>
    </div>
  </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'إنشاء حساب جديد أو تسجيل الدخول إلى حسابك الحالي.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
