import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

import classes from './index.module.scss'

export default async function ResetPassword() {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>إعادة تعيين كلمة المرور</h1>
      <p>يرجى إدخال كلمة مرور جديدة أدناه.</p>
      <ResetPasswordForm />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'إعادة تعيين كلمة المرور',
  description: 'أدخل كلمة مرور جديدة.',
  openGraph: mergeOpenGraph({
    title: 'إعادة تعيين كلمة المرور',
    url: '/reset-password',
  }),
}
