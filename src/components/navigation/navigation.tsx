'use client'

import {useState} from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.title} href="/">
          <Image
              src={"/logo_transparent.png"}
              alt={"Pixel flower"}
              height={44}
              width={58}
          />
          PIXEL BLOOM{" "}
        </Link>

        <div className={styles.burgerIcon} onClick={toggleMenu}>
          <div className={isOpen ? styles.burgerOpen : styles.burgerLine}></div>
          <div className={isOpen ? styles.burgerOpen : styles.burgerLine}></div>
          <div className={isOpen ? styles.burgerOpen : styles.burgerLine}></div>
        </div>

        {/* Menu items */}
        <ul className={styles.menuDesktop}>
          <li>
            <Link className={styles.link} href="/projects" onClick={() => openModal('Projects Content')}>
              Nos projets
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/agency" onClick={() => openModal('Agency Content')}>
              Notre Agence
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/contact" onClick={() => openModal('Contact Content')}>
              Contactez-nous
            </Link>
          </li>
        </ul>

        <ul className={isOpen ? styles.menuOpen : styles.menuClosed}>
          <li>
            <Link className={styles.link} href="/projects" onClick={() => openModal('Projects Content')}>
              Nos projets
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/agency" onClick={() => openModal('Agency Content')}>
              Notre Agence
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/contact" onClick={() => openModal('Contact Content')}>
              Contactez-nous
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
