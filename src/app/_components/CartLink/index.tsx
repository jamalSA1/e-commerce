'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { useCart } from '../../_providers/Cart'

import classes from './index.module.scss'
import { ShoppingBag } from 'lucide-react'

export const CartLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props
  const { cart } = useCart()
  const [length, setLength] = useState<number>()

  useEffect(() => {
    setLength(cart?.items?.length || 0)
  }, [cart])

  const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Shopping-Basket--Streamline-Ultimate" height={24} width={24} ><desc>{"Shopping Basket Streamline Icon: https://streamlinehq.com"}</desc><path fill="#D6EFD8" d="M20.661 21.7a1 1 0 0 1 -0.981 0.8H4.32a1 1 0 0 1 -0.981 -0.8L1.5 12.5h21l-1.839 9.2Z" strokeWidth={1} /><path fill="#80AF81" d="M21.879 15.605 22.5 12.5h-21l0.621 3.105h19.758Z" strokeWidth={1} /><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M20.661 21.7a1 1 0 0 1 -0.981 0.8H4.32a1 1 0 0 1 -0.981 -0.8L1.5 12.5h21l-1.839 9.2Z" strokeWidth={1} /><path fill="#ffffff" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.5 9.5h-21a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h21a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1Z" strokeWidth={1} /><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m3.5 7.5 6 -6" strokeWidth={1} /><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m20.5 7.5 -6 -6" strokeWidth={1} /></svg>

  return (
    <Link className={[classes.cartLink, className].filter(Boolean).join(' ')} href="/cart">
      <span>
        {/* <ShoppingBag strokeWidth="1.5px"/> */}
        {cartIcon}
      </span>

      {typeof length === 'number' && length > 0 && (
        <small className={classes.quantity}>{length}</small>
      )}
    </Link>
  )
}
