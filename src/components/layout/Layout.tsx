import { FC, PropsWithChildren, useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import { useRouter } from "next/router";
import Modal from "@/components/UI/modal/Modal";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  keywords,
  children,
}) => {
  const { locale, locales, push } = useRouter();

  const handleLocale = (locale: string) => {
    push("/", undefined, { locale });
  };

  const [data, setData] = useState(false);

  useEffect(() => {
    setData(true);
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
          <h1 className={styles.modalTitle}>Caution!</h1>
          <p className={styles.modalText}>
            Due to reduced functionality of the Mockapi.io service which is used
            as an API in this project, functions such as multifiltering and
            pagination in its correct form are unfortunately not available.
          </p>
          <button className={styles.modalButton} onClick={handleSaveData}>
            Understood
          </button>
        </Modal>
      )}
    </Meta>
  );
};

export default Layout;
