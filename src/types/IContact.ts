export type IContactForm = {
    name: string
    email: string
    message: string
    errors?: {
        name?: string
        email?: string
        message?: string
    };
};