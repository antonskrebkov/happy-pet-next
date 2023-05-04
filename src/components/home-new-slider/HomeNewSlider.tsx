import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import styles from "./HomeNewSlider.module.scss";
import "node_modules/swiper/modules/pagination/pagination.scss";
import friend1 from "./images/01.png";
import FriendItem from "../UI/friend-item/FriendItem";

const HomeNewSlider: FC = () => {
  const buttonPrev = useRef<HTMLButtonElement | null>(null);
  const buttonNext = useRef<HTMLButtonElement | null>(null);

  const sliderItems = [
    {
      id: 1,
      age: 2,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: true,
      images: [friend1, friend1],
    },
    {
      id: 2,
      age: 2,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: true,
      images: [friend1, friend1],
    },
    {
      id: 3,
      age: 2,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: false,
      images: [friend1, friend1, friend1],
    },
    {
      id: 4,
      age: 12,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 1000,
      sex: "male",
      wc: false,
      images: [friend1, friend1],
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
                <FriendItem friend={sliderItem}>
                  <div className={styles.itemFooterPrice}>
                    {sliderItem.price}
                  </div>
                  <div className={styles.itemFooterBadge}></div>
                </FriendItem>
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
