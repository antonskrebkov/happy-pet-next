import { FC, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HomeMain from "@/components/home-main/HomeMain";
import HomeChoise from "@/components/home-choise/HomeChoise";
import HomeCategorySlider from "@/components/home-category-slider/HomeCategorySlider";
import HomeNewSlider from "@/components/home-new-slider/HomeNewSlider";
import HomeGallery from "@/components/home-gallery/HomeGallery";
import HomeAbout from "@/components/home-about/HomeAbout";
import Questions from "@/components/questions/Questions";
import { friendsAPI } from "@/services/Friends.service";
import { useTranslation } from "next-i18next";

const Home: FC = () => {
  const { t } = useTranslation("home");

  const { data: friends } = friendsAPI.useGetNewestFriendsQuery();

  return (
    <Layout
      title={t("title")}
      description={`${t("main-block-title")}. ${t("main-block-text")}`}
      keywords={t("keywords")}
    >
      <main>
        <HomeMain />
        <HomeCategorySlider />
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
