import Friends from "@/components/screens/friends/Friends";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function FriendsPage() {
  return <Friends />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["friends", "layout"])),
    },
  };
}
