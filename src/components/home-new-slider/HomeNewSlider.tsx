import { FC, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import "swiper/scss";
import styles from "./HomeNewSlider.module.scss";
import "node_modules/swiper/modules/pagination/pagination.scss";

import wc from "./images/wc.svg";
import cartPet1 from "./images/01.png";

const HomeNewSlider: FC = () => {
  const buttonPrev = useRef<HTMLButtonElement | null>(null);
  const buttonNext = useRef<HTMLButtonElement | null>(null);

  const sliderItems = [
    {
      id: 1,
      age: 2,
      name: "Папуга Гриша",
      description: "Папуга-балакун чудовий новий друг для всієї родини",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: true,
      images: [cartPet1, cartPet1],
    },
    {
      id: 2,
      age: 2,
      name: "Папуга Гриша",
      description: "Папуга-балакун чудовий новий друг для всієї родини",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: true,
      images: [cartPet1, cartPet1],
    },
    {
      id: 3,
      age: 2,
      name: "Папуга Гриша",
      description: "Папуга-балакун чудовий новий друг для всієї родини",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: false,
      images: [cartPet1, cartPet1, cartPet1],
    },
    {
      id: 4,
      age: 12,
      name: "Папуга Гриша",
      description: "Папуга-балакун чудовий новий друг для всієї родини",
      category: "parrot",
      price: 1000,
      sex: "male",
      wc: false,
      images: [cartPet1, cartPet1],
    },
  ];

  return (
    <section className={styles.new}>
      <div className={styles.newContainer}>
        <h2 className={styles.newTitle}>Последние поступления</h2>
        <div className={styles.newSlider}>
          <Swiper
            className={styles.newSwiper}
            modules={[Navigation, Pagination]}
            observer={true}
            watchOverflow={true}
            observeParents={true}
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={30}
            speed={400}
            navigation={{
              prevEl: buttonPrev.current,
              nextEl: buttonNext.current,
            }}
            pagination={{
              clickable: true,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = buttonPrev.current;
              swiper.params.navigation.nextEl = buttonNext.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                observer: true,
                observeParents: true,
                speed: 400,
              },
              800: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                observer: true,
                observeParents: true,
                speed: 400,
              },
              1000: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                observer: true,
                observeParents: true,
                speed: 400,
              },
            }}
          >
            {sliderItems.map((sliderItem) => (
              <SwiperSlide key={sliderItem.id}>
                <Link
                  href={"/friends/" + sliderItem.id}
                  className={styles.newItem}
                >
                  <div className={styles.newItemWrapper}>
                    <div className={styles.newItemHeader}>
                      <div className={styles.newItemHeaderTag}>
                        <div className={styles.newItemHeaderTagBadge}>
                          <div className={styles.newItemHeaderTagValue}>
                            {sliderItem.age}
                          </div>
                          <div className={styles.newItemHeaderTagText}>
                            месяцев
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          sliderItem.wc
                            ? `${styles.newItemHeaderWc} ${styles.newItemHeaderWcGreen}`
                            : `${styles.newItemHeaderWc} ${styles.newItemHeaderWcRed}`
                        }
                      >
                        <Image src={wc} alt="" />
                      </div>
                    </div>
                    <div className={styles.newItemBody}>
                      <Image
                        src={sliderItem.images[0]}
                        alt=""
                        className={styles.newItemBodyImg}
                      />
                      <div className={styles.newItemBodyInfo}>
                        <div className={styles.newItemBodyInfoTitle}>
                          {sliderItem.name}
                        </div>
                        <div className={styles.newItemBodyInfoText}>
                          {sliderItem.description}
                        </div>
                        <div className={styles.newItemBodyInfoTags}>
                          <div className={styles.newItemBodyInfoTagsAnimal}>
                            {sliderItem.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.newItemFooter}>
                    <div className={styles.newItemFooterPrice}>
                      {sliderItem.price}
                    </div>
                    <div className={styles.newItemFooterBadge}></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.newNavigation}>
            <button ref={buttonPrev} className={styles.newButtonPrev}></button>
            <button ref={buttonNext} className={styles.newButtonNext}></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewSlider;
