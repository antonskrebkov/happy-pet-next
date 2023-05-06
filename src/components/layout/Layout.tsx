import { FC, PropsWithChildren } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
      <Footer />
    </Meta>
  );
};

export default Layout;
