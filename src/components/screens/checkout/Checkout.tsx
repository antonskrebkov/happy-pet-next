import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Checkout.module.scss";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import CheckoutItem from "@/components/checkout-item/CheckoutItem";
import { summarize } from "@/utils/sum";

export default function Checkout() {
  const cartList = useAppSelector((state) => state.cart);

  return (
    <Layout title="Checkout">
      <main className={styles.checkout}>
        <div className={styles.container}>
          <div className={styles.bag}>
            <h2 className={styles.bagTitle}>В переноске</h2>
            <div className={styles.bagBody}>
              {cartList.length ? (
                <ul className={styles.bagItems}>
                  {cartList.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} friend={cartItem} />
                  ))}
                </ul>
              ) : (
                <p>Переноска порожня</p>
              )}
            </div>
          </div>
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>Рахунок</h2>
            <div className={styles.summaryBody}>
              <div className={styles.summaryRow}>
                <div className={styles.summaryText}>Проміжний підсумок</div>
                <div className={styles.summaryPrice}>
                  {summarize(cartList)} ₴
                </div>
              </div>
              <div className={styles.summarySum}>
                <div className={styles.summarySumText}>Всього</div>
                <div className={styles.summarySumPrice}>
                  {summarize(cartList)} ₴
                </div>
              </div>
              <div className={styles.summarySubmit}>
                <Link
                  className={
                    cartList.length
                      ? styles.summarySubmitButton
                      : `${styles.summarySubmitButton} ${styles.disabled}`
                  }
                  href="/checkout/application"
                >
                  Залишити заявку
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
