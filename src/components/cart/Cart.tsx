import { FC, useState } from "react";
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

  const cartList = useAppSelector((state) => state.cart);

  return (
    <div className={styles.cart} onClick={() => setCartIsOpen(!cartIsOpen)}>
      <span className={styles.cartBadge}>{cartList.length}</span>
      <span className={styles.cartBadgeTotal}>{summarize(cartList)}</span>
      <div
        className={
          cartIsOpen
            ? `${styles.cartBody} ${styles.cartActive}`
            : styles.cartBody
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartTop}>{t("cart-top")}</div>
        {cartList.length === 0 ? (
          <p className={styles.cartEmpty}>{t("cart-empty")}</p>
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
              {t("cart-total")}
              <span>{formatPrice(summarize(cartList), locale)}</span>
            </div>
            <Link href="/checkout" className={styles.cartCheckout}>
              {t("cart-checkout")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
