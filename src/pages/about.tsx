import React from "react";
import Header from "@/components/header/Header";
import Head from "next/head";
import About from "@/components/screens/about/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AboutPage() {
  return <About />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "layout"])),
    },
  };
}
