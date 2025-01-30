import styles from "./page.module.css"
import ContactForm from "@/components/contact/contactForm";
import Image from "next/image";

const ContactPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contactImage}>
                <Image
                    src={`contact.svg`}
                    alt="Messaging "
                    width={643}
                    height={528}
                />
            </div>

            <div className={styles.contactFormContainer}>
                <h1>Contactez-nous</h1>
                <p>Vous cherchez une agence web de confiance pour votre projet  ? Contactez-nous et découvrez comment nous pouvons vous aider.</p>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage