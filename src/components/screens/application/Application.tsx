import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Application.module.scss";

export default function Application() {
  return (
    <Layout>
      <main className={styles.application}>Application</main>
    </Layout>
  );
}
