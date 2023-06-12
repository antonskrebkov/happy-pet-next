import { FC, PropsWithChildren, useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import { useRouter } from "next/router";
import Modal from "@/components/UI/modal/Modal";
import styles from "./Layout.module.scss";
import { useTranslation } from "next-i18next";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  keywords,
  children,
}) => {
  const { locale, locales, push } = useRouter();

  const { t } = useTranslation("layout");

  const handleLocale = (locale: string) => {
    push("/", undefined, { locale });
  };

  const [data, setData] = useState(true);

  useEffect(() => {
    const storedData = sessionStorage.getItem("notification");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleSaveData = () => {
    const newData = false;
    setData(newData);
    sessionStorage.setItem("notification", JSON.stringify(newData));
  };

  return (
    <Meta title={title} description={description} keywords={keywords}>
      <Header handleLocale={handleLocale} locales={locales} locale={locale} />
      {children}
      <Footer />
      {data && (
        <Modal>
          <h1 className={styles.modalTitle}>{t("modal-title")}</h1>
          <h2 className={styles.modalText}>{t("modal-text")}</h2>
          <button className={styles.modalButton} onClick={handleSaveData}>
            {t("modal-button")}
          </button>
        </Modal>
      )}
    </Meta>
  );
};

export default Layout;
