import React from "react";
import db from "@/frameworks/db";
import moment from "moment";
import ErrorPage from "@/components/ErrorPage";
import styles from "./page.module.css"

const getProjectById = async (id: string) => {
    const project = await db.project.findUnique({
        where: { id: id }
    })
    return project
}

const ProjectPage = async ({params}: {params: Promise<{ id: string }>}) => {

    const segments = await params
    const id: string = segments.id
    const project = await getProjectById(id[0])
    const technologies = JSON.parse(project.technologies)

    if (!project) {
        return (
            <ErrorPage code={404} />
        )
    }

    return (
        <div className={styles.projectPage}>
            <h1 className={styles.projectTitle}>
                {project.title ? project.title : "Untitled"}
            </h1>

            <div className={styles.projectDetails}>
                <div className={styles.projectSection}>
                    <strong>Context:</strong> {project.context ? project.context : "No context"}
                </div>
                <div className={styles.projectSection}>
                    <strong>Objectives:</strong> {project.objectives ? project.objectives : "No objectives"}
                </div>
                <div className={styles.projectSection}>
                    <strong>Technologies:</strong>
                    {
                        technologies.map((techno: string) => {
                            return (
                                <p>
                                    {techno}
                                </p>
                            )
                        })
                    }
                </div>
                <div className={styles.projectSection}>
                    <strong>Results:</strong> {project.results ? project.results : "No results"}
                </div>
                <div className={styles.projectDate}>
                    Created on: {moment(project.createdAt).format("YYYY-MM-DD HH:mm")}
                </div>

                {project.imageUrl && (
                    <img className={styles.projectImage} src={project.imageUrl} alt="Project"/>
                )}

                {project.videoUrl && (
                    <video className={styles.projectVideo} controls>
                        <source src={project.videoUrl} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    )
}

export default ProjectPage