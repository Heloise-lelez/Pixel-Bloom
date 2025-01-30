import React from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation/navigation";

const ContactLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <Navigation/>
            <div className={styles.page}>{children}</div>
            <div>footer</div>
        </>
    );
};

export default ContactLayout;
