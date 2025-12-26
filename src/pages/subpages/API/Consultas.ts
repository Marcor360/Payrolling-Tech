// src/API/Consultas.ts
const API_KEY = import.meta.env.VITE_CHECKID_API_KEY as string;
const BASE_URL = (import.meta.env.VITE_CHECKID_BASE_URL as string) || "https://www.checkid.mx/api";
// Para evitar CORS en dev usa el proxy local; en prod puedes dejarlo vacío para ir directo.
const CHECKID_ENDPOINT = (import.meta.env.VITE_CHECKID_PROXY as string) || `${BASE_URL}/Busqueda`;

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

export async function buscarRFC_CURP(termino: string): Promise<CheckIdBusquedaResponse> {
    if (!API_KEY) throw new Error("Falta VITE_CHECKID_API_KEY en .env");

    const res = await fetch(CHECKID_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ApiKey: API_KEY,
            TerminoBusqueda: termino,
            ObtenerRFC: true,
            ObtenerCURP: true,
            Obtener69o69B: true,
            ObtenerNSS: true,
            ObtenerRegimenFiscal: true,
            ObtenerCP: true,
        }),
    });

    // OJO: si CORS está bloqueado, el browser ni siquiera te deja leer status/body.
    const data = (await res.json().catch(() => null)) as CheckIdBusquedaResponse | null;

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }
    if (!data) throw new Error("Respuesta vacía o inválida");

    return data;
}
