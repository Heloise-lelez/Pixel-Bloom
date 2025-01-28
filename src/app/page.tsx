import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <h1 className={styles.title}>Pixel Bloom</h1>
        <div className={styles.banner}>
          <img src="/vine_screen.svg" />
          <h2 className={styles.slogan}>Cultivons vos idées numériques</h2>
        </div>
      </div>
    </>
  );
}
