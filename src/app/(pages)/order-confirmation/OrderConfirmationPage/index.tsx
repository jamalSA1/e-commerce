"use client";

import React, { Fragment, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "../../../_components/Button";
import { Message } from "../../../_components/Message";
import { useCart } from "../../../_providers/Cart";

import classes from "./index.module.scss";

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams();
  const orderID = searchParams.get("order_id");
  const error = searchParams.get("error");

  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      {error ? (
        <>
          <Message error={error} />
          <p>
            {`تمت عملية الدفع بنجاح ولكن حدث خطأ أثناء معالجة طلبك. يرجى الاتصال بنا لحل هذه المشكلة.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="عرض الحساب" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="عرض جميع الطلبات"
              appearance="secondary"
            />
          </div>
        </>
      ) : (
        <div >
          <h1>شكراً لطلبك!</h1>
          <p>
            {`تم تأكيد طلبك. ستصلك رسالة تأكيد بالبريد الإلكتروني قريباً. رقم طلبك هو ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button
              href={`/orders/${orderID}`}
              label="عرض الطلب"
              appearance="primary"
              className={classes.order}
              />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="عرض جميع الطلبات"
              appearance="secondary"
              className={classes.orders}
            />
          </div>
        </div>
      )}
    </div>
  );
};
