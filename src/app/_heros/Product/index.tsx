import React, { Fragment } from "react";
import Link from "next/link";

import { Product } from "../../../payload/payload-types";
import { AddToCartButton } from "../../_components/AddToCartButton";
import { Gutter } from "../../_components/Gutter";
import { Media } from "../../_components/Media";
import { Message } from "../../_components/Message";
import { Price } from "../../_components/Price";
import RichText from "../../_components/RichText";

import classes from "./index.module.scss";

export const ProductHero: React.FC<{
  product: Product;
}> = ({ product }) => {
  const {
    id,
    stripeProductID,
    title,
    categories,
    meta: { image: metaImage, description } = {}
  } = product;

  return (
    <>
      <Link href="/" className={classes.backButton}>
      <div>
        <img src="/assets/icons/arrow-left.svg" alt="go back" />
      </div>
      </Link>
      <br />
      <Gutter className={classes.productHero}>
        <div className={classes.mediaWrapper}>
          {!metaImage && (
            <div className={classes.placeholder}>لا توجد صوره</div>
          )}
          {metaImage && typeof metaImage !== "string" && (
            <Media imgClassName={classes.image} resource={metaImage} fill />
          )}
        </div>
        <div className={classes.ditails}>
          <h3 className={classes.title}>{title}</h3>

          <div className={classes.categoryWrapper}>
            <div className={classes.categories}>
              {categories?.map((category, index) => {
                if (typeof category === "object" && category !== null) {
                  const { title: categoryTitle } = category;

                  const titleToUse = categoryTitle || "Untitled category";

                  const isLast = index === categories.length - 1;

                  return (
                    <div key={index} className={classes.category}>
                      <p className={classes.stock}>متوفر في المخزون</p>
                      <div>
                        <p className={classes.separator}>|</p>
                        {titleToUse}{" "}
                        {!isLast && <span>, &nbsp;</span>}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <Price product={product} button={false} />
          <div className={classes.description}>
            <h5>الوصف</h5>
            <p>{description}</p>
          </div>
          <AddToCartButton
            product={product}
            className={classes.addToCartButton}
          />
        </div>
      </Gutter>
    </>
  );
};
