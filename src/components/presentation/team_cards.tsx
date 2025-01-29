import styles from "./team.module.css";
import Image from "next/image";

const team = [
  {
    title: "CEO",
    description:
      "Visionnaire et passionnée par l'innovation numérique, elle guide Pixel Bloom vers des solutions créatives et durables.",
    key: "ceo",
  },
  {
    title: "CTO",
    description:
      "Experte en technologies web, elle façonne l’architecture et l’innovation technique de Pixel Bloom.",
    key: "CTO",
  },
  {
    title: "Happiness Manager",
    description:
      "Avec douceur et espièglerie, ils veillent au bien-être de l'équipe et apportent une touche de sérénité à Pixel Bloom 😊🐾",
    key: "cats",
  },
];

const TeamCards = () => {
  return (
    <>
      <div className={styles.cards}>
        {team.map((member) => (
          <div className={styles.card} key={member.key}>
            <Image
              src={`/${member.key}.webp`}
              alt={`Picture of our ${member.title}`}
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
            />
            <h3>{member.title}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCards;
