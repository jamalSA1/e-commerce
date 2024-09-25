'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('تم تسجيل الخروج بنجاح.')
      } catch (_) {
        setError('أنت مسجل الخروج بالفعل.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'ما الذي تريد أن تفعل بعد ذلك؟'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <>
                {' '}
                <Link href={`/${productsPage.slug}`}>انقر هنا</Link>
                {` للتسوق.`}
              </>
            )}
            {` لتسجيل الدخول مرة أخرى، `}
            <Link href="/login">انقر هنا</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
