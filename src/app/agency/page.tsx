import styles from "./page.module.css";
import Image from "next/image";

const AgencyPage = () => {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.introSection}>
                <div className={styles.textContent}>
                    <h1>Bienvenue chez Pixel Bloom</h1>
                    <p>
                        Chez <strong>Pixel Bloom</strong>, nous croyons en la puissance de l'innovation pour transformer vos idées en réalité numérique. Nous sommes une agence web dédiée à accompagner les entreprises dans la création de sites internet modernes, intuitifs et adaptés à leurs besoins.
                    </p>
                    <p>
                        Notre mission est simple : <strong>aider votre entreprise à se développer sur le web en vous offrant une présence en ligne unique et impactante</strong>. Que vous soyez une startup ambitieuse ou une entreprise établie, nous vous apportons les outils nécessaires pour réussir dans un monde digital en constante évolution.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/blooming.svg"
                        alt="Agence Pixel Bloom"
                        width={500}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </section>

            <section className={styles.servicesSection}>
                <h2>Ce que nous faisons</h2>
                <div className={styles.serviceItems}>
                    <div className={styles.serviceItem}>
                        <h3>Création de sites web</h3>
                        <p>
                            Nous concevons des sites internet sur mesure, en prenant en compte vos objectifs, vos valeurs et votre audience. Chaque projet est un nouveau défi pour créer une expérience utilisateur fluide et une interface esthétique.
                        </p>
                    </div>
                    <div className={styles.serviceItem}>
                        <h3>Marketing digital</h3> {/* Changement ici */}
                        <p>
                            Boostez votre visibilité en ligne avec des stratégies de marketing digital sur mesure. Nous mettons en place des campagnes publicitaires, du SEO et des solutions d'emailing pour générer du trafic et augmenter vos conversions.
                        </p>
                    </div>
                    <div className={styles.serviceItem}>
                        <h3>Stratégie digitale</h3>
                        <p>
                            Nous élaborons avec vous des stratégies digitales adaptées à vos objectifs commerciaux, qu'il s'agisse de générer du trafic, de renforcer votre image de marque ou d'augmenter vos conversions.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.whyChooseUs}>
                <h2>Pourquoi choisir Pixel Bloom ?</h2>
                <div className={styles.whyChooseItems}>
                    <div className={styles.whyItem}>
                        <h3>Expertise technique</h3>
                        <p>
                            Notre équipe combine compétences techniques et créativité pour vous offrir des solutions modernes et adaptées aux exigences du marché.
                        </p>
                    </div>
                    <div className={styles.whyItem}>
                        <h3>Approche personnalisée</h3>
                        <p>
                            Chaque projet est unique. Nous écoutons attentivement vos besoins et mettons en place des solutions sur mesure pour vous garantir des résultats à la hauteur de vos attentes.
                        </p>
                    </div>
                    <div className={styles.whyItem}>
                        <h3>Suivi continu</h3>
                        <p>
                            Notre travail ne s'arrête pas à la livraison de votre site. Nous vous accompagnons tout au long de la gestion et de l’évolution de votre présence en ligne.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.finalSection}>
                <h2>Rejoignez la famille Pixel Bloom</h2>
                <p>
                    Notre ambition est d'aider les entreprises à s'épanouir dans le monde numérique, et ce, en créant des expériences uniques pour chaque client. Ensemble, faisons fleurir vos projets et offrons à votre entreprise une visibilité qui lui ressemble.
                </p>
                <div className={styles.imageContainer}>
                    <Image
                        src="/team_work.svg" // Remplacer par le chemin de votre image
                        alt="Collaboration"
                        width={500}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </section>
        </div>
    );
}

export default AgencyPage;
