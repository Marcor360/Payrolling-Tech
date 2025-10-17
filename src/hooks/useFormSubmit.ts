import { useState, useCallback } from "react";
import type { FormEvent } from "react";
import { submitForm, type FormSubmitOptions } from "../lib/formSubmit.ts";

type Options = FormSubmitOptions & {
    metadata?: Record<string, unknown>;
    onSuccessMessage?: string;
    onErrorMessage?: string;
};

export function useFormSubmit({
    metadata,
    onSuccessMessage = "¡Gracias! Hemos recibido tu mensaje.",
    onErrorMessage = "Ocurrió un error al enviar el formulario. Intenta nuevamente más tarde.",
    ...options
}: Options) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = event.currentTarget;
            const honeypot =
                (form.elements.namedItem("empresa_web") as HTMLInputElement | null)?.value ?? "";

            if (honeypot.trim().length > 0) {
                form.reset();
                return;
            }

            setIsSubmitting(true);
            submitForm(form, { ...options, metadata })
                .then(() => {
                    alert(onSuccessMessage);
                    form.reset();
                })
                .catch((error) => {
                    console.error("Error enviando formulario:", error);
                    alert(error.message ?? onErrorMessage);
                })
                .finally(() => setIsSubmitting(false));
        },
        [metadata, onErrorMessage, onSuccessMessage, options]
    );

    return { isSubmitting, handleSubmit };
}
