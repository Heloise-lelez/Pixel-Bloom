import React from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation/navigation";
const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div></div>
      <div className={styles.page}>{children}</div>
      <div>footer</div>
    </>
  );
};

export default ProjectsLayout;
