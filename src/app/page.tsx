import Footer from "@/components/footer/footer";
import Navigation from "../components/navigation/navigation";
import Presentation from "../components/presentation/presentation";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.main}>
          <div className={styles.title}>
            <Image
              src={"/logo_transparent.png"}
              alt={"Pixel flower"}
              height={96}
              width={126}
            />
            <h1>Pixel Bloom</h1>
          </div>
          <div className={styles.banner}>
            <img src="/vine_screen.svg" />
          </div>
        </div>
        <div className={styles.subtitle}>
          <h2 className={styles.slogan}>
            <span>Cultivons vos </span>
            <span>idées numériques</span>
          </h2>
        </div>
      </div>

      <Navigation />
      <Presentation />
      <Footer />
    </>
  );
}
