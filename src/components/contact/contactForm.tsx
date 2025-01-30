'use client';

import styles from "./contact.module.css";
import { createContact } from "../../../actions";
import { useActionState } from "react";
import {IContactForm} from "@/types/IContact";
import {toast} from "react-toastify"

const ContactForm = () => {

    const [state, formAction] = useActionState<IContactForm, FormData>(createContact, {
        name: "",
        email: "",
        message: "",
        errors: {},
    });

    const handleSuccess = () => {
        toast.success("Message envoyé avec succès !");
    };

    return (
        <form action={formAction} className={styles.contactForm}>
            <div className={styles.inputContainer}>
                <label>Nom Prénom</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={state.name}
                    placeholder="Entrez votre nom"
                    required
                />
                {state.errors?.name && <p className={styles.error}>{state.errors.name}</p>}
            </div>
            <div className={styles.inputContainer}>
                <label>E-mail</label>
                <input
                    type="email"
                    name="email"
                    defaultValue={state.email}
                    placeholder="Entrez votre e-mail"
                    required
                />
                {state.errors?.email && <p className={styles.error}>{state.errors.email}</p>}
            </div>

            <div className={styles.inputContainer}>
                <label>Message</label>
                <textarea
                    name="message"
                    defaultValue={state.message}
                    placeholder="Entrez votre message"
                    required
                />
                {state.errors?.message && <p className={styles.error}>{state.errors.message}</p>}
            </div>

            <button type="submit" onClick={handleSuccess}>Envoyer</button>
        </form>
    );
};

export default ContactForm;
