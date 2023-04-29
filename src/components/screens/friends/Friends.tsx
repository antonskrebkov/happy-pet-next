import Layout from "@/components/layout/Layout";
import React from "react";
import styles from "./Friends.module.scss";
import Select from "react-select";
import cartPet1 from "@/components/screens/home/images/pets/01.png";
import wc from "@/components/screens/home/icons/wc.svg";
import cart from "./icons/cart.svg";
import Image from "next/image";

export default function Friends() {
  const kindOptions = [
    { value: "Черепаха", label: "Черепаха" },
    { value: "Кот", label: "Кот" },
    { value: "Кролик", label: "Кролик" },
    { value: "Собака", label: "Собака" },
    { value: "Обезьяна", label: "Обезьяна" },
    { value: "Попугай", label: "Попугай" },
  ];
  const sexOptions = [
    { value: "Мальчик", label: "Мальчик" },
    { value: "Девочка", label: "Девочка" },
  ];
  const ageOptions = [
    { value: "< 12 месяцев", label: "< 12 месяцев" },
    { value: "> 12 месяцев", label: "> 12 месяцев" },
  ];
  const wcOptions = [
    { value: "Да", label: "Да" },
    { value: "Нет", label: "Нет" },
  ];
  const sortOptions = [
    { value: "по новизне", label: "по новизне" },
    { value: "по возрастанию цены", label: "по возрастанию цены" },
    { value: "по убыванию цены", label: "по убыванию цены" },
  ];

  return (
    <Layout>
      <main className={styles.friends}>
        <section className={styles.breadcrumbs}>
          <div className={styles.breadcrumbsContainer}>
            <ul className={styles.breadcrumbsList}>
              <li className={styles.breadcrumbsItem}>
                <a href="" className={styles.breadcrumbsLink}>
                  Главная
                </a>
              </li>
              <li className={styles.breadcrumbsItem}>
                <a href="" className={styles.breadcrumbsLink}>
                  Друзья
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.choose}>
          <div className={styles.chooseContainer}>
            <h1 className={styles.chooseTitle}>Выбрать друга</h1>
            <div className={styles.chooseQuantity}>
              Количество животных: <span>0</span>
            </div>
          </div>
        </section>
        <section className={styles.filter}>
          <div className={styles.filterContainer}>
            <div className={styles.filterFriend}>
              <Select
                styles={{
                  valueContainer: () => ({
                    display: "flex",
                    width: "100%",
                  }),
                  control: () => ({
                    cursor: "pointer",
                    display: "flex",
                    height: "24px",
                    borderBottom: "1px solid #000",
                  }),
                  singleValue: () => ({
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: () => ({
                    width: "16px",
                    height: "20px",
                  }),
                  placeholder: () => ({
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  menu: () => ({
                    position: "relative",
                    zIndex: 2,
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                    backgroundColor: "#fbf6ed",
                    border: "none",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }),
                  option: () => ({
                    fontSize: "15px",
                    padding: "7px 5px",
                    fontWeight: "400",
                    transition: "background-color .2s",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#f2e1c3",
                    },
                  }),
                }}
                placeholder="Питомец"
                isSearchable={false}
                options={kindOptions}
              ></Select>
            </div>
            <div className={styles.filterFriend}>
              <Select
                styles={{
                  valueContainer: () => ({
                    display: "flex",
                    width: "100%",
                  }),
                  control: () => ({
                    cursor: "pointer",
                    display: "flex",
                    height: "24px",
                    borderBottom: "1px solid #000",
                  }),
                  singleValue: () => ({
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: () => ({
                    width: "16px",
                    height: "20px",
                  }),
                  placeholder: () => ({
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  menu: () => ({
                    position: "relative",
                    zIndex: 2,
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                    backgroundColor: "#fbf6ed",
                    border: "none",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }),
                  option: () => ({
                    fontSize: "15px",
                    padding: "7px 5px",
                    fontWeight: "400",
                    transition: "background-color .2s",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#f2e1c3",
                    },
                  }),
                }}
                placeholder="Пол"
                isSearchable={false}
                options={sexOptions}
              ></Select>
            </div>
            <div className={styles.filterFriend}>
              <Select
                styles={{
                  valueContainer: () => ({
                    display: "flex",
                    width: "100%",
                  }),
                  control: () => ({
                    cursor: "pointer",
                    display: "flex",
                    height: "24px",
                    borderBottom: "1px solid #000",
                  }),
                  singleValue: () => ({
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: () => ({
                    width: "16px",
                    height: "20px",
                  }),
                  placeholder: () => ({
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  menu: () => ({
                    position: "relative",
                    zIndex: 2,
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                    backgroundColor: "#fbf6ed",
                    border: "none",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }),
                  option: () => ({
                    fontSize: "15px",
                    padding: "7px 5px",
                    fontWeight: "400",
                    transition: "background-color .2s",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#f2e1c3",
                    },
                  }),
                }}
                placeholder="Возраст"
                isSearchable={false}
                options={ageOptions}
              ></Select>
            </div>
            <div className={styles.filterFriend}>
              <Select
                styles={{
                  valueContainer: () => ({
                    display: "flex",
                    width: "100%",
                  }),
                  control: () => ({
                    cursor: "pointer",
                    display: "flex",
                    height: "24px",
                    borderBottom: "1px solid #000",
                  }),
                  singleValue: () => ({
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: () => ({
                    width: "16px",
                    height: "20px",
                  }),
                  placeholder: () => ({
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }),
                  menu: () => ({
                    position: "relative",
                    zIndex: 2,
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                    backgroundColor: "#fbf6ed",
                    border: "none",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }),
                  option: () => ({
                    fontSize: "15px",
                    padding: "7px 5px",
                    fontWeight: "400",
                    transition: "background-color .2s",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#f2e1c3",
                    },
                  }),
                }}
                placeholder="Туалет"
                isSearchable={false}
                options={wcOptions}
              ></Select>
            </div>
          </div>
        </section>
        <section className={styles.sort}>
          <div className={styles.sortContainer}>
            <div className={styles.sortBody}>
              <div className={styles.sortLabel}>Сортировать</div>
              <Select
                styles={{
                  valueContainer: () => ({
                    display: "flex",
                    width: "100%",
                  }),
                  control: () => ({
                    cursor: "pointer",
                    display: "flex",
                    height: "16px",
                  }),
                  singleValue: () => ({
                    fontSize: "13px",
                    fontWeight: "700",
                    paddingTop: "1px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: () => ({
                    width: "16px",
                    height: "20px",
                  }),
                  menu: () => ({
                    position: "fixed",
                    zIndex: 2,
                    marginTop: 10,
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 0 9px rgba(89, 71, 38, 0.2)",
                    borderRadius: "10px",
                  }),
                  option: () => ({
                    fontSize: "13px",
                    padding: "7px 5px",
                    fontWeight: "400",
                    transition: "background-color .2s",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  }),
                }}
                isSearchable={false}
                className={styles.sortSelect}
                options={sortOptions}
                defaultValue={sortOptions[0]}
              ></Select>
            </div>
          </div>
        </section>
        <section className={styles.catalog}>
          <div className={styles.catalogContainer}>
            <div className={styles.catalogItems}>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
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
                        <div className={styles.catalogItemBodyInfoTagsAnimal}>
                          Попугай
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.catalogItemFooter}>
                  <div className={styles.catalogItemFooterPrice}>1900</div>
                  <button className={styles.catalogItemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
