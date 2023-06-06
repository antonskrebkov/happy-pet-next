import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import styles from "./HomeNewSlider.module.scss";
import "node_modules/swiper/modules/pagination/pagination.scss";
import FriendItem from "../UI/friend-item/FriendItem";
import { IFriend } from "@/interfaces/IFriend";
import { formatPrice } from "@/utils/price";

interface HomeNewSliderProps {
  friends: IFriend[] | undefined;
}

const HomeNewSlider: FC<HomeNewSliderProps> = ({ friends }) => {
  const buttonPrev = useRef<HTMLButtonElement | null>(null);
  const buttonNext = useRef<HTMLButtonElement | null>(null);

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
            {friends &&
              friends.map((friend) => (
                <SwiperSlide key={friend.id}>
                  <FriendItem friend={friend}>
                    <div className={styles.itemFooterPrice}>
                      {formatPrice(friend.price)}
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
