import { Project } from "@prisma/client";
import styles from "./projects.module.css";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ project }: { project: Project }) => {
  const technologies = JSON.parse(project.technologies);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image
          src={project.imageUrl}
          alt=""
          width={project.imageWidth}
          height={project.imageHeight}
        />
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
      <Link className={styles.seeMore} href={`/projects/${project.id}`}>
        <div>Voir plus → </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
