import React from "react";
import styles from "./page.module.css"
const ProjectsLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div>header</div>
            <div className={styles.page}>
                {children}
            </div>
            <div>footer</div>
        </>
    )
}

export default ProjectsLayout