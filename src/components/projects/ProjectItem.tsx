import { Project } from "@prisma/client";
import styles from "./projects.module.css";

const ProjectItem = ({ project }: { project: Project }) => {
  const technologies = JSON.parse(project.technologies);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={project.imageUrl} alt="" />
      </div>
      <div className={styles.projectDescription}>
        <p>{project.title}</p>
        <div className={styles.categoryWrapper}>
          {technologies.map((techno: string) => {
            return (
              <div className={styles.categoryChip} key={techno}>
                {techno}
              </div>
            );
          })}
        </div>
      </div>
      <a href={`/projects/${project.id}`}>
        <div>Voir plus</div>
      </a>
    </div>
  );
};

export default ProjectItem;
