'use server';

import db from "@/frameworks/db";
import { revalidatePath } from "next/cache";

export const createContact = async (prevState: never, formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name || name.length < 3) errors.name = "Le nom doit contenir au moins 3 caractères.";
    if (!email || !email.includes("@")) errors.email = "Veuillez entrer un email valide.";
    if (!message || message.length < 10) errors.message = "Le message doit contenir au moins 10 caractères.";

    if (Object.keys(errors).length > 0) {
        return { name, email, message, errors };
    }

    await db.contact.create({
        data: { name, email, message },
    });

    revalidatePath("/contact");

    return { name: "", email: "", message: "", errors: {} };
};
