import styles from "./team.module.css";
import Image from "next/image";
import { Cards } from "@prisma/client";

const TeamCards = ({ cards }: { cards: Cards[] }) => {
  return (
    <>
      <div className={styles.cards}>
        {cards.map((member) => (
          <div className={styles.card} key={member.imgName}>
            <Image
              src={`/${member.imgName}.webp`}
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
