import { FC } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

import twitter from "./icons/twitter.svg";
import fb from "./icons/fb.svg";
import inst from "./icons/inst.svg";
import tg from "./icons/tg.svg";

const Footer: FC = () => {
  const socialItems = [
    {
      link: "https://twitter.com/yasochka6",
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
      link: "https://t.me/s/Rostok_Pitomnik",
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
          <div className={styles.topLocation}>
            с. Фасова, Киевская область, hello@happypet.ua
          </div>
          <a href="tel:+380673452774" className={styles.topPhone}>
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
