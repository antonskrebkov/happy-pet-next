import { FC, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HomeMain from "@/components/home-main/HomeMain";
import HomeChoise from "@/components/home-choise/HomeChoise";
import HomeCategorySlider from "@/components/home-category-slider/HomeCategorySlider";
import HomeNewSlider from "@/components/home-new-slider/HomeNewSlider";
import HomeGallery from "@/components/home-gallery/HomeGallery";
import HomeAbout from "@/components/home-about/HomeAbout";
import Questions from "@/components/questions/Questions";
import Modal from "@/components/UI/modal/Modal";
import { friendsAPI } from "@/services/Friends.service";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const [data, setData] = useState(true);

  useEffect(() => {
    const storedData = sessionStorage.getItem("notification");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleSaveData = () => {
    const newData = false;
    setData(newData);
    sessionStorage.setItem("notification", JSON.stringify(newData));
  };
  const { data: friends } = friendsAPI.useGetNewestFriendsQuery();

  return (
    <Layout
      title="Home"
      description="Твой новый друг с доставкой на дом. Онлайн-магазин домашних животных подарит тебе нового друга в несколько кликов. Действуй!"
      keywords="Домашнее животное"
    >
      <main>
        <HomeMain />
        <HomeCategorySlider />
        <HomeChoise />
        <HomeNewSlider friends={friends} />
        <HomeGallery />
        <HomeAbout />
        <Questions />
        {data && (
          <Modal>
            <h2 className={styles.modalTitle}>
              Due to the reduced functionality of the Mockapi.io service which
              is used as a backend in this project, functions such as
              multifiltering and pagination in its correct form are
              unfortunately not available.
            </h2>
            <button className={styles.modalButton} onClick={handleSaveData}>
              Understood
            </button>
          </Modal>
        )}
      </main>
    </Layout>
  );
};

export default Home;
