import { FC, useMemo } from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";
import { useRouter } from "next/router";

const Breadcrumbs: FC = () => {
  const router = useRouter();

  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathWithoutQuery = router.asPath.split("?")[0];
      const asPathNestedRoutes = asPathWithoutQuery
        .split("/")
        .filter((v) => v.length > 0);

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        const text = subpath.charAt(0).toUpperCase() + subpath.slice(1);
        return { href, text };
      });

      return [{ href: "/", text: "Home" }, ...crumblist];
    },
    [router.asPath]
  );

  console.log(breadcrumbs);

  return (
    <section className={styles.breadcrumbs}>
      <div className={styles.breadcrumbsContainer}>
        <ul className={styles.breadcrumbsList}>
          {breadcrumbs.map((item) => (
            <li key={item.href} className={styles.breadcrumbsItem}>
              <Link href={item.href} className={styles.breadcrumbsLink}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumbs;
