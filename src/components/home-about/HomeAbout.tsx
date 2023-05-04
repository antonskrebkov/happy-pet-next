import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeAbout.module.scss";
import about from "./images/about.jpeg";

const HomeAbout: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>О питомнике Happy Pet</h2>
        <div className={styles.aboutBody}>
          <div className={styles.aboutDescription}>
            <h3 className={styles.aboutDescriptionTitle}>
              Мы - команда мечтателей
            </h3>
            <div className={styles.aboutDescriptionText}>
              <p>
                Частный приют для животных «Happy pet» был основан в 2014 году в
                селе Фасова, Макаровского района, Киевской области на базе
                общественной организации «Зооцентр «Ковчег» Оноприенко Галиной
                Федоровной и построен за ее собственные средства. Галина
                Федоровна является владельцем приюта и его директором.
              </p>
              <p>
                На данный момент в приюте проживают около 1000 животных: собаки,
                коты, обезьяны, грызуны, попугаи и рептилии. Их количество
                постепенно увеличивается.
              </p>
            </div>
            <Link href="/about" className={styles.aboutDescriptionLink}>
              Читать больше
            </Link>
          </div>
          <div className={styles.aboutImg}>
            <Image src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
