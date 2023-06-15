import { FC } from "react";
import Friends from "@/components/screens/friends/Friends";
import { IFriend } from "@/interfaces/IFriend";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";

interface FriendsPageProps {
  data: IFriend[];
}

const FriendsPage: FC<FriendsPageProps> = ({ data }) => {
  return <Friends data={data} />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/friends?sortBy=id&order=desc&page=1&limit=6"
  );
  const data = await response.data;
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["friends", "layout"])),
    },
  };
}

export default FriendsPage;
