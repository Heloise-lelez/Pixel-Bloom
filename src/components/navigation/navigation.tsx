import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <ul className={styles.nav}>
        <Image
          src={"/logo_transparent.png"}
          alt={"Pixel flower"}
          height={44}
          width={58}
        />
        <Link className={styles.title} href="/">
          PIXEL BLOOM{" "}
        </Link>
        <Link className={styles.link} href="/projects">
          Nos projets
        </Link>
        <Link className={styles.link} href="/agency">
          Notre Agence
        </Link>
        <Link className={styles.link} href="/contact">
          Contactez-nous
        </Link>
      </ul>
    </>
  );
};

export default Navigation;
