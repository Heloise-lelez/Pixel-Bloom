import React from "react";
import styles from "./page.module.css";
import Navigation from "../../components/navigation/navigation";
import {ToastContainer} from "react-toastify/unstyled";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navigation />
            <ToastContainer />
            <div className={styles.page}>{children}</div>
            <div>footer</div>
        </>
    );
};

export default ContactLayout;
