import { FC } from "react";
import Image from "next/image";
import Fancybox from "@/components/fancybox/Fancybox";
import styles from "./HomeGallery.module.scss";

const HomeGallery: FC = () => {
  const galleryColumns = [
    {
      id: 1,
      firstLink: "https://i.imgur.com/AYRkqVc.jpg",
      firstSize: styles.galleryImgS,
      secondLink: "https://i.imgur.com/RPxU498.jpg",
      secondSize: styles.galleryImgL,
    },
    {
      id: 2,
      firstLink: "https://i.imgur.com/uerbOsM.jpg",
      firstSize: styles.galleryImgL,
      secondLink: "https://i.imgur.com/Dle9I9o.jpg",
      secondSize: styles.galleryImgS,
    },
    {
      id: 3,
      firstLink: "https://i.imgur.com/sos1IEW.jpg",
      firstSize: styles.galleryImgM,
      secondLink: "https://i.imgur.com/85OO3SM.jpg",
      secondSize: styles.galleryImgM,
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryTitle}>Мы любим поиграть</div>
        <Fancybox>
          <div className={styles.galleryColumns}>
            {galleryColumns.map((galleryColumn) => (
              <div key={galleryColumn.id} className={styles.galleryColumn}>
                <a
                  href={galleryColumn.firstLink}
                  className={`${styles.galleryImg} ${galleryColumn.firstSize}`}
                  data-fancybox="gallery"
                >
                  <img src={galleryColumn.firstLink} alt="" />
                </a>
                <a
                  href={galleryColumn.secondLink}
                  className={`${styles.galleryImg} ${galleryColumn.secondSize}`}
                  data-fancybox="gallery"
                >
                  <img src={galleryColumn.secondLink} alt="" />
                </a>
              </div>
            ))}
          </div>
        </Fancybox>
      </div>
    </section>
  );
};

export default HomeGallery;
