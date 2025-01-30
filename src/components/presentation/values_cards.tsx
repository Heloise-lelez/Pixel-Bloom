import Image from "next/image";
import styles from "./values.module.css";
import { Cards } from "@prisma/client";

const ValuesCards = ({ cards }: { cards: Cards[] }) => {
  return (
    <div className={styles.cards}>
      {cards.map((value) => (
        <div className={styles.card} key={value.imgName}>
          <Image
            className={styles.illustration}
            src={`${value.imgName}.svg`}
            alt="Team working"
            width={value.width}
            height={value.height}
          />
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesCards;
