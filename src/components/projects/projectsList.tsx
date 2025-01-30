'use client'

import {Project} from "@prisma/client"
import ProjectItem from "@/components/projects/projectItem";
import styles from "./projects.module.css"
import {ITechnology} from "@/types/IProjects";
import React, {useEffect, useState} from "react";

const allTechnologies: ITechnology[] = [
    {label: "React.js", value: "react"},
    {label: "Next.js", value: "next"},
    {label: "Node.js", value: "node"},
    {label: "DynamoDB", value: "dynamo"},
    {label: "PostgreSQL", value: "postgre"},
    {label: "Datadog", value: "datadog"},
    {label: "AWS CloudWatch", value: "aws"},
    {label: "Prometheus", value: "prometheus"}
]


const ProjectsList = ({projects}: {projects: Project[]}) => {
    const [technologySelected, setTechnologySelected] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    useEffect(() => {
        const filtered = projects.filter((project) => {
            const projectTechnologies: string[] = JSON.parse(project.technologies);

            return technologySelected.length === 0 ||
                technologySelected.some((tech) => projectTechnologies.includes(tech));
        });

        setFilteredProjects(filtered);
    }, [technologySelected, projects]);


    const selectTechno = (value: string) => {
        setTechnologySelected((prev) =>
            prev.includes(value) ? prev.filter((tech) => tech !== value) : [...prev, value]
        );
    };

    return (
        <>
            <div className={styles.categoryWrapper}>
                {allTechnologies.map((technology: ITechnology, index: number) => {
                    const isSelected = technologySelected.includes(technology.value);
                    return (
                        <button
                            key={index}
                            className={isSelected ? styles.categoryChipSelected : styles.categoryChip}
                            onClick={() => selectTechno(technology.value)}
                        >
                            {technology.label}
                        </button>
                    );
                })}
            </div>

            <div className={styles.projectsContainer}>
                {filteredProjects.map(project => {
                    return (
                        <ProjectItem key={project.id} project={project}/>
                    )
                })}
            </div>
        </>
    )
}

export default ProjectsList