import { FC, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import styles from "./Cart.module.scss";
import Link from "next/link";
import { IFriend } from "@/interfaces/IFriend";
import CartItem from "../cart-item/CartItem";
import { summarize } from "@/utils/sum";

const Cart: FC = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartList = useAppSelector((state) => state.cart);

  return (
    <div className={styles.cart} onClick={() => setCartIsOpen(!cartIsOpen)}>
      <span className={styles.cartBadge}>{cartList.length}</span>
      <span>{summarize(cartList)} ₴</span>
      <div
        className={
          cartIsOpen
            ? `${styles.cartBody} ${styles.cartActive}`
            : styles.cartBody
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartTop}>В переноске</div>
        {cartList.length === 0 ? (
          <p className={styles.cartEmpty}>Тут порожньо...</p>
        ) : (
          <ul className={styles.cartItems}>
            {cartList.map((cartItem: IFriend) => (
              <CartItem key={cartItem.id} friend={cartItem} />
            ))}
          </ul>
        )}
        {cartList.length === 0 ? (
          ""
        ) : (
          <div className={styles.cartBottom}>
            <div className={styles.cartTotal}>
              Вместе: <span>{summarize(cartList)} ₴</span>
            </div>
            <Link href="/checkout" className={styles.cartCheckout}>
              Оформить заказ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
