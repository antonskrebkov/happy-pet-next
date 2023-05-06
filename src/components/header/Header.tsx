import { FC, useEffect, useRef, useState } from "react";
import Select from "react-select";
import styles from "./header.module.scss";
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

  const menuItems = [
    { link: "/", title: "Головна" },
    { link: "/friends", title: "Друзі" },
    { link: "/about", title: "Про нас" },
    { link: "/contacts", title: "Контакти" },
  ];

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
            <ul className={styles.menuItems}>
              {menuItems.map((menuItem) => (
                <li key={menuItem.link} className={styles.menuItem}>
                  <Link
                    href={menuItem.link}
                    className={
                      pathname === menuItem.link
                        ? `${styles.menuLink} ${styles.active}`
                        : styles.menuLink
                    }
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
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
                <div className={styles.cartTop}>В переноске</div>
                <ul className={styles.cartItems}>
                  <li className={styles.cartItem}>
                    <Link href="/friends/1" className={styles.cartItemImage}>
                      <Image
                        width={90}
                        height={90}
                        src="http://localhost:3002/assets/images/reptiles/turtle-nina/05.png"
                        alt=""
                      />
                    </Link>
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
                    <Link href="/friends/1" className={styles.cartItemImage}>
                      <Image
                        width={90}
                        height={90}
                        src="http://localhost:3002/assets/images/reptiles/turtle-nina/05.png"
                        alt=""
                      />
                    </Link>
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
                  <Link href="/checkout" className={styles.cartCheckout}>
                    Оформить заказ
                  </Link>
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
              <ul className={styles.mobileMenuItems}>
                {menuItems.map((menuItem) => (
                  <li key={menuItem.link} className={styles.mobileMenuItem}>
                    <Link
                      href={menuItem.link}
                      className={
                        pathname === menuItem.link
                          ? `${styles.mobileMenuLink} ${styles.active}`
                          : styles.mobileMenuLink
                      }
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
