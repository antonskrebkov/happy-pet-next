import { FC } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Contacts.module.scss";
import Questions from "@/components/questions/Questions";
import { useTranslation } from "next-i18next";

const Contacts: FC = () => {
  const { t } = useTranslation("contacts");

  return (
    <Layout
      title={t("title")}
      description={`${t("description")}`}
      keywords={`${t("keywords")}`}
    >
      <main className={styles.contacts}>
        <section className={styles.info}>
          <div className={styles.infoContainer}>
            <div className={styles.infoLeft}>
              <h2 className={styles.infoTitle}>{t("info-title-1")}</h2>
              <p className={styles.infoText}>
                <span>{t("info-text-1")}</span>
                <a href="tel:+380673452774">+(38) 067 345 2774</a>
              </p>
              <p className={styles.infoText}>
                <span>{t("info-text-2")}</span>
                {t("info-text-3")}
              </p>
              <p className={styles.infoText}>{t("info-text-4")}</p>
              <p className={styles.infoText}>
                <span>{t("info-text-5")}</span>
                <a href="mailto:happypet@gmail.com">happypet@gmail.com</a>
              </p>
              <p className={styles.infoText}>
                <span>{t("info-text-6")}</span>
                {t("info-text-7")}
              </p>
            </div>
            <div className={styles.infoRight}>
              <h2 className={styles.infoTitle}>{t("info-title-2")}</h2>
              <p className={styles.infoText}>
                <span>{t("info-text-8")}</span> 5169 3305 2447 9703 ГО ЗТ
                &quot;Happy pet&quot;
              </p>
              <p className={styles.infoText}>
                <span>{t("info-text-9")}</span>
                {t("info-text-10")}
              </p>
              <p className={styles.infoText}>
                <span>IBAN:</span> UA693052990000026002036209188
              </p>
              <p className={styles.infoText}>
                <span>{t("info-text-11")}</span>
                <a
                  href="https://send.monobank.ua/jar/9cHF2su8WS"
                  target="_blank"
                >
                  {t("info-text-12")}
                </a>
              </p>
              <p className={styles.infoText}>
                <span>{t("info-text-13")}</span>PayPal snezhana.bv@gmail.com
              </p>
            </div>
          </div>
        </section>
        <section className={styles.map}>
          <div className={styles.mapContainer}>
            <h2 className={styles.mapTitle}>{t("info-title-3")}</h2>
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
};

export default Contacts;
