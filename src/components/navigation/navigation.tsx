'use client';

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
                <Image src="/logo_transparent.png" alt="Pixel Bloom" height={44} width={58} />
                PIXEL BLOOM
            </Link>

            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <div className={`${styles.burgerLine} ${isOpen ? styles.openTop : ""}`}></div>
                <div className={`${styles.burgerLine} ${isOpen ? styles.openMiddle : ""}`}></div>
                <div className={`${styles.burgerLine} ${isOpen ? styles.openBottom : ""}`}></div>
            </div>

            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : styles.menuClosed}`}>
                <Link className={styles.link} href="/projects"><li>Nos projets</li></Link>
                <Link className={styles.link} href="/agency"><li>Notre Agence</li></Link>
                <Link className={styles.link} href="/contact"><li>Contactez-nous</li></Link>
            </ul>
        </nav>
    );
};

export default Navigation;
