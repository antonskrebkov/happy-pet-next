import React from "react";
import Head from "next/head";
import Contacts from "@/components/screens/contacts/Contacts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactsPage() {
  return <Contacts />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "contacts",
        "layout",
        "questions",
      ])),
    },
  };
}
