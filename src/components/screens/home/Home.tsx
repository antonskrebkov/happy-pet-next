import { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomeMain from "@/components/home-main/HomeMain";
import HomeChoise from "@/components/home-choise/HomeChoise";
import HomeCategorySlider from "@/components/home-category-slider/HomeCategorySlider";
import HomeNewSlider from "@/components/home-new-slider/HomeNewSlider";
import HomeGallery from "@/components/home-gallery/HomeGallery";
import HomeAbout from "@/components/home-about/HomeAbout";
import Questions from "@/components/questions/Questions";
import { useTranslation } from "next-i18next";
import { ICategory } from "@/interfaces/ICategory";
import { IFriend } from "@/interfaces/IFriend";

interface HomeProps {
  categories: ICategory[];
  friends: IFriend[];
}

const Home: FC<HomeProps> = ({ categories, friends }) => {
  const { t } = useTranslation("home");

  return (
    <Layout
      title={t("title")}
      description={`${t("main-block-title")}. ${t("main-block-text")}`}
      keywords={`${t("keywords")}`}
    >
      <main>
        <HomeMain />
        <HomeCategorySlider categories={categories} />
        <HomeChoise />
        <HomeNewSlider friends={friends} />
        <HomeGallery />
        <HomeAbout />
        <Questions />
      </main>
    </Layout>
  );
};

export default Home;
