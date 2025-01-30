import React from "react";
import db from "@/frameworks/db";
import ProjectsList from "@/components/projects/projectsList";
import styles from "./page.module.css"
import {ICategory, ITechnology} from "@/types/IProjects";

const getProjects = async () => {
    const projects = await db.project.findMany({})
    return projects
}

const allCategories: ICategory[] = [
    {label: "E-commerce", value: "ecommerce"},
    {label: "Site vitrine", value: "vitrine"},
    {label: "One page", value: "one-page"}
]

const allTechnologies: ITechnology[] = [
    {label: "React JS", value: "react-js"},
    {label: "React Native", value: "react-native"},
    {label: "Vue JS", value: "vue-js"},
    {label: "Angular", value: "angular"},
    {label: "Tailwind", value: "tailwind"},
    {label: "Bootstrap", value: "bootstrap"}
]

const ProjectsPage = async () => {
    const projects = await getProjects()

    return (
        <div className={styles.pageContainer}>
            <h1>Création de site internet</h1>
            <p>Découvrez nos projets e-commerce, nous créons des boutiques en ligne intuitives et sécurisées, offrant
                une expérience d’achat fluide aux visiteurs tout en maximisant la conversion pour les entreprises.</p>
            <div className={styles.categoryWrapper}>
                {allCategories.map((category: ICategory, index: number) => {
                    return (
                        <button key={index} className={styles.categoryChip}>
                            {category.label}
                        </button>
                    )
                })}
            </div>
            <div className={styles.categoryWrapper}>
                {allTechnologies.map((technology: ITechnology, index: number) => {
                    return (
                        <button key={index} className={styles.categoryChip}>
                            {technology.label}
                        </button>
                    )
                })}
            </div>
            <ProjectsList projects={projects}/>
        </div>
    )
}

export default ProjectsPage
