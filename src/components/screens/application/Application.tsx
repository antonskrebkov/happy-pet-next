import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Application.module.scss";
import Image from "next/image";
import orderPet from "src/components/home-new-slider/images/01.png";

import Link from "next/link";
import { useRouter } from "next/router";
import ApplicationInput from "@/components/UI/application-input/ApplicationInput";
import Modal from "@/components/UI/modal/Modal";

export default function Application() {
  const router = useRouter();
  const success = false;

  return (
    <Layout>
      <main className={styles.application}>
        <div className={styles.container}>
          <button
            className={styles.backButton}
            type="button"
            onClick={() => router.back()}
          >
            Назад
          </button>
          <div className={styles.wrapper}>
            <form className={styles.form}>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>
                  Введіть свої персональні дані:
                </h2>
                <ApplicationInput
                  type="text"
                  value="Імʼя"
                  validationMessage="Введіть своє імʼя"
                />
                <ApplicationInput
                  type="text"
                  value="Прізвище"
                  validationMessage="Введіть своє прізвище"
                />
                <ApplicationInput
                  type="number"
                  value="Повних років"
                  validationMessage="Введіть свій вік"
                />
                <ApplicationInput
                  type="text"
                  value="Місто/Село"
                  validationMessage="Введіть своє місто/cело"
                />
              </div>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>
                  Введіть свої контактні дані:
                </h2>
                <ApplicationInput
                  type="mail"
                  value="Ел. пошта"
                  validationMessage="Введіть свою ел. пошту"
                />
                <ApplicationInput
                  type="tel"
                  value="Номер телефона"
                  validationMessage="Введіть свій номер телефона"
                />
              </div>
              <label htmlFor="formPersonalData" className={styles.formCheckbox}>
                <input id="formPersonalData" type="checkbox" />
                <span>Я згоден на обробку моїх персональних даних</span>
              </label>
              <button className={styles.formButton} type="submit">
                Надіслати
              </button>
            </form>
            <section className={styles.order}>
              <h2 className={styles.orderTitle}>У вашій переносці:</h2>
              <ul className={styles.orderItems}>
                <li className={styles.orderItem}>
                  <Image
                    className={styles.orderItemImage}
                    src={orderPet}
                    alt=""
                  ></Image>
                  <div className={styles.orderItemBody}>
                    <div className={styles.orderItemTitle}>Кролик Сниф</div>
                    <div className={styles.orderItemPrice}>900 ₴</div>
                  </div>
                </li>
                <li className={styles.orderItem}>
                  <Image
                    className={styles.orderItemImage}
                    src={orderPet}
                    alt=""
                  ></Image>
                  <div className={styles.orderItemBody}>
                    <div className={styles.orderItemTitle}>Кролик Сниф</div>
                    <div className={styles.orderItemPrice}>900 ₴</div>
                  </div>
                </li>
              </ul>
              <div className={styles.orderTotal}>
                <div className={styles.orderTotalTitle}>Всього</div>
                <div className={styles.orderTotalPrice}>900 ₴</div>
              </div>
            </section>
          </div>
        </div>
        {success ? (
          <Modal>
            <h2 className={styles.modalTitle}>Ваша заявка прийнята!</h2>
            <Link href="/" className={styles.modalLink}>
              Повернутися на головну
            </Link>
          </Modal>
        ) : (
          ""
        )}
      </main>
    </Layout>
  );
}
