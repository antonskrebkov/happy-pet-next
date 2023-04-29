import { FC } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

import twitter from "./icons/twitter.svg";
import fb from "./icons/fb.svg";
import inst from "./icons/inst.svg";
import tg from "./icons/tg.svg";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <ul className={styles.topSocialList}>
            <li className={styles.topSocialItem}>
              <a href="" className={styles.topSocialLink}>
                <Image width="27" height="27" src={twitter} alt="" />
              </a>
            </li>
            <li className={styles.topSocialItem}>
              <a href="" className={styles.topSocialLink}>
                <Image width="27" height="27" src={fb} alt="" />
              </a>
            </li>
            <li className={styles.topSocialItem}>
              <a href="" className={styles.topSocialLink}>
                <Image width="27" height="27" src={inst} alt="" />
              </a>
            </li>
            <li className={styles.topSocialItem}>
              <a href="" className={styles.topSocialLink}>
                <Image width="27" height="27" src={tg} alt="" />
              </a>
            </li>
          </ul>
          <div className={styles.topLocation}>
            ул. Шота Руставели, 44, 3 этаж, оф. 7, Киев. +380 67 345 2774,
            hello@happypet.ua
          </div>
          <a href="tel:+380673452774" className="top-footer__phone">
            +(38) 067 345 2774
          </a>
        </div>
        <div className={styles.bottom}>
          <a href="" className={styles.bottomLogo}>
            Happy pet
          </a>
          <div className={styles.bottomRights}>2022 © Все права защищены</div>
          <div className={styles.bottomSupport}>
            Если ты нашел на сайте ошибки, сообщи нам support@happypet.ua
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
