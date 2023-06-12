import React from "react";
import Head from "next/head";
import Friend from "@/components/screens/friend/Friend";
import { useRouter } from "next/router";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function FriendPage() {
  const router = useRouter();
  const { id } = router.query;

  return <Friend id={id} />;
}

// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["friend", "layout"])),
//     },
//   };
// }
