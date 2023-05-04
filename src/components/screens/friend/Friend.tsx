import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Friend.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/scss";
import sliderPet1 from "src/components/screens/home/images/pets/01.png";
import sliderPet2 from "src/components/screens/home/images/pets/02.png";
import sliderPet3 from "src/components/screens/home/images/about.jpeg";
import sliderPet4 from "src/components/screens/home/images/bg.jpg";
import sliderPet5 from "src/components/screens/home/images/pets/05.png";

import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";

export default function Friend() {
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

  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <Layout>
      <main className={styles.friend}>
        <div className={styles.container}>
          <section className={styles.breadcrumbs}>
            <ul className={styles.breadcrumbsList}>
              <li className={styles.breadcrumbsItem}>
                <a href="" className={styles.breadcrumbsLink}>
                  Главная
                </a>
              </li>
              <li className={styles.breadcrumbsItem}>
                <a href="" className={styles.breadcrumbsLink}>
                  Друзья
                </a>
              </li>
              <li className={styles.breadcrumbsItem}>
                <a href="" className={styles.breadcrumbsLink}>
                  12345
                </a>
              </li>
            </ul>
          </section>
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
                <SwiperSlide>
                  <Image
                    src={sliderPet1}
                    className={styles.gallerySliderItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet2}
                    className={styles.gallerySliderItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet3}
                    className={styles.gallerySliderItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet4}
                    className={styles.gallerySliderItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet5}
                    className={styles.gallerySliderItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet6}
                    className={styles.gallerySliderItem}
                    alt=""
                  />
                </SwiperSlide>
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
                <SwiperSlide>
                  <Image
                    src={sliderPet1}
                    className={styles.galleryThumbItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet2}
                    className={styles.galleryThumbItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet3}
                    className={styles.galleryThumbItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet4}
                    className={styles.galleryThumbItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet5}
                    className={styles.galleryThumbItem}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={sliderPet6}
                    className={styles.galleryThumbItem}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>Кролик Сниф</h2>
              <p className={styles.shortId}>ID: 12345</p>
              <p className={styles.shortDescription}>
                Кролик Сніф закохає всіх своїми вухами
              </p>
              <p className={styles.price}>900 ₴</p>
              <button className={styles.add}>Додати у переноску</button>
              <Accordion
                className={styles.details}
                transition
                transitionTimeout={200}
              >
                <AccordionItem header="Опис">
                  <p className={styles.detailsText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, error officia sint excepturi ducimus est,
                    deleniti aliquid laborum inventore, ut voluptas cumque quia
                    at nihil quae nisi! Corrupti, numquam iusto!
                  </p>
                </AccordionItem>
                <AccordionItem header="Деталі">
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Вид</p>
                    <p className={styles.detailsRowValue}>Гризун</p>
                  </div>
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Вік</p>
                    <p className={styles.detailsRowValue}>2 міс.</p>
                  </div>
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Стать</p>
                    <p className={styles.detailsRowValue}>Він</p>
                  </div>
                  <div className={styles.detailsRow}>
                    <p className={styles.detailsRowKey}>Туалет</p>
                    <p className={styles.detailsRowValue}>Так</p>
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
