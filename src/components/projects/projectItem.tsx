import { Project } from "@prisma/client";
import styles from "./projects.module.css";
import Link from "next/link";
import Image from "next/image";

const getTechnoName = (value: string) => {
    switch (value) {
        case "react":
            return "React.js";
        case "next":
            return "Next.js";
        case "node":
            return "Node.js";
        case "dynamo":
            return "DynamoDB";
        case "postgre":
            return "PostgreSQL";
        case "datadog":
            return "Datadog";
        case "aws":
            return "AWS CloudWatch";
        case "prometheus":
            return "Prometheus";
        default:
            return;
    }
}

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
                {getTechnoName(techno)}
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
