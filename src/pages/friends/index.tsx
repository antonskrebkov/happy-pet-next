import { FC } from "react";
import Friends from "@/components/screens/friends/Friends";
import { IFriend } from "@/interfaces/IFriend";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import { ICategory } from "@/interfaces/ICategory";

interface FriendsPageProps {
  data: IFriend[];
  totalFriendsData: IFriend[];
  categoriesData: ICategory[];
}

const FriendsPage: FC<FriendsPageProps> = ({
  data,
  totalFriendsData,
  categoriesData,
}) => {
  return (
    <Friends
      data={data}
      totalFriends={totalFriendsData}
      categories={categoriesData}
    />
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/friends?sortBy=id&order=desc&page=1&limit=6"
  );
  const data = await response.data;

  const totalFriendsResponse = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/friends"
  );
  const totalFriendsData = await totalFriendsResponse.data;

  const categoriesResponse = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/categories"
  );
  const categoriesData = await categoriesResponse.data;

  return {
    props: {
      data,
      totalFriendsData,
      categoriesData,
      ...(await serverSideTranslations(locale, ["friends", "layout"])),
    },
  };
}

export default FriendsPage;
