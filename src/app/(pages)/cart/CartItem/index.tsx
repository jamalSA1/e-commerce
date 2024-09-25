"use client";
import React, { useState } from "react";

import classes from "./index.module.scss";
import Link from "next/link";
import { Media } from "../../../_components/Media";
import { Price } from "../../../_components/Price";
import Image from "next/image";
import { RemoveFromCartButton } from "../../../_components/RemoveFromCartButton";

export default function CartItem({
  product,
  title,
  qty,
  addItemToCart,
  metaImage
}) {
  const [quantity, setQuantity] = useState(qty);

  const decrementQty = () => {
    const updatedQty = quantity > 1 ? quantity - 1 : 1;

    setQuantity(updatedQty);
    addItemToCart({ product, quantity: Number(updatedQty) });
  };

  const incrementQty = () => {
    const updatedQty = quantity + 1;

    setQuantity(updatedQty);
    addItemToCart({ product, quantity: Number(updatedQty) });
  };
  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQty = Number(e.target.value);

    setQuantity(updatedQty);
    addItemToCart({ product, quantity: Number(updatedQty) });
  };

  return (
    <li className={classes.item} key={title}>
      <div className={classes.itemDetails}>
        <div className={classes.itemBtn}>
          <div className={classes.subtotalWrapper}>
            <Price product={product} button={false} quantity={quantity} />
            <RemoveFromCartButton product={product} />
          </div>

          <div className={classes.quantity}>
            <div className={classes.quantityBtn} onClick={decrementQty}>
              <Image
                src="/assets/icons/minus.svg"
                alt="minus"
                width={24}
                height={24}
                className={classes.qtnBtn}
              />
            </div>

            <input
              type="text"
              className={classes.quantityInput}
              value={quantity}
              onChange={enterQty}
            />

            <div className={classes.quantityBtn} onClick={incrementQty}>
              <Image
                src="/assets/icons/plus.svg"
                alt="plus"
                width={24}
                height={24}
                className={classes.qtnBtn}
              />
            </div>
          </div>
        </div>
        <div className={classes.titleWrapper}>
          <h5>{title}</h5>
          <Price product={product} button={false} />
        </div>
      </div>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>لاتوجد صوره</span>}
        {metaImage && metaImage !== "string" && (
          <div>
            <Media
              className={classes.media}
              imgClassName={classes.img}
              resource={metaImage}
              fill
            />
          </div>
        )}
      </Link>
    </li>
  );
}
