import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'

export default async function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}>المعلومات شخصية</h5>
      <AccountForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'الحساب',
  description: 'أنشئ حساباً أو سجل الدخول إلى حسابك الحالي.',
  openGraph: mergeOpenGraph({
    title: 'الحساب',
    url: '/account',
  }),
}