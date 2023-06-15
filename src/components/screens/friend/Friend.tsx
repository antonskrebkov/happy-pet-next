import { useState, FC } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Friend.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
// import {} from "swiper/types/modules/thumbs"
import "swiper/scss";
import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "public/chevron-down.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { addToCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";
import { IFriend } from "@/interfaces/IFriend";
import { useTranslation } from "next-i18next";
import yes from "public/yes.svg";
import no from "public/no.svg";
import { capitalize } from "@/utils/categories";

interface FriendsProps {
  friend: IFriend;
}

const Friend: FC<FriendsProps> = ({ friend }) => {
  const { locale } = useRouter();

  const { t } = useTranslation("friend");

  const [thumbsSwiper, setThumbsSwiper] = useState();

  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart);

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
                    swiper: thumbsSwiper,
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
                  onSwiper={() => setThumbsSwiper}
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
                <h2 className={styles.title}>
                  {locale === "en" ? friend.name : friend.nameUA}
                </h2>
                <p className={styles.shortId}>ID: {friend.id}</p>
                <p className={styles.shortDescription}>
                  {locale === "en"
                    ? friend.shortDescription
                    : friend.shortDescriptionUA}
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
                    ? t("cart-button-added")
                    : t("cart-button-add")}
                </button>
                <Accordion
                  className={styles.details}
                  transition
                  transitionTimeout={200}
                >
                  <AccordionItem header={t("accordion-item-1")}>
                    <p className={styles.detailsText}>
                      {locale === "en"
                        ? friend.description
                        : friend.descriptionUA}
                    </p>
                  </AccordionItem>
                  <AccordionItem header={t("accordion-item-2")}>
                    <div className={styles.detailsRow}>
                      <p className={styles.detailsRowKey}>
                        {t("details-key-1")}
                      </p>
                      <p className={styles.detailsRowValue}>
                        {capitalize(
                          locale === "en" ? friend.category : friend.categoryUA
                        )}
                      </p>
                    </div>
                    <div className={styles.detailsRow}>
                      <p className={styles.detailsRowKey}>
                        {t("details-key-2")}
                      </p>
                      <p className={styles.detailsRowValue}>
                        {friend.age} {t("details-key-2-months")}
                      </p>
                    </div>
                    <div className={styles.detailsRow}>
                      <p className={styles.detailsRowKey}>
                        {t("details-key-3")}
                      </p>
                      <p className={styles.detailsRowValue}>
                        {capitalize(
                          locale === "en" ? friend.sex : friend.sexUA
                        )}
                      </p>
                    </div>
                    <div className={styles.detailsRow}>
                      <p className={styles.detailsRowKey}>
                        {t("details-key-4")}
                      </p>
                      <p className={styles.detailsRowValue}>
                        <Image
                          className={styles.detailsRowValueImage}
                          src={friend.wc ? yes : no}
                          alt=""
                        />
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
