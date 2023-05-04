import { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomeMain from "@/components/home-main/HomeMain";
import HomeChoise from "@/components/home-choise/HomeChoise";
import HomeCategorySlider from "@/components/home-category-slider/HomeCategorySlider";
import HomeNewSlider from "@/components/home-new-slider/HomeNewSlider";
import HomeGallery from "@/components/home-gallery/HomeGallery";
import HomeAbout from "@/components/home-about/HomeAbout";
import Questions from "@/components/questions/Questions";

const Home: FC = () => {
  return (
    <Layout>
      <main>
        <HomeMain />
        <HomeCategorySlider />
        <HomeChoise />
        <HomeNewSlider />
        <HomeGallery />
        <HomeAbout />
        <Questions />
      </main>
    </Layout>
  );
};

export default Home;
