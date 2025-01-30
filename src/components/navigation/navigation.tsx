"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.nav}>
      <Link className={styles.title} href="/">
        <Image
          src="/logo_transparent.png"
          alt="Pixel Bloom"
          height={44}
          width={58}
        />
        PIXEL BLOOM
      </Link>

      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <div
          className={`${styles.burgerLine} ${isOpen ? styles.openTop : ""}`}
        ></div>
        <div
          className={`${styles.burgerLine} ${isOpen ? styles.openMiddle : ""}`}
        ></div>
        <div
          className={`${styles.burgerLine} ${isOpen ? styles.openBottom : ""}`}
        ></div>
      </div>

      <ul
        className={`${styles.menu} ${
          isOpen ? styles.menuOpen : styles.menuClosed
        }`}
      >
        <li className={styles.link}>
          <Link href="/projects">Nos projets</Link>
        </li>
        <li className={styles.link}>
          <Link href="/agency">Notre Agence</Link>
        </li>
        <li className={styles.link}>
          <Link href="/contact">Contactez-nous</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
