import { FC } from "react";
import Contacts from "@/components/screens/contacts/Contacts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactsPage: FC = () => {
  return <Contacts />;
};

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
export default ContactsPage;
