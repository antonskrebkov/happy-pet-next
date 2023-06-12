import { useState, FC } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Friend.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/scss";
import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "public/chevron-down.svg";
import { friendsAPI } from "@/services/Friends.service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { addToCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";

interface FriendsProps {
  id: string;
}

const Friend: FC<FriendsProps> = ({ id }) => {
  const { locale } = useRouter();

  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { data: friend, isLoading } = friendsAPI.useGetFriendQuery(id);

  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart);

  if (isLoading) {
    return "";
  }
  if (!friend) return <div>Missing friend!</div>;
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

  return (
    friend && (
      <Layout
        title={friend.name}
        description={`${friend.name}. ${friend.shortDescription}`}
        keywords={friend.name}
      >
        <main className={styles.friend}>
          <div className={styles.container}>
            <Breadcrumbs />
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
                        key={index}
                        src={image}
                        width={450}
                        height={450}
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
                        key={index}
                        src={image}
                        width={150}
                        height={150}
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
                <p className={styles.price}>
                  {formatPrice(friend.price, locale)}
                </p>
                <button
                  className={
                    cartList.find((cartItem) => cartItem.id === friend.id)
                      ? `${styles.add} ${styles.inCart}`
                      : styles.add
                  }
                  onClick={() => dispatch(addToCart(friend))}
                >
                  {cartList.find((cartItem) => cartItem.id === friend.id)
                    ? "Додано у переноску"
                    : "Додати у переноску"}
                </button>
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
                      <p className={styles.detailsRowValue}>
                        {friend.category}
                      </p>
                    </div>
                    <div className={styles.detailsRow}>
                      <p className={styles.detailsRowKey}>Вік</p>
                      <p className={styles.detailsRowValue}>
                        {friend.age} міс.
                      </p>
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
    )
  );
};
export default Friend;
