import React from 'react'

import { Product } from '../../../payload/payload-types'
import { Card } from '../../_components/Card'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export type RelatedProductsProps = {
  blockType: 'relatedProducts'
  blockName: string
  introContent?: any
  docs?: (string | Product)[]
  relationTo: 'products'
}

export const RelatedProducts: React.FC<RelatedProductsProps> = props => {
  const { introContent, docs, relationTo } = props

  if (!docs || docs.length === 0) {
    console.log('No related products found'); // رسالة تصحيحية إضافية
    return (
      <div className={classes.relatedProducts}>
        <p className={classes.noProducts}>لا توجد منتجات ذات صلة</p>
      </div>
    )
  }

  return (
    <div className={classes.relatedProducts}>
      {/* {introContent && (
        <Gutter className={classes.introContent}>
          <RichText content={introContent} />
        </Gutter>
      )} */}
      <hr className={classes.hr}/>
      <p className={classes.relatedProducts}>منتجات ذات صلة</p>
      <Gutter>
        <div className={classes.grid}>
          {docs?.map((doc, index) => {
            if (typeof doc === 'string') {
              console.log('Skipped string doc:', doc); // إضافة رسالة تصحيحية
              return null;
            }
            
            return (
              <Card key={doc.id} relationTo={relationTo} doc={doc} showCategories />
            )
          })}
        </div>
      </Gutter>
    </div>
  )
}
