import { FC } from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

interface IBreadcrumbsItem {
  link: string;
  title: string;
}
interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumbsItem[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <section className={styles.breadcrumbs}>
      <div className={styles.breadcrumbsContainer}>
        <ul className={styles.breadcrumbsList}>
          {breadcrumbs.map((item) => (
            <li key={item.link} className={styles.breadcrumbsItem}>
              <Link href={item.link} className={styles.breadcrumbsLink}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumbs;
