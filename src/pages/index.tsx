import Home from "@/components/screens/home/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage() {
  return <Home />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "layout",
        "questions",
      ])),
    },
  };
}
