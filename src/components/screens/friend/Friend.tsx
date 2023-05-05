import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Friend.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/scss";

import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

import friend1 from "@/components/friends-catalog/images/01.png";

export default function Friend() {
  const AccordionItem = ({ header, ...rest }: any) => (
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

  const breadcrumbs = [
    {
      link: "/",
      title: "Головна",
    },
    {
      link: "/friends",
      title: "Друзі",
    },
    {
      link: "/friends/1234",
      title: "1234",
    },
  ];

  const friend = {
    id: 1,
    age: 2,
    name: "Папуга Гриша",
    shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
    category: "Parrot",
    price: 900,
    sex: "Male",
    wc: true,
    images: [friend1, friend1],
  };

  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <Layout>
      <main className={styles.friend}>
        <div className={styles.container}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <section className={styles.wrapper}>
            <div className={styles.gallery}>
              <Swiper
                modules={[Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                className={styles.gallerySlider}
                observer={true}
                observeParents={true}
                speed={400}
                slidesPerView={1}
              >
                {friend.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      className={styles.gallerySliderItem}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                modules={[Thumbs]}
                className={styles.galleryThumb}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                observer={true}
                observeParents={true}
                speed={400}
                slidesPerView={4}
                spaceBetween={15}
              >
                {friend.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      className={styles.galleryThumbItem}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{friend.name}</h2>
              <p className={styles.shortId}>ID: {friend.id}</p>
              <p className={styles.shortDescription}>
                {friend.shortDescription}
              </p>
              <p className={styles.price}>{friend.price} ₴</p>
              <button className={styles.add}>Додати у переноску</button>
              <Accordion
                className={styles.details}
                transition
                transitionTimeout={200}
              >
                <AccordionItem header="Опис">
                  <p className={styles.detailsText}>{friend.description}</p>
                </AccordionItem>
                <AccordionItem header="Деталі">
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Вид</p>
                    <p className={styles.detailsRowValue}>{friend.category}</p>
                  </div>
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Вік</p>
                    <p className={styles.detailsRowValue}>{friend.age} міс.</p>
                  </div>
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Стать</p>
                    <p className={styles.detailsRowValue}>{friend.sex}</p>
                  </div>
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Туалет</p>
                    <p className={styles.detailsRowValue}>
                      {friend.wc ? "Так" : "Ні"}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
