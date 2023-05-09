import { FC, useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "node_modules/swiper/modules/scrollbar/scrollbar.scss";
import "swiper/scss";
import styles from "./HomeCategorySlider.module.scss";
import { friendsAPI } from "@/services/Friends.service";

const HomeCategorySlider: FC = () => {
  const buttonPrev = useRef<HTMLButtonElement | null>(null);
  const buttonNext = useRef<HTMLButtonElement | null>(null);

  const { data: categories } = friendsAPI.useGetCategoriesQuery("");

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
          {categories &&
            categories.map((category) => (
              <SwiperSlide key={category.id}>
                <a href="" className={styles.sliderItem}>
                  <div className={styles.sliderItemCategory}>
                    {category.title}
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image
                      src={category.imageLink}
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
