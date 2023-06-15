import { FC } from "react";
import Application from "@/components/screens/application/Application";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ApplicationPage: FC = () => {
  return <Application />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["application", "layout"])),
    },
  };
}

export default ApplicationPage;
