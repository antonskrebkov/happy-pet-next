import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Application.module.scss";
import Image from "next/image";
import orderPet from "src/components/screens/home/images/pets/07.png";
import Link from "next/link";
import { useRouter } from "next/router";

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
                <div className={styles.formWrapper}>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Імʼя"
                  />
                  <div className={styles.formInputLabel}>Імʼя</div>
                  <div className={styles.formInputValidation}>
                    Введіть своє імʼя
                  </div>
                </div>
                <div className={styles.formWrapper}>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Прізвище"
                  />
                  <div className={styles.formInputLabel}>Прізвище</div>
                  <div className={styles.formInputValidation}>
                    Введіть своє прізвище
                  </div>
                </div>
                <div className={styles.formWrapper}>
                  <input
                    className={styles.formInput}
                    type="number"
                    placeholder="Повних років"
                  />
                  <div className={styles.formInputLabel}>Повних років</div>
                  <div className={styles.formInputValidation}>
                    Введіть свій вік
                  </div>
                </div>
                <div className={styles.formWrapper}>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Місто/Село"
                  />
                  <div className={styles.formInputLabel}>Місто/Село</div>
                  <div className={styles.formInputValidation}>
                    Введіть своє місто/cело
                  </div>
                </div>
              </div>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>
                  Введіть свої контактні дані:
                </h2>
                <div className={styles.formWrapper}>
                  <input
                    className={`${styles.formInput} ${styles.error}`}
                    type="mail"
                    placeholder="Ел. пошта"
                  />
                  <div className={styles.formInputLabel}>Ел. пошта</div>
                  <div
                    className={`${styles.formInputValidation} ${styles.error}`}
                  >
                    Введіть свою ел. пошту
                  </div>
                </div>
                <div className={styles.formWrapper}>
                  <input
                    className={styles.formInput}
                    type="tel"
                    placeholder="Номер телефона"
                  />
                  <div className={styles.formInputLabel}>Номер телефона</div>
                  <div className={styles.formInputValidation}>
                    Введіть свій номер телефона
                  </div>
                </div>
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
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>Ваша заявка прийнята!</h2>
              <Link href="/" className={styles.modalLink}>
                Повернутися на головну
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </Layout>
  );
}
