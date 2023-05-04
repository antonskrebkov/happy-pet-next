import { FC, useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "node_modules/swiper/modules/scrollbar/scrollbar.scss";
import "swiper/scss";
import styles from "./HomeCategorySlider.module.scss";
import category1 from "./images/01.png";
import category2 from "./images/02.png";
import category3 from "./images/03.png";
import category4 from "./images/04.png";
import category5 from "./images/05.png";
import category6 from "./images/06.png";

interface ISliderItem {
  id: number;
  title: string;
  src: StaticImageData;
  className: string;
}

const HomeCategorySlider: FC = () => {
  const sliderItems: ISliderItem[] = [
    {
      id: 1,
      title: "Обезьяны",
      src: category1,
      className: styles.sliderItemCategoryMonkey,
    },
    {
      id: 2,
      title: "Рептилии",
      src: category2,
      className: styles.sliderItemCategoryReptile,
    },
    {
      id: 3,
      title: "Грызуны",
      src: category3,
      className: styles.sliderItemCategoryRodent,
    },
    {
      id: 4,
      title: "Кошки",
      src: category4,
      className: styles.sliderItemCategoryCat,
    },
    {
      id: 5,
      title: "Собаки",
      src: category5,
      className: styles.sliderItemCategoryDog,
    },
    {
      id: 6,
      title: "Попугаи",
      src: category6,
      className: styles.sliderItemCategoryParrot,
    },
  ];

  const buttonPrev = useRef<HTMLButtonElement | null>(null);
  const buttonNext = useRef<HTMLButtonElement | null>(null);

  return (
    <section className={styles.slider}>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Scrollbar]}
          className={styles.sliderSwiper}
          observer={true}
          observeParents={true}
          speed={400}
          navigation={{
            prevEl: buttonPrev.current,
            nextEl: buttonNext.current,
          }}
          scrollbar={{
            dragSize: 67,
            draggable: true,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = buttonPrev.current;
            swiper.params.navigation.nextEl = buttonNext.current;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              observer: true,
              observeParents: true,
              speed: 400,
            },
            640: {
              slidesPerView: 2,
              observer: true,
              observeParents: true,
              speed: 400,
            },
            900: {
              slidesPerView: 3,
              observer: true,
              observeParents: true,
              speed: 400,
            },
            1366: {
              slidesPerView: 2,
              observer: true,
              observeParents: true,
              speed: 400,
            },
          }}
          slidesPerView={2}
        >
          {sliderItems.map((sliderItem) => (
            <SwiperSlide key={sliderItem.id}>
              <a href="" className={styles.sliderItem}>
                <div
                  className={`${styles.sliderItemCategory} ${sliderItem.className}`}
                >
                  {sliderItem.title}
                </div>
                <div className={styles.sliderItemImg}>
                  <Image src={sliderItem.src} alt="" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.sliderNavigation}>
          <button ref={buttonPrev} className={styles.sliderButtonPrev}></button>
          <button ref={buttonNext} className={styles.sliderButtonNext}></button>
        </div>
      </div>
    </section>
  );
};

export default HomeCategorySlider;
