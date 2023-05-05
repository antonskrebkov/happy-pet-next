import { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomeMain from "@/components/home-main/HomeMain";
import HomeChoise from "@/components/home-choise/HomeChoise";
import HomeCategorySlider from "@/components/home-category-slider/HomeCategorySlider";
import HomeNewSlider from "@/components/home-new-slider/HomeNewSlider";
import HomeGallery from "@/components/home-gallery/HomeGallery";
import HomeAbout from "@/components/home-about/HomeAbout";
import Questions from "@/components/questions/Questions";
import Modal from "@/components/UI/modal/Modal";
import styles from "./Home.module.scss";

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
        <Modal>
          <h2 className={styles.modalTitle}>Ваше повідомлення надіслано!</h2>
          <button className={styles.modalButton}>Готово</button>
        </Modal>
      </main>
    </Layout>
  );
};

export default Home;
