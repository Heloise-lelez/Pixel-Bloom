"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css"; // Import du CSS Module

const ErrorPage = ({ error }: { error: Error }) => {
    useEffect(() => {
        console.error("Erreur capturée :", error); // Log de l'erreur dans la console
    }, [error]);

    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>Erreur 404</h1>
            <p className={styles.errorMessage}>La page que vous recherchez n&apos;éexiste pas, nous vous invitions à retourner sur le site en cliquant sur le lien ci-dessous.</p>

            <Link href="/" className={styles.backLink}>
                Retourner sur le site
            </Link>
        </div>
    );
};

export default ErrorPage;
