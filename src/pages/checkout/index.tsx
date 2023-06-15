import { FC } from "react";
import Checkout from "@/components/screens/checkout/Checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CheckoutPage: FC = () => {
  return <Checkout />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["checkout", "layout"])),
    },
  };
}
export default CheckoutPage;
