import { FC, useRef } from "react";
import Image from "next/image";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "node_modules/swiper/modules/scrollbar/scrollbar.scss";
import "swiper/scss";
import styles from "./HomeCategorySlider.module.scss";
import { useAppDispatch } from "@/store/hooks";
import { addNewFilter } from "@/store/slices/querySlice";
import { capitalize, capitalizeInPlural } from "@/utils/categories";
import Link from "next/link";
import { useRouter } from "next/router";
import { ICategory } from "@/interfaces/ICategory";

interface HomeCategorySliderProps {
  categories: ICategory[];
}

const HomeCategorySlider: FC<HomeCategorySliderProps> = ({ categories }) => {
  const { locale } = useRouter();

  const dispatch = useAppDispatch();

  const handleClick = (e: React.SyntheticEvent<EventTarget>, value: string) => {
    e.preventDefault();
    dispatch(addNewFilter({ key: "category", value }));
  };

  return (
    <section className={styles.slider}>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Scrollbar]}
          className={styles.sliderSwiper}
          observer={true}
          observeParents={true}
          speed={400}
          navigation
          scrollbar={{
            dragSize: 67,
            draggable: true,
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
              <SwiperSlide
                key={category.id}
                onClick={(e) => handleClick(e, category.titleEN)}
              >
                <Link href="/friends" className={styles.sliderItem}>
                  <div className={styles.sliderItemCategory}>
                    {locale === "en"
                      ? capitalizeInPlural(category.titleEN)
                      : capitalize(category.titleUA)}
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image
                      src={category.imageLink}
                      width={127}
                      height={136}
                      alt=""
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCategorySlider;
