import React from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation/navigation";
import Footer from "@/components/footer/footer";
const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div></div>
      <div className={styles.page}>{children}</div>
      <Footer />
    </>
  );
};

export default ProjectsLayout;
