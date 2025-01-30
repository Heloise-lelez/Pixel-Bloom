import Parteners from "./partners";
import styles from "./presentation.module.css";
import Image from "next/image";
import ValuesCards from "./values_cards";
import TeamCards from "./team_cards";
import TextBanner from "./text_banner";
import Link from "next/link";
import db from "@/frameworks/db";

const getValuesCards = async () => {
  const values = await db.cards.findMany({
    where: {
      type: "value",
    },
  });
  return values;
};
const getTeamCards = async () => {
  const team = await db.cards.findMany({
    where: {
      type: "team",
    },
  });
  return team;
};

const Presentation = async () => {
  const values = await getValuesCards();
  const team = await getTeamCards();
  console.log(values);

  return (
    <div className={styles.presentation}>
      <div className={styles.services}>
        <p className={styles.highlight_title}>
          Les clients et partenaire de Pixel Bloom
        </p>
        <p className={styles.title}>
          PIXEL BLOOM vous propose un service de QUALITE
        </p>
        <div className={styles.services_section}>
          <Image
            className={styles.services_img}
            src="/team.svg"
            alt="Team working"
            width={867}
            height={443}
          />
          <p className={styles.text}>
            Chez PIXEL BLOOM, nos valeurs sont au cœur de tout ce que nous
            faisons. Elles reflètent notre engagement envers nos utilisateurs,
            nos partenaires et la société dans son ensemble.
          </p>
        </div>
        <Link className={styles.projectBtn} href={"/projects"}>
          Découvrir nos projet
        </Link>
      </div>
      <div className={styles.values}>
        <p className={styles.title}>Ce qui nous guide au quotidien</p>
        <p className={styles.dark_highlight_text}>
          Chez PIXEL BLOOM, nos valeurs sont au cœur de tout ce que nous
          faisons. Elles reflètent notre engagement envers nos utilisateurs, nos
          partenaires et la société dans son ensemble.
        </p>
        <ValuesCards cards={values} />
      </div>
      <TextBanner />
      <div className={styles.gradient}>
        <div className={styles.partnership}>
          <p className={styles.title}>Rencontrez notre équipe</p>
          <p className={styles.dark_highlight_title}>
            Les clients et partenaire de Pixel Bloom
          </p>
          <TeamCards cards={team} />
        </div>
        <div className={styles.partnership}>
          <p className={styles.dark_highlight_title}>
            Les clients et partenaire de Pixel Bloom
          </p>
          <p className={styles.title}>Ils nous font confiance</p>
          <Parteners />
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.title}>Vous avez un projet web ? 🚀</p>
        <p className={styles.dark_highlight_title}>
          Contactez-nous via notre formulaire de contact, nous reviendrons vers
          vous dans un délai de 24h.
        </p>
        <Link className={styles.contact_button} href={"/contact"}>
          Contactez-nous !
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
