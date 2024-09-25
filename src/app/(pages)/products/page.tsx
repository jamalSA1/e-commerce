import React from 'react'

import classes from './page.module.scss'
import { Gutter } from '../../_components/Gutter'
import { Blocks } from '../../_components/Blocks'
import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { draftMode } from 'next/headers'
import { fetchDocs } from '../../_api/fetchDocs'

export default async function Products() {
  const {isEnabled: isDraftMode} = draftMode()
  let page: Page | null = null;
  let categories: Category[] | null = null;

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })
    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.log(error)
  }
  return (
    <section className={classes.container}>
      <Gutter className={classes.products}>
        {/* <Filters categories={categories} /> */}
        <div>
          <Blocks blocks={page.layout} disableTopPadding={true} />
        </div>
      </Gutter>
    </section>
  )
}
