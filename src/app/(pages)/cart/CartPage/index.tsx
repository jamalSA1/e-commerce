'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'

import { Page, Settings } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { HR } from '../../../_components/HR'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'
import { useAuth } from '../../../_providers/Auth'
import { useCart } from '../../../_providers/Cart'

import classes from './index.module.scss'
import CartItem from '../CartItem'

export const CartPage: React.FC<{
  settings: Settings
  page: Page
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}

  const { user } = useAuth()

  const { cart, cartIsEmpty, addItemToCart, cartTotal, hasInitializedCart } = useCart()
  const delveryTotal = {
    total: 0
  }

  return (
    <>
      <br />
      {!hasInitializedCart ? (
        <div className={classes.loading}>
          <LoadingShimmer />
        </div>
      ) : (
        <>
          {cartIsEmpty ? (
            <div className={classes.empty}>
              عربة التسوق فارغة.
              {typeof productsPage === 'object' && productsPage?.slug && (
                <>
                  {' '}
                  <Link href={`/${productsPage.slug}`}>انقر هنا</Link>
                  {` لشراء.`}
                </>
              )}
              {!user && (
                <>
                  {' '}
                  <Link href={`/login?redirect=%2Fcart`}>تسجيل الدخول</Link>
                  {` لمراجعة عربة التسوق المحفوظة.`}
                </>
              )}
            </div>
          ) : (
            <div className={classes.cartWrapper}>
              <div>
              {/* CART LIST HEADER */}
              <div className={classes.header}>
                  <p className={classes.headersubtotal}>المجموع الفرعي</p>
                  <div className={classes.headerItemDetails}>
                    <p></p>
                    <p></p>
                    <p>الكمية</p>
                  </div>
                  <p>المنتجات</p>
                </div>
            <div>
              <ul className={classes.itemList}>
              {cart?.items?.map((item, index) => {
                if (typeof item.product === 'object') {
                  const {
                    quantity,
                    product,
                    product: { id, title, meta, stripeProductID },
                  } = item

                  const isLast = index === (cart?.items?.length || 0) - 1

                  const metaImage = meta?.image

                  return (
                    <>
                    <CartItem product={product} title={title} metaImage={metaImage} qty={quantity} addItemToCart={addItemToCart} />
                      </>
                  )
                }
                return null
              })}
              </ul>
              </div>

              <div className={classes.summary}>
                <div >
                  {/* <h6 className={classes.cartTotle}>ملخص</h6> */}
                </div>
                <div className={classes.row}>
                  <h6 className={classes.cartTotle}>مجانا</h6>
                  <h6 className={classes.cartTotal}>رسوم التوصيل</h6>
                </div>
                <div className={classes.row}>
                  <h6 className={classes.cartTotal}>{cartTotal.formatted}</h6>
                  <h6 className={classes.cartTotal}>المجموع الإجمالي </h6>
                </div>

              <Button
                className={classes.checkoutButton}
                href={user ? '/checkout' : '/login?redirect=%2Fcheckout'}
                label={user ? 'الدفع' : 'تسجيل الدخول للدفع'}
                appearance="primary"
              />
              
            </div>
            </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
