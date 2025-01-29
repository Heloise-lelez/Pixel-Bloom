import Parteners from "./partners";
import styles from "./presentation.module.css";
import Image from "next/image";
import ValuesCards from "./values_cards";
import TeamCards from "./team_cards";

const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.services}>
        <p className={styles.highlight}>
          Les clients et partenaire de Pixel Bloom
        </p>
        <p>PIXEL BLOOM vous propose un service de QUALITE</p>
        <div className={styles.services_section}>
          <Image src="/team.svg" alt="Team working" width={400} height={200} />
          <p className={styles.highlight}>
            Chez PIXEL BLOOM, nos valeurs sont au cœur de tout ce que nous
            faisons. Elles reflètent notre engagement envers nos utilisateurs,
            nos partenaires et la société dans son ensemble.
          </p>
        </div>
      </div>
      <div className={styles.values}>
        <p>Ce qui nous guide au quotidien</p>
        <p className={styles.dark_highlight}>
          Chez PIXEL BLOOM, nos valeurs sont au cœur de tout ce que nous
          faisons. Elles reflètent notre engagement envers nos utilisateurs, nos
          partenaires et la société dans son ensemble.
        </p>
        <ValuesCards />
      </div>
      <div className={styles.values}>
        <p>Rencontrez notre équipe</p>
        <p className={styles.dark_highlight}>
          Les clients et partenaire de Pixel Bloom
        </p>
        <TeamCards />
      </div>
      <div className={styles.partnership}>
        <p className={styles.dark_highlight}>
          Les clients et partenaire de Pixel Bloom
        </p>
        <p>Ils nous font confiance</p>
        <Parteners />
      </div>
      <div className={styles.contact}>
        <p>Vous avez un projet web ? 🚀</p>
        <p className={styles.dark_highlight}>
          Contactez-nous via notre formulaire de contact, nous reviendrons vers
          vous dans un délai de 24h.
        </p>
        <button className={styles.contact_button}>CONTACTEZ-NOUS</button>
      </div>
    </div>
  );
};

export default Presentation;
