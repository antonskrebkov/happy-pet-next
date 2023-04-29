import { FC, useEffect, useRef, useState } from "react";
import Select from "react-select";
import styles from "./header.module.scss";
import cartPet from "src/components/screens/home/images/pets/07.png";
import Image from "next/image";
import deleteIcon from "./icons/delete.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { pathname } = useRouter();

  const options = [
    { value: "UA", label: "UA" },
    { value: "EN", label: "EN" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const headerEl = useRef(null);

  useEffect(() => {
    const observer: any = new IntersectionObserver(function (
      entries,
      observer
    ) {
      if (entries[0].isIntersecting) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    });
    observer.observe(headerEl.current);
  }, []);

  return (
    <header ref={headerEl} className={styles.header}>
      <div
        className={
          isScroll
            ? styles.wrapperScrolled
            : pathname !== "/"
            ? styles.wrapperBg
            : styles.wrapper
        }
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Happy pet
          </Link>
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? `${styles.menuLink} ${styles.active}`
                      : styles.menuLink
                  }
                >
                  Главная
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/friends"
                  className={
                    pathname === "/friends"
                      ? `${styles.menuLink} ${styles.active}`
                      : styles.menuLink
                  }
                >
                  Друзья
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/about"
                  className={
                    pathname === "/about"
                      ? `${styles.menuLink} ${styles.active}`
                      : styles.menuLink
                  }
                >
                  О нас
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/contacts"
                  className={
                    pathname === "/contacts"
                      ? `${styles.menuLink} ${styles.active}`
                      : styles.menuLink
                  }
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.actions}>
            <a href="tel:+380673452774" className={styles.actionsPhone}>
              +(38) 067 345 2774
            </a>
            <div className={styles.actionsSelect}>
              <Select
                styles={{
                  valueContainer: () => ({
                    height: "20px",
                    width: "27px",
                  }),
                  control: () => ({
                    width: "48px",
                    color: "#000",
                    alignItems: "center",
                    cursor: "pointer",
                    display: "flex",
                    height: "26px",
                  }),
                  singleValue: () => ({
                    color: "#000",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: () => ({
                    display: "flex",
                    color: "#000",
                    width: "16px",
                    height: "22px",
                    boxSizing: "border-box",
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                    borderRadius: "3px",
                  }),
                  option: (baseStyles) => ({
                    ...baseStyles,
                    fontSize: "14px",
                    cursor: "pointer",
                  }),
                }}
                options={options}
                defaultValue={options[0]}
                isSearchable={false}
              />
            </div>
            <div
              className={styles.cart}
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              <span className={styles.cartBadge}>0</span>
              <span>0 ₴</span>
              <div
                className={
                  cartIsOpen
                    ? `${styles.cartBody} ${styles.cartActive}`
                    : styles.cartBody
                }
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.cartTop}>В корзине</div>
                <ul className={styles.cartList}>
                  <li className={styles.cartItem}>
                    <a href="" className={styles.cartItemImage}>
                      <Image src={cartPet} alt="" />
                    </a>
                    <div className={styles.cartItemContent}>
                      <a href="" className={styles.cartItemTitle}>
                        Кролик Сниф
                      </a>
                      <div className={styles.cartItemId}>
                        ID: <span>204958566</span>
                      </div>
                      <div className={styles.cartItemInfo}>
                        <div className={styles.cartItemKind}>Грызун</div>
                        <div className={styles.cartItemAge}>
                          <span>3</span> мес.
                        </div>
                      </div>
                      <div className={styles.cartItemPrice}>900 ₴</div>
                    </div>
                    <button className={styles.cartItemDelete}>
                      <Image src={deleteIcon} alt="" />
                    </button>
                  </li>
                  <li className={styles.cartItem}>
                    <a href="" className={styles.cartItemImage}>
                      <Image src={cartPet} alt="" />
                    </a>
                    <div className={styles.cartItemContent}>
                      <a href="" className={styles.cartItemTitle}>
                        Кролик Сниф
                      </a>
                      <div className={styles.cartItemId}>
                        ID: <span>204958566</span>
                      </div>
                      <div className={styles.cartItemInfo}>
                        <div className={styles.cartItemKind}>Грызун</div>
                        <div className={styles.cartItemAge}>
                          <span>3</span> мес.
                        </div>
                      </div>
                      <div className={styles.cartItemPrice}>900 ₴</div>
                    </div>
                    <button className={styles.cartItemDelete}>
                      <Image src={deleteIcon} alt="" />
                    </button>
                  </li>
                </ul>
                <div className={styles.cartBottom}>
                  <div className={styles.cartTotal}>
                    Вместе: <span>0 ₴</span>
                  </div>
                  <a href="" className={styles.cartCheckout}>
                    Оформить заказ
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className={styles.mobileMenu}>
            <button
              className={
                mobileMenuIsOpen
                  ? `${styles.mobileMenuIcon} ${styles.mobileMenuOpen}`
                  : styles.mobileMenuIcon
              }
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
              type="button"
            >
              <span></span>
            </button>
            <nav
              className={
                mobileMenuIsOpen
                  ? styles.mobileMenuBodyActive
                  : styles.mobileMenuBody
              }
            >
              <ul className={styles.mobileMenuList}>
                <li className={styles.mobileMenuItem}>
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? `${styles.mobileMenuLink} ${styles.active}`
                        : styles.mobileMenuLink
                    }
                  >
                    Главная
                  </Link>
                </li>
                <li className={styles.mobileMenuItem}>
                  <Link
                    href="/friends"
                    className={
                      pathname === "/friends"
                        ? `${styles.mobileMenuLink} ${styles.active}`
                        : styles.mobileMenuLink
                    }
                  >
                    Друзья
                  </Link>
                </li>
                <li className={styles.mobileMenuItem}>
                  <Link
                    href="/about"
                    className={
                      pathname === "/about"
                        ? `${styles.mobileMenuLink} ${styles.active}`
                        : styles.mobileMenuLink
                    }
                  >
                    О сервисе
                  </Link>
                </li>
                <li className={styles.mobileMenuItem}>
                  <Link
                    href="/contacts"
                    className={
                      pathname === "/contacts"
                        ? `${styles.mobileMenuLink} ${styles.active}`
                        : styles.mobileMenuLink
                    }
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

// [x] - модалка корзины (нельзя нажать на элементы) (закрытие при нажатии на другую область)
// [x] - кнопка корзины (количество элементов в ней)
// [ ] - общая оптимизация стилей / кода
// [ ] -  компонентный подход
// [x] - моковые страницы для переходов + хедер для других страниц
