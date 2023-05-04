import { FC } from "react";
import Image from "next/image";
import Fancybox from "@/components/fancybox/Fancybox";
import styles from "./HomeGallery.module.scss";

const HomeGallery: FC = () => {
  const galleryColumns = [
    {
      id: 1,
      firstLink: "http://localhost:3002/assets/images/gallery/01.jpg",
      firstSize: styles.galleryImgS,
      secondLink: "http://localhost:3002/assets/images/gallery/02.jpg",
      secondSize: styles.galleryImgL,
    },
    {
      id: 2,
      firstLink: "http://localhost:3002/assets/images/gallery/03.jpg",
      firstSize: styles.galleryImgL,
      secondLink: "http://localhost:3002/assets/images/gallery/04.jpg",
      secondSize: styles.galleryImgS,
    },
    {
      id: 3,
      firstLink: "http://localhost:3002/assets/images/gallery/05.jpg",
      firstSize: styles.galleryImgM,
      secondLink: "http://localhost:3002/assets/images/gallery/06.jpg",
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
