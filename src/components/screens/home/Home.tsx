import { FC, useRef, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Home.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "node_modules/swiper/modules/pagination/pagination.scss";
import "node_modules/swiper/modules/scrollbar/scrollbar.scss";
import { Navigation, Pagination, Scrollbar } from "swiper";
import pets from "./images/pets.png";
import pet1 from "./images/slider-categories/01.png";
import pet2 from "./images/slider-categories/02.png";
import pet3 from "./images/slider-categories/03.png";
import pet4 from "./images/slider-categories/04.png";
import pet5 from "./images/slider-categories/05.png";
import pet6 from "./images/slider-categories/06.png";
import icon1 from "./icons/01.svg";
import icon2 from "./icons/02.svg";
import icon3 from "./icons/03.svg";
import wc from "./icons/wc.svg";
import cartPet1 from "./images/pets/01.png";
import Select from "react-select";
import Link from "next/link";

interface IConfirmation {
  isPersonalDataChecked: boolean;
  isPrivacyPolicyChecked: boolean;
}

import about from "./images/about.jpeg";
import Fancybox from "@/components/fancybox/Fancybox";

const Home = () => {
  const homeSliderButtonPrev = useRef(null);
  const homeSliderButtonNext = useRef(null);

  const catalogSliderButtonPrev = useRef(null);
  const catalogSliderButtonNext = useRef(null);

  const [isSelectActive, setIsSelectActive] = useState(false);

  const [confirmation, setConfirmation] = useState<IConfirmation>({
    isPersonalDataChecked: false,
    isPrivacyPolicyChecked: false,
  });

  // const [isPersonalDataChecked, setIsPersonalDataChecked] = useState(false);
  // const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);

  const options = [
    { value: "Тема 1", label: "Тема 1" },
    { value: "Тема 2", label: "Тема 2" },
    { value: "Тема 3", label: "Тема 3" },
    { value: "Тема 4", label: "Тема 4" },
  ];

  return (
    <Layout>
      <main className={styles.home}>
        <section className={styles.mainBlock}>
          <div className={styles.mainBlockContainer}>
            <div className={styles.mainBlockItem}>
              <h2 className={styles.mainBlockTitle}>
                Твой новый друг с доставкой на дом
              </h2>
              <div className={styles.mainBlockText}>
                Онлайн-магазин домашних животных подарит тебе нового друга в
                несколько кликов. Действуй!
              </div>
              <Link href="/friends" className={styles.mainBlockButton}>
                Посмотреть друзей
              </Link>
            </div>
            <div className={styles.mainBlockImg}>
              <Image src={pets} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.slider}>
          <div className={styles.sliderContainer}>
            <div
              ref={homeSliderButtonPrev}
              className={styles.sliderButtonPrev}
            ></div>
            <Swiper
              modules={[Navigation, Scrollbar]}
              className={styles.sliderSwiper}
              observer={true}
              observeParents={true}
              speed={400}
              navigation={{
                prevEl: homeSliderButtonPrev.current,
                nextEl: homeSliderButtonNext.current,
              }}
              scrollbar={{
                // el: homeSliderScrollbar.current,
                dragSize: 67,
                draggable: true,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = homeSliderButtonPrev.current;
                swiper.params.navigation.nextEl = homeSliderButtonNext.current;
                // swiper.params.scrollbar = homeSliderScrollbar.current;
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
              <SwiperSlide>
                <a href="" className={styles.sliderItem}>
                  <div
                    className={`${styles.sliderItemCategory} ${styles.sliderItemCategoryMonkey}`}
                  >
                    Обезьяны
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image src={pet1} width="127" height="136" alt="" />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" className={styles.sliderItem}>
                  <div
                    className={`${styles.sliderItemCategory} ${styles.sliderItemCategoryReptile}`}
                  >
                    Рептилии
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image src={pet2} width="127" height="136" alt="" />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" className={styles.sliderItem}>
                  <div
                    className={`${styles.sliderItemCategory} ${styles.sliderItemCategoryRodent}`}
                  >
                    Грызуны
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image src={pet3} width="127" height="136" alt="" />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" className={styles.sliderItem}>
                  <div
                    className={`${styles.sliderItemCategory} ${styles.sliderItemCategoryCat}`}
                  >
                    Кошки
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image src={pet4} width="127" height="136" alt="" />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" className={styles.sliderItem}>
                  <div
                    className={`${styles.sliderItemCategory} ${styles.sliderItemCategoryDog}`}
                  >
                    Собаки
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image src={pet5} width="127" height="136" alt="" />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" className={styles.sliderItem}>
                  <div
                    className={`${styles.sliderItemCategory} ${styles.sliderItemCategoryParrot}`}
                  >
                    Попугаи
                  </div>
                  <div className={styles.sliderItemImg}>
                    <Image src={pet6} width="127" height="136" alt="" />
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
            <div
              ref={homeSliderButtonNext}
              className={styles.sliderButtonNext}
            ></div>
          </div>
        </section>
        <section className={styles.choise}>
          <div className={styles.choiseContainer}>
            <h2 className={styles.choiseTitle}>Почему выбирают наших друзей</h2>
            <div className={styles.choiseItems}>
              <div className={styles.choiseItem}>
                <Image className={styles.choiseItemImg} src={icon1} alt="" />
                <div className={styles.choiseItemBody}>
                  <div className={styles.choiseItemTitle}>Их много</div>
                  <div className={styles.choiseItemText}>
                    Огромный выбор животных, птиц и питомцев
                  </div>
                </div>
              </div>
              <div className={styles.choiseItem}>
                <Image className={styles.choiseItemImg} src={icon2} alt="" />
                <div className={styles.choiseItemBody}>
                  <div className={styles.choiseItemTitle}>Они здоровы</div>
                  <div className={styles.choiseItemText}>
                    Мы заботимся о каждом питомце, который с нами
                  </div>
                </div>
              </div>
              <div className={styles.choiseItem}>
                <Image className={styles.choiseItemImg} src={icon3} alt="" />
                <div className={styles.choiseItemBody}>
                  <div className={styles.choiseItemTitle}>Их любят</div>
                  <div className={styles.choiseItemText}>
                    Мы окружаем любовью и вниманием наших друзей
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.catalog}>
          <div className={styles.catalogContainer}>
            <h2 className={styles.catalogTitle}>Последние поступления</h2>
            <div className={styles.catalogSlider}>
              <Swiper
                className={styles.catalogSwiper}
                modules={[Navigation, Pagination]}
                observer={true}
                watchOverflow={true}
                observeParents={true}
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={30}
                speed={400}
                navigation={{
                  prevEl: catalogSliderButtonPrev.current,
                  nextEl: catalogSliderButtonNext.current,
                }}
                pagination={{
                  // el: catalogSliderPagination.current,
                  clickable: true,
                }}
                onBeforeInit={(swiper: any) => {
                  swiper.params.navigation.prevEl =
                    catalogSliderButtonPrev.current;
                  swiper.params.navigation.nextEl =
                    catalogSliderButtonNext.current;
                  // swiper.params.scrollbar = homeSliderScrollbar.current;
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
                // spaceBetween={50}
                // slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="" className={styles.catalogItem}>
                    <div className={styles.catalogItemWrapper}>
                      <div className={styles.catalogItemHeader}>
                        <div className={styles.catalogItemHeaderTag}>
                          <div className={styles.catalogItemHeaderTagBadge}>
                            <div className={styles.catalogItemHeaderTagValue}>
                              2
                            </div>
                            <div className={styles.catalogItemHeaderTagText}>
                              месяцев
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.catalogItemHeaderWc} ${styles.catalogItemHeaderWcGreen}`}
                        >
                          <Image src={wc} alt="" />
                        </div>
                      </div>
                      <div className={styles.catalogItemBody}>
                        <Image
                          src={cartPet1}
                          alt=""
                          className={styles.catalogItemBodyImg}
                        />
                        <div className={styles.catalogItemBodyInfo}>
                          <div className={styles.catalogItemBodyInfoTitle}>
                            Попугай Гриша
                          </div>
                          <div className={styles.catalogItemBodyInfoText}>
                            Попугай-говорун отличный новый друг для всей семьи
                          </div>
                          <div className={styles.catalogItemBodyInfoTags}>
                            <div
                              className={styles.catalogItemBodyInfoTagsAnimal}
                            >
                              Попугай
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.catalogItemFooter}>
                      <div className={styles.catalogItemFooterPrice}>1900</div>
                      <div className={styles.catalogItemFooterBadge}></div>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <div
                ref={catalogSliderButtonPrev}
                className={styles.catalogButtonPrev}
              ></div>
              <div
                ref={catalogSliderButtonNext}
                className={styles.catalogButtonNext}
              ></div>
            </div>
          </div>
        </section>
        <section className={styles.gallery}>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryTitle}>Мы любим поиграть</div>
            <Fancybox>
              <div className={styles.galleryColumns}>
                <div className={styles.galleryColumn}>
                  <a
                    href="http://localhost:3002/assets/images/gallery/01.jpg"
                    className={`${styles.galleryImg} ${styles.galleryImgS}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src="http://localhost:3002/assets/images/gallery/01.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="http://localhost:3002/assets/images/gallery/02.jpg"
                    className={`${styles.galleryImg} ${styles.galleryImgL}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src="http://localhost:3002/assets/images/gallery/02.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className={styles.galleryColumn}>
                  <a
                    href="http://localhost:3002/assets/images/gallery/03.jpg"
                    className={`${styles.galleryImg} ${styles.galleryImgL}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src="http://localhost:3002/assets/images/gallery/03.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="http://localhost:3002/assets/images/gallery/04.jpg"
                    className={`${styles.galleryImg} ${styles.galleryImgS}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src="http://localhost:3002/assets/images/gallery/04.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className={styles.galleryColumn}>
                  <a
                    href="http://localhost:3002/assets/images/gallery/05.jpg"
                    className={`${styles.galleryImg} ${styles.galleryImgM}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src="http://localhost:3002/assets/images/gallery/05.jpg"
                      alt=""
                    />
                  </a>
                  <a
                    href="http://localhost:3002/assets/images/gallery/06.jpg"
                    className={`${styles.galleryImg} ${styles.galleryImgM}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src="http://localhost:3002/assets/images/gallery/06.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </Fancybox>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.aboutContainer}>
            <h2 className={styles.aboutTitle}>О питомнике Happy Pet</h2>
            <div className={styles.aboutBody}>
              <div className={styles.aboutDescription}>
                <h3 className={styles.aboutDescriptionTitle}>
                  Мы - команда мечтателей
                </h3>
                <div className={styles.aboutDescriptionText}>
                  <p>
                    Частный приют для животных «Happy pet» был основан в 2014
                    году в селе Фасова, Макаровского района, Киевской области на
                    базе общественной организации «Зооцентр «Ковчег» Оноприенко
                    Галиной Федоровной и построен за ее собственные средства.
                    Галина Федоровна является владельцем приюта и его
                    директором.
                  </p>
                  <p>
                    На данный момент в приюте проживают около 1000 животных:
                    собаки, коты, обезьяны, грызуны, попугаи и рептилии. Их
                    количество постепенно увеличивается.
                  </p>
                </div>
                <Link href="/about" className={styles.aboutDescriptionLink}>
                  Читать больше
                </Link>
              </div>
              <div className={styles.aboutImg}>
                <Image src={about} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.questions}>
          <div className={styles.questionsContainer}>
            <h2 className={styles.questionsTitle}>Есть вопросы? Задавайте!</h2>
            <form action="#" className={styles.questionsForm}>
              <div className={styles.questionsFormColumn}>
                <div className={styles.questionsFormRow}>
                  <div className={styles.questionsFormWrapper}>
                    <input
                      type="text"
                      className={styles.questionsFormInput}
                      placeholder="Введите имя *"
                    />
                    <span className={styles.questionsFormLine}></span>
                  </div>
                  <div className={styles.questionsFormWrapper}>
                    <input
                      type="email"
                      className={styles.questionsFormInput}
                      placeholder="Введите E-mail *"
                    />
                    <span className={styles.questionsFormLine}></span>
                  </div>
                </div>
                <div className={styles.questionsFormRow}>
                  <div className={styles.questionsFormWrapper}>
                    <input
                      type="tel"
                      className={styles.questionsFormInput}
                      placeholder="Введите телефон *"
                    />
                    <span className={styles.questionsFormLine}></span>
                  </div>
                  <div className={styles.questionsFormWrapper}>
                    <div
                      onClick={() => setIsSelectActive(!isSelectActive)}
                      className={styles.questionsFormSelect}
                    >
                      <Select
                        styles={{
                          valueContainer: () => ({
                            display: "flex",
                            width: "100%",
                          }),
                          control: () => ({
                            width: "100%",
                            color: "#fff",
                            cursor: "pointer",
                            display: "flex",
                            height: "42px",
                            "@media (max-width: 570px)": {
                              height: "28px",
                            },
                          }),
                          singleValue: () => ({
                            color: "#fff",
                            fontSize: "18px",
                            "@media (max-width: 570px)": {
                              fontSize: "14px",
                            },
                          }),
                          indicatorSeparator: () => ({
                            display: "none",
                          }),
                          dropdownIndicator: () => ({
                            alignSelf: "flex-start",
                            color: "#fff",
                            width: "16px",
                            height: "22px",
                            boxSizing: "border-box",
                          }),
                          menuList: () => ({
                            height: "auto",
                            backgroundColor: "#000",
                            color: "#fff",
                          }),
                          option: () => ({
                            fontSize: "18px",
                            padding: "3px 0",
                            transition: "color .2s",
                            ":hover": {
                              color: "#f52456",
                            },
                            "@media (max-width: 570px)": {
                              fontSize: "14px",
                            },
                          }),
                        }}
                        options={options}
                        defaultValue={options[0]}
                        isSearchable={false}
                      ></Select>
                      <span
                        className={
                          isSelectActive
                            ? `${styles.questionsFormLine} ${styles.active}`
                            : styles.questionsFormLine
                        }
                      ></span>
                    </div>
                  </div>
                </div>
                <div className={styles.questionsFormRow}>
                  <div
                    className={`${styles.questionsFormWrapper} ${styles.questionsFormWrapperTextarea}`}
                  >
                    <textarea
                      name=""
                      id=""
                      className={styles.questionsFormMessage}
                      placeholder="Введите сообщение"
                    ></textarea>
                    <span className={styles.questionsFormLine}></span>
                  </div>
                </div>
                <div
                  className={`${styles.questionsFormRow} ${styles.questionsFormRowCb}`}
                >
                  <label
                    htmlFor="formPersonalData"
                    className={styles.questionsFormCheckbox}
                  >
                    <input
                      id="formPersonalData"
                      type="checkbox"
                      className="required"
                      onChange={() =>
                        setConfirmation({
                          ...confirmation,
                          isPersonalDataChecked:
                            !confirmation.isPersonalDataChecked,
                        })
                      }
                      checked={confirmation.isPersonalDataChecked}
                    />
                    <span>
                      Я согласен на обработку моих персональных данных
                    </span>
                  </label>
                  <label
                    htmlFor="formPrivacyPolicy"
                    className={styles.questionsFormCheckbox}
                  >
                    <input
                      id="formPrivacyPolicy"
                      type="checkbox"
                      className="required"
                      onChange={() =>
                        setConfirmation({
                          ...confirmation,
                          isPrivacyPolicyChecked:
                            !confirmation.isPrivacyPolicyChecked,
                        })
                      }
                      checked={confirmation.isPrivacyPolicyChecked}
                    />
                    <span>
                      Я согласен с <a href="">Политикой конфиденциальности</a>
                    </span>
                  </label>
                </div>
              </div>
              <div className={styles.questionsFormColumn}>
                <button
                  type="submit"
                  className={styles.questionsFormButton}
                ></button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
