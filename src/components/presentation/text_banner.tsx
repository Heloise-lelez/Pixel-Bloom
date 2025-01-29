import styles from "./text_banner.module.css";

const TextBanner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.text}>
          Des solutions web sur-mesure, performantes et durables pour donner vie
          à vos projets numériques. 🚀
        </div>
      </div>
    </>
  );
};

export default TextBanner;
