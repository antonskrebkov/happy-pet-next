import { FC } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

import twitter from "public/twitter.svg";
import fb from "public/fb.svg";
import inst from "public/inst.svg";
import tg from "public/tg.svg";

const Footer: FC = () => {
  const socialItems = [
    {
      link: "https://twitter.com/dogshelt",
      imageLink: twitter,
    },
    {
      link: "https://www.facebook.com/ZahistTvarinPlushka/",
      imageLink: fb,
    },
    {
      link: "https://www.instagram.com/snezhana_zahist_tvarin/",
      imageLink: inst,
    },
    {
      link: "https://t.me/uanimalsorg",
      imageLink: tg,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <ul className={styles.topSocialList}>
            {socialItems.map((socialItem) => (
              <li key={socialItem.link} className={styles.topSocialItem}>
                <a
                  href={socialItem.link}
                  target="_blank"
                  className={styles.topSocialLink}
                >
                  <Image
                    width="27"
                    height="27"
                    src={socialItem.imageLink}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.google.com/maps/place/Prytulok+Dlya+Tvaryn+%22Best+Frends%22/@50.371835,29.754216,14z/data=!4m6!3m5!1s0x472b45953c01657f:0x18759bfd64a35353!8m2!3d50.3718353!4d29.7542159!16s%2Fg%2F11g0qxqg3t?hl=ru&entry=ttu"
            target="_blank"
            className={styles.topLocation}
          >
            с. Фасова, Киевская область, hello@happypet.ua
          </a>
          <a href="tel:+380673452774" className={styles.topPhone}>
            +(38) 067 345 2774
          </a>
        </div>
        <div className={styles.bottom}>
          <Link href="/" className={styles.bottomLogo}>
            Happy pet
          </Link>
          <div className={styles.bottomRights}>2023 © Все права защищены</div>
          <div className={styles.bottomSupport}>
            Если ты нашел на сайте ошибки, сообщи нам support@happypet.ua
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
