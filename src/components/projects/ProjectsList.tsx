import {Project} from "@prisma/client"
import ProjectItem from "@/components/projects/ProjectItem";
import styles from "./projects.module.css"

const ProjectsList = ({projects}: {projects: Project[]}) => {
    return (
        <div className={styles.projectsContainer}>
            {projects.map(project => {
                return (
                    <ProjectItem key={project.id} project={project}/>
                )
            })}
        </div>
    )
}

export default ProjectsList