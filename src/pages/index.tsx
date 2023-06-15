import { FC } from "react";
import Home from "@/components/screens/home/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import { ICategory } from "@/interfaces/ICategory";
import { IFriend } from "@/interfaces/IFriend";

interface HomePageProps {
  categories: ICategory[];
  friends: IFriend[];
}

const HomePage: FC<HomePageProps> = ({ categories, friends }) => {
  return <Home categories={categories} friends={friends} />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const categoriesResponse = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/categories"
  );
  const categories = await categoriesResponse.data;

  const friendsResponse = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/friends?sortBy=id&order=desc&page=1&limit=6"
  );

  const friends = await friendsResponse.data;

  return {
    props: {
      categories,
      friends,
      ...(await serverSideTranslations(locale, [
        "home",
        "layout",
        "questions",
      ])),
    },
  };
}

export default HomePage;
