import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import styles from "./Contacts.module.scss";
import Select from "react-select";
import Questions from "@/components/questions/Questions";

interface IConfirmation {
  isPersonalDataChecked: boolean;
  isPrivacyPolicyChecked: boolean;
}

export default function Contacts() {
  return (
    <Layout
      title="Contacts"
      description="+(38) 067 345 2774, happypet@gmail.com, с. Фасова, Київська область, Благодійна допомога, snezhana.bv@gmail.com"
      keywords="контакты, связаться"
    >
      <main className={styles.contacts}>
        <section className={styles.info}>
          <div className={styles.infoContainer}>
            <div className={styles.infoLeft}>
              <h2 className={styles.infoTitle}>Контакти</h2>
              <p className={styles.infoText}>
                <span>Номер для звʼязку:</span> +(38) 067 345 2774
              </p>
              <p className={styles.infoText}>
                <span>Важливо!</span> Прийом телефоних дзвінків з 9:00 до 19:00
              </p>
              <p className={styles.infoText}>
                Також є вайбер і телеграм по номеру вище - пишить, із радістю
                відповімо на всі ваші питання
              </p>
              <p className={styles.infoText}>
                <span>Електронна пошта:</span> happypet@gmail.com
              </p>
              <p className={styles.infoText}>
                <span>Адреса:</span> с. Фасова, Київська область
              </p>
            </div>
            <div className={styles.infoRight}>
              <h2 className={styles.infoTitle}>Допомога хвостикам</h2>
              <p className={styles.infoText}>
                <span>Рахунок Приватбанк</span> 5169 3305 2447 9703 ГО ЗТ
                &quot;Happy pet&quot;
              </p>
              <p className={styles.infoText}>
                <span>Призначення:</span> Благодійна допомога
              </p>
              <p className={styles.infoText}>
                <span>IBAN:</span> UA693052990000026002036209188
              </p>
              <p className={styles.infoText}>
                <span>Монобанка: </span>
                <a
                  href="https://send.monobank.ua/jar/9cHF2su8WS"
                  target="_blank"
                >
                  Тиць
                </a>
              </p>
              <p className={styles.infoText}>
                <span>Для допомоги з інших країн:</span> PayPal
                snezhana.bv@gmail.com
              </p>
            </div>
          </div>
        </section>
        <section className={styles.map}>
          <div className={styles.mapContainer}>
            <h2 className={styles.mapTitle}>Ми знаходимося тут</h2>
            <iframe
              className={styles.mapItem}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20357.734265226343!2d29.74003098916118!3d50.371835299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b45953c01657f%3A0x18759bfd64a35353!2sPrytulok%20Dlya%20Tvaryn%20%22Best%20Frends%22!5e0!3m2!1sru!2sua!4v1682862982354!5m2!1sru!2sua"
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <Questions />
      </main>
    </Layout>
  );
}
