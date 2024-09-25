import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Order } from "../../../../../payload/payload-types";
import { HR } from "../../../../_components/HR";
import { Media } from "../../../../_components/Media";
import { Price } from "../../../../_components/Price";
import { formatDateTime } from "../../../../_utilities/formatDateTime";
import { getMeUser } from "../../../../_utilities/getMeUser";
import { mergeOpenGraph } from "../../../../_utilities/mergeOpenGraph";

import classes from "./index.module.scss";

export default async function Order({ params: { id } }) {
  const { token } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      "يجب أن تكون مسجل الدخول لكي ترى هذا الطلب."
    )}&redirect=${encodeURIComponent(`/order/${id}`)}`
  });

  let order: Order | null = null;

  try {
    order = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`
        }
      }
    )?.then(async (res) => {
      if (!res.ok) notFound();
      const json = await res.json();
      if ("error" in json && json.error) notFound();
      if ("errors" in json && json.errors) notFound();
      return json;
    });
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }

  if (!order) {
    notFound();
  }

  return (
    <div>
      <h5>
        {"الطلب"}
        <span className={classes.id}>{` ${order.id}`}</span>
      </h5>
      <div className={classes.itemMeta}>
        <p>{`ID: ${order.id}`}</p>
        <p>{`نية الدفع: ${order.stripePaymentIntentID}`}</p>
        <p>{`تم الطلب في: ${formatDateTime(order.createdAt)}`}</p>
        <p className={classes.total}>
          {"المجموع: "}
          {new Intl.NumberFormat("ar-SA", {
            style: "currency",
            currency: "SAR"
          }).format(order.total / 100)}
        </p>
      </div>

      <div className={classes.order}>
        {order.items?.map((item, index) => {
          if (typeof item.product === "object") {
            const {
              quantity,
              product,
              product: { id, title, meta, stripeProductID }
            } = item;

            const metaImage = meta?.image;

            return (
              <Fragment key={index}>
                <div className={classes.row}>
                  <Link
                    href={`/products/${product.slug}`}
                    className={classes.mediaWrapper}
                  >
                    {!metaImage && (
                      <span className={classes.placeholder}>لا يوجد صورة</span>
                    )}
                    {metaImage && typeof metaImage !== "string" && (
                      <div>
                        <Media
                          className={classes.media}
                          imgClassName={classes.image}
                          resource={metaImage}
                          fill
                        />
                      </div>
                    )}
                  </Link>
                  <div className={classes.rowContent}>
                    {!stripeProductID && (
                      <p className={classes.warning}>
                        {
                          "هذا المنتج لم يتم ربطه بالستريпе بعد. لربط هذا المنتج، "
                        }
                        <Link
                          href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/products/${id}`}
                        >
                          عدل هذا المنتج في لوحة التحكم
                        </Link>
                        {"."}
                      </p>
                    )}
                    <h6 className={classes.title}>
                      <Link
                        href={`/products/${product.slug}`}
                        className={classes.titleLink}
                      >
                        {title}
                      </Link>
                    </h6>
                    <p>{`الكمية: ${quantity}`}</p>
                    <Price
                      product={product}
                      button={false}
                      quantity={quantity}
                    />
                  </div>
                </div>
              </Fragment>
            );
          }

          return null;
        })}
      </div>
      <HR className={classes.hr} />
    </div>
  );
}

export async function generateMetadata({ params: { id } }): Promise<Metadata> {
  return {
    title: `الطلب ${id}`,
    description: `تفاصيل الطلب ${id}.`,
    openGraph: mergeOpenGraph({
      title: `الطلب ${id}`,
      url: `/orders/${id}`
    })
  };
}
