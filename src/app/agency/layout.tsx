import React from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation/navigation";
import Footer from "@/components/footer/footer";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navigation />
            <div className={styles.page}>{children}</div>
            <Footer />
        </>
    );
};

export default ContactLayout;
