{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'

import type { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderInPhone from './headerInPhone/page'


export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <HeaderInPhone header={header} key={header.id} />
    </>
  )
}
