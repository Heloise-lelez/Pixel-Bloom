import Image from "next/image";
import styles from "./values.module.css";

const values = [
  {
    title: "Innovation",
    description: "Toujours chercher des solutions modernes et avant-gardistes.",
    key: "innovation",
  },
  {
    title: "Accessibilité",
    description: "Rendre le web beau et fonctionnel pour tout le monde.",
    key: "accessibility",
  },
  {
    title: "Écoute",
    description: "Comprendre chaque client pour refléter sa vision unique.",
    key: "listening",
  },
  {
    title: "Durabilité",
    description:
      "Concevoir des solutions numériques respectueuses de l'environnement.",
    key: "durability",
  },
];

const ValuesCards = () => {
  return (
    <div className={styles.cards}>
      {values.map((value) => (
        <div className={styles.card} key={value.key}>
          <Image
            src={`${value.key}.svg`}
            alt="Team working"
            width={200}
            height={200}
          />
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesCards;
