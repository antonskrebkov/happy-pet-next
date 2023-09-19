import { FC, useState, useEffect, useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import styles from "./Cart.module.scss";
import Link from "next/link";
import { IFriend } from "@/interfaces/IFriend";
import CartItem from "../cart-item/CartItem";
import { summarize } from "@/utils/sum";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Cart: FC = () => {
  const { t } = useTranslation("layout");

  const { locale } = useRouter();

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
      setCartIsOpen(false);
    }
  };

  useEffect(() => {
    if (cartIsOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [cartIsOpen]);

  const cartList = useAppSelector((state) => state.cart);

  return (
    <div
      className={styles.cart}
      onClick={() => setCartIsOpen(!cartIsOpen)}
      ref={cartRef}
    >
      <span className={styles.cartBadge}>{cartList.length}</span>
      <div
        className={
          cartIsOpen
            ? `${styles.cartBody} ${styles.cartActive}`
            : styles.cartBody
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartTop}>{t("In pet carrier")}</div>
        {cartList.length === 0 ? (
          <p className={styles.cartEmpty}>{t("It's empty here...")}</p>
        ) : (
          <ul className={styles.cartItems}>
            {cartList.map((cartItem: IFriend) => (
              <CartItem key={cartItem.id} friend={cartItem} />
            ))}
          </ul>
        )}
        {cartList.length !== 0 && (
          <div className={styles.cartBottom}>
            <div className={styles.cartTotal}>
              {t("Total: ")}
              <span>{formatPrice(summarize(cartList), locale)}</span>
            </div>
            <Link href="/checkout" className={styles.cartCheckout}>
              {t("Checkout")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
