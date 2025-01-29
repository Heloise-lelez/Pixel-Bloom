import Navigation from "../components/navigation/navigation";
import Presentation from "../components/presentation/presentation";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.main}>
          <h1 className={styles.title}>
            <Image
              src={"/logo_transparent.png"}
              alt={"Pixel flower"}
              height={96}
              width={126}
            />
            Pixel Bloom
          </h1>
          <div className={styles.banner}>
            <img src="/vine_screen.svg" />
          </div>
        </div>
        <div className={styles.subtitle}>
          <h2 className={styles.slogan}>Cultivons vos idées numériques</h2>
        </div>
      </div>

      <Navigation />
      <Presentation />
    </>
  );
}
