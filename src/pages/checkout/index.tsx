import React from "react";
import Head from "next/head";
import Checkout from "@/components/screens/checkout/Checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CheckoutPage() {
  return <Checkout />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["checkout", "layout"])),
    },
  };
}
