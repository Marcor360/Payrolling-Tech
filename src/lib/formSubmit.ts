export type FormSubmitOptions = {
    formType?: "general" | "recruitment" | string;
    subject?: string;
    metadata?: Record<string, unknown>;
    endpoint?: string;
};

const DEFAULT_ENDPOINT = "/api/mail";

const HONEYPOT_FIELDS = new Set(["empresa_web", "website", "url"]);

function buildPayload(form: HTMLFormElement) {
    const data = new FormData(form);
    const payload: Record<string, any> = {};

    for (const [key, rawValue] of data.entries()) {
        if (HONEYPOT_FIELDS.has(key)) {
            continue;
        }

        const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;

        if (payload[key] !== undefined) {
            const current = payload[key];
            if (Array.isArray(current)) {
                current.push(value);
            } else {
                payload[key] = [current, value];
            }
        } else {
            payload[key] = value;
        }
    }

    return payload;
}

export async function submitForm(
    form: HTMLFormElement,
    { formType = "general", subject, metadata, endpoint = DEFAULT_ENDPOINT }: FormSubmitOptions = {}
) {
    const body = buildPayload(form);

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            formType,
            subject,
            data: body,
            metadata: {
                page: window?.location?.pathname ?? "unknown",
                ...metadata,
            },
        }),
    });

    if (!response.ok) {
        const details = await response.json().catch(() => ({}));
        throw new Error(details.message ?? "No se pudo enviar el formulario.");
    }

    try {
        return await response.json();
    } catch {
        return {};
    }
}
