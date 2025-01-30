import React from "react";
import db from "@/frameworks/db";
import ProjectsList from "@/components/projects/projectsList";
import styles from "./page.module.css"

const getProjects = async () => {
    const projects = await db.project.findMany({})
    return projects
}


const ProjectsPage = async () => {

    const projects = await getProjects();

    return (
        <div className={styles.pageContainer}>
            <h1>Création de site internet</h1>
            <p>Découvrez nos projets e-commerce, nous créons des boutiques en ligne intuitives et sécurisées, offrant
                une expérience d’achat fluide aux visiteurs tout en maximisant la conversion pour les entreprises.</p>

            <ProjectsList projects={projects}/>
        </div>
    )
}

export default ProjectsPage
