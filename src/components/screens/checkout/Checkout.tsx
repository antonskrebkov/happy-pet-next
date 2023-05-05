import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Checkout.module.scss";
import Link from "next/link";
import Image from "next/image";
import bagPet from "src/components/home-new-slider/images/01.png";
import remove from "./remove.svg";

export default function Checkout() {
  return (
    <Layout>
      <main className={styles.checkout}>
        <div className={styles.container}>
          <div className={styles.bag}>
            <h2 className={styles.bagTitle}>В переноске</h2>
            <div className={styles.bagBody}>
              <ul className={styles.bagItems}>
                <li className={styles.bagItem}>
                  <Link className={styles.bagItemImage} href="">
                    <Image src={bagPet} alt="" />
                  </Link>
                  <div className={styles.bagItemBody}>
                    <div className={styles.bagItemRow}>
                      <Link className={styles.bagItemTitle} href="">
                        Висловуха кішка Кіра
                      </Link>
                      <div className={styles.bagItemPrice}>900 ₴</div>
                    </div>
                    <div className={styles.bagItemId}>ID: 123</div>
                    <div className={styles.bagItemKind}>Грызун</div>
                    <div className={styles.bagItemAge}>3 месяца</div>
                    <button className={styles.bagItemDelete}>
                      <Image src={remove} alt=""></Image>
                    </button>
                  </div>
                </li>
                <li className={styles.bagItem}>
                  <Link className={styles.bagItemImage} href="">
                    <Image src={bagPet} alt="" />
                  </Link>
                  <div className={styles.bagItemBody}>
                    <div className={styles.bagItemRow}>
                      <Link className={styles.bagItemTitle} href="">
                        Кролик Сниф
                      </Link>
                      <div className={styles.bagItemPrice}>900 ₴</div>
                    </div>
                    <div className={styles.bagItemId}>ID: 123</div>
                    <div className={styles.bagItemKind}>Грызун</div>
                    <div className={styles.bagItemAge}>3 месяца</div>
                    <button className={styles.bagItemDelete}>
                      <Image src={remove} alt=""></Image>
                    </button>
                  </div>
                </li>
                <li className={styles.bagItem}>
                  <Link className={styles.bagItemImage} href="">
                    <Image src={bagPet} alt="" />
                  </Link>
                  <div className={styles.bagItemBody}>
                    <div className={styles.bagItemRow}>
                      <Link className={styles.bagItemTitle} href="">
                        Кролик Сниф
                      </Link>
                      <div className={styles.bagItemPrice}>900 ₴</div>
                    </div>
                    <div className={styles.bagItemId}>ID: 123</div>
                    <div className={styles.bagItemKind}>Грызун</div>
                    <div className={styles.bagItemAge}>3 месяца</div>
                    <button className={styles.bagItemDelete}>
                      <Image src={remove} alt=""></Image>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>Рахунок</h2>
            <div className={styles.summaryBody}>
              <div className={styles.summaryRow}>
                <div className={styles.summaryText}>Проміжний підсумок</div>
                <div className={styles.summaryPrice}>900 ₴</div>
              </div>
              <div className={styles.summarySum}>
                <div className={styles.summarySumText}>Всього</div>
                <div className={styles.summarySumPrice}>900 ₴</div>
              </div>
              <div className={styles.summarySubmit}>
                <Link
                  className={styles.summarySubmitButton}
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
