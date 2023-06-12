import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Checkout.module.scss";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import CheckoutItem from "@/components/checkout-item/CheckoutItem";
import { summarize } from "@/utils/sum";
import { formatPrice } from "@/utils/price";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Checkout() {
  const { t } = useTranslation("checkout");

  const { locale } = useRouter();

  const cartList = useAppSelector((state) => state.cart);

  return (
    <Layout title={t("title")}>
      <main className={styles.checkout}>
        <div className={styles.container}>
          <div className={styles.bag}>
            <h2 className={styles.bagTitle}>{t("bag-title")}</h2>
            <div className={styles.bagBody}>
              {cartList.length ? (
                <ul className={styles.bagItems}>
                  {cartList.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} friend={cartItem} />
                  ))}
                </ul>
              ) : (
                <p>{t("bag-empty")}</p>
              )}
            </div>
          </div>
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>{t("summary-title")}</h2>
            <div className={styles.summaryBody}>
              <div className={styles.summaryRow}>
                <div className={styles.summaryText}>{t("summary-text")}</div>
                <div className={styles.summaryPrice}>
                  {formatPrice(summarize(cartList), locale)}
                </div>
              </div>
              <div className={styles.summarySum}>
                <div className={styles.summarySumText}>
                  {t("summary-sum-text")}
                </div>
                <div className={styles.summarySumPrice}>
                  {formatPrice(summarize(cartList), locale)}
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
                  {t("summary-submit")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
