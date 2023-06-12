import React from "react";
import Head from "next/head";
import Application from "@/components/screens/application/Application";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ApplicationPage() {
  return <Application />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["application", "layout"])),
    },
  };
}
