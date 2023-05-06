import { FC, useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "node_modules/swiper/modules/scrollbar/scrollbar.scss";
import "swiper/scss";
import styles from "./HomeCategorySlider.module.scss";

interface ISliderItem {
  id: number;
  title: string;
  link: string;
  imageLink: string;
  className: string;
}

const HomeCategorySlider: FC = () => {
  const sliderItems: ISliderItem[] = [
    {
      id: 1,
      title: "Обезьяны",
      link: "/",
      imageLink: "https://i.imgur.com/agxE50Y.png",
      className: styles.sliderItemCategoryMonkey,
    },
    {
      id: 2,
      title: "Рептилии",
      link: "/",
      imageLink: "https://i.imgur.com/Nr7bo6n.png",
      className: styles.sliderItemCategoryReptile,
    },
    {
      id: 3,
      title: "Грызуны",
      link: "/",
      imageLink: "https://i.imgur.com/ovZEhW9.png",
      className: styles.sliderItemCategoryRodent,
    },
    {
      id: 4,
      title: "Кошки",
      link: "/",
      imageLink: "https://i.imgur.com/6nPbXz3.png",
      className: styles.sliderItemCategoryCat,
    },
    {
      id: 5,
      title: "Собаки",
      link: "/",
      imageLink: "https://i.imgur.com/frdo1M5.png",
      className: styles.sliderItemCategoryDog,
    },
    {
      id: 6,
      title: "Попугаи",
      link: "/",
      imageLink: "https://i.imgur.com/wrH12RE.png",
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
                  <Image
                    src={sliderItem.imageLink}
                    width={127}
                    height={136}
                    alt=""
                  />
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
