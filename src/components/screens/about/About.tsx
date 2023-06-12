import Layout from "@/components/layout/Layout";
import React from "react";
import styles from "./About.module.scss";
import chevronDown from "public/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image
          className={styles.chevron}
          src={chevronDown}
          alt="Chevron Down"
        />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function About() {
  const { t } = useTranslation("about");

  return (
    <Layout
      title={t("title")}
      description={t("text-1")}
      keywords={t("keywords")}
    >
      <main className={styles.about}>
        <div className={styles.container}>
          <section className={styles.info}>
            <div className={styles.infoWrapper}>
              <div className={styles.infoLeft}>
                <h2 className={styles.infoTitle}>{t("title-1")}</h2>
              </div>
              <div className={styles.infoRight}>
                <p className={styles.infoText}>{t("text-1")}</p>
                <p className={styles.infoText}>{t("text-2")}</p>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <div className={styles.infoLeft}>
                <h2 className={styles.infoTitle}>{t("title-2")}</h2>
              </div>
              <div className={styles.infoRight}>
                <p className={styles.infoText}>{t("text-3")}</p>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <div className={styles.infoLeft}>
                <h2 className={styles.infoTitle}>{t("title-3")}</h2>
              </div>
              <div className={styles.infoRight}>
                <p className={styles.infoText}>{t("text-4")}</p>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <div className={`${styles.infoLeft} ${styles.infoFaq}`}>
                <h2 className={styles.infoTitle}>{t("title-4")}</h2>
              </div>
              <div className={`${styles.infoRight} ${styles.infoFaq}`}>
                <Accordion
                  className={styles.infoFaq}
                  transition
                  transitionTimeout={200}
                >
                  <AccordionItem header={t("question-1")}>
                    <p className={styles.infoFaqText}>{t("answer-1-1")}</p>
                    <p className={styles.infoFaqText}>{t("answer-1-2")}</p>
                    <p className={styles.infoFaqText}>{t("answer-1-3")}</p>
                  </AccordionItem>

                  <AccordionItem header={t("question-2")}>
                    <p className={styles.infoFaqText}>{t("answer-2-1")}</p>
                    <p className={styles.infoFaqText}>{t("answer-2-2")}</p>
                    <p className={styles.infoFaqText}>{t("answer-2-3")}</p>
                  </AccordionItem>

                  <AccordionItem header={t("question-3")}>
                    <p className={styles.infoFaqText}>{t("answer-3-1")}</p>
                    <p className={styles.infoFaqText}>{t("answer-3-2")}</p>
                  </AccordionItem>

                  <AccordionItem header={t("question-4")}>
                    <p className={styles.infoFaqText}>{t("answer-4")}</p>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
