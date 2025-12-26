// src/API/Consultas.ts
// CheckID no expone CORS; consumimos siempre via el proxy /api/checkid.
const API_KEY = (import.meta.env.VITE_CHECKID_API_KEY as string | undefined) || "";
// Incluye slash final para evitar redirección 301 -> pérdida de body en algunos hostings.
const CHECKID_ENDPOINT = (import.meta.env.VITE_CHECKID_PROXY as string) || "/api/checkid/";
const CHECKID_FALLBACK = (import.meta.env.VITE_CHECKID_FALLBACK as string) || "https://www.checkid.mx/api/Busqueda";

export type CheckIdNode<T> = {
    exitoso: boolean;
    codigoError: string | null;
    error: string | null;
} & T;

export type CheckIdBusquedaResponse = {
    exitoso: boolean;
    codigoError: string | null;
    error: string | null;
    resultado: {
        rfc: CheckIdNode<{
            rfc: string;
            razonSocial: string;
            valido: boolean;
            validoHasta: string;
            validoHastaText: string;
            rfcRepresentante?: string;
            curpRepresentante?: string;
            curp?: string;
            emailContacto?: string;
        }> | null;

        curp: CheckIdNode<{
            curp: string;
            fechaNacimiento: string;
            fechaNacimientoText: string;
            nombres: string;
            primerApellido: string;
            segundoApellido: string;
            sexo: string;
            nacionalidad: string;
            entidad: string;
            municipioRegistro: string;
        }> | null;

        codigoPostal: CheckIdNode<{ codigoPostal: string }> | null;

        regimenFiscal: CheckIdNode<{ regimenesFiscales: string }> | null;

        nss: CheckIdNode<{ nss: string }> | null;

        estado69o69B: CheckIdNode<{
            conProblema: boolean;
            detalles?: {
                nombre: string;
                situacionContribuyente: string;
                statusContribuyente: string;
                problemas?: Array<{
                    descripcion: string;
                    fechaPublicacion: string;
                    fechaLFTAIP: string;
                    fechaActualizacion: string;
                }>;
            };
        }> | null;
    } | null;
};

async function postCheckId(endpoint: string, payload: Record<string, unknown>) {
    const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const contentType = res.headers.get("content-type") || "";
    const rawText = await res.text();

    if (!res.ok) {
        try {
            const maybeJson = JSON.parse(rawText) as { error?: string };
            throw new Error(maybeJson?.error || `HTTP ${res.status}`);
        } catch {
            throw new Error(`HTTP ${res.status}`);
        }
    }

    if (!contentType.toLowerCase().includes("application/json")) {
        throw new Error(`El endpoint ${endpoint} no devuelve JSON (revisa proxy/backend).`);
    }

    let data: CheckIdBusquedaResponse | null = null;
    try {
        data = JSON.parse(rawText) as CheckIdBusquedaResponse;
    } catch {
        // dejará caer en error final
    }
    if (!data) throw new Error("Respuesta vacia o invalida");
    return data;
}

export async function buscarRFC_CURP(termino: string): Promise<CheckIdBusquedaResponse> {
    const payload: Record<string, unknown> = {
        TerminoBusqueda: termino,
        ObtenerRFC: true,
        ObtenerCURP: true,
        Obtener69o69B: true,
        ObtenerNSS: true,
        ObtenerRegimenFiscal: true,
        ObtenerCP: true,
    };

    // Si el frontend trae la API key, la enviamos; si no, el backend debe inyectarla.
    if (API_KEY) {
        payload.ApiKey = API_KEY;
    }

    // Primer intento: endpoint configurado (/api/checkid por defecto)
    try {
        return await postCheckId(CHECKID_ENDPOINT, payload);
    } catch (err) {
        // Si ya estamos usando el fallback o no hay fallback distinto, propaga el error
        const endpointLower = CHECKID_ENDPOINT.toLowerCase();
        const fallbackLower = CHECKID_FALLBACK.toLowerCase();
        if (endpointLower === fallbackLower || !CHECKID_FALLBACK) {
            throw err;
        }
        // Segundo intento: fallback directo (útil en hosting sin proxy)
        return await postCheckId(CHECKID_FALLBACK, payload);
    }
}
