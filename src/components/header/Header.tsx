import { FC, useEffect, useRef, useState } from "react";
import Select from "react-select";
import styles from "./header.module.scss";
import Link from "next/link";
import Cart from "../cart/Cart";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { pathname } = useRouter();

  const options = [
    { value: "UA", label: "UA" },
    { value: "EN", label: "EN" },
  ];

  const [isScroll, setIsScroll] = useState(false);
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
            <Cart />
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
