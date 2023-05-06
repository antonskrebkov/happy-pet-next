import { FC } from "react";
import styles from "./FriendsCatalog.module.scss";
import Image from "next/image";
import FriendItem from "../UI/friend-item/FriendItem";
import cart from "./images/cart.svg";

const FriendsCatalog: FC = () => {
  const catalogItems = [
    {
      id: 1,
      age: 2,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: true,
      images: [
        "https://i.imgur.com/AHquTH8.jpg",
        "https://i.imgur.com/AHquTH8.jpg",
      ],
    },
    {
      id: 2,
      age: 2,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: true,
      images: [
        "https://i.imgur.com/Szth7H3.jpg",
        "https://i.imgur.com/Szth7H3.jpg",
      ],
    },
    {
      id: 3,
      age: 2,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 900,
      sex: "male",
      wc: false,
      images: [
        "https://i.imgur.com/gU73Jd6.jpg",
        "https://i.imgur.com/gU73Jd6.jpg",
        "https://i.imgur.com/gU73Jd6.jpg",
      ],
    },
    {
      id: 4,
      age: 12,
      name: "Папуга Гриша",
      shortDescription: "Папуга-балакун чудовий новий друг для всієї родини",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laboriosam possimus tempore, quasi inventore rerum, explicabo laudantium totam voluptas quas quis dolorum est? Magnam, reiciendis. Hic aspernatur asperiores odio aliquid.",
      category: "parrot",
      price: 1000,
      sex: "male",
      wc: false,
      images: [
        "https://i.imgur.com/XdsLZid.jpg",
        "https://i.imgur.com/XdsLZid.jpg",
      ],
    },
  ];

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogItems}>
          {catalogItems.map((catalogItem) => (
            <FriendItem key={catalogItem.id} friend={catalogItem}>
              <div className={styles.itemFooterPrice}>{catalogItem.price}</div>
              <button className={styles.itemFooterAdd}>
                <Image src={cart} alt="" />
              </button>
            </FriendItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsCatalog;
