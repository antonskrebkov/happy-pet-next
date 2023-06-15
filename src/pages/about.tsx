import { FC } from "react";
import About from "@/components/screens/about/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage: FC = () => {
  return <About />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "layout"])),
    },
  };
}
export default AboutPage;
