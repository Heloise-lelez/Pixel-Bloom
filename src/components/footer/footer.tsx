import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <Image
            src={"/logo_transparent.png"}
            alt={"Pixel flower"}
            height={44}
            width={58}
          />
          <p className={styles.title}>PIXEL BLOOM</p>
          <p>Cultivons vos idées numériques !</p>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <p>Navigation</p>
            <Link className={styles.link} href={"/projects"}>
              Les projets
            </Link>
            <Link className={styles.link} href={"/contact"}>
              Nous contacter
            </Link>
            <Link className={styles.link} href={"/agency"}>
              L’agence
            </Link>
          </div>
          <div className={styles.links}>
            <p>Nous retrouver</p>
            <Link
              className={styles.link}
              href={"https://www.instagram.com/zenkichi_loki/"}
            >
              Instagram
            </Link>
            <Link className={styles.link} href={"mailto:youremail@example.com"}>
              Mail
            </Link>
            <Link
              className={styles.link}
              href={"https://www.linkedin.com/groups/9161692/"}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.legal}>
        Mentions légales - Copyright 2022 - Tous droits réservés - Design by
        Pixel Bloom
      </p>
    </div>
  );
};

export default Footer;
