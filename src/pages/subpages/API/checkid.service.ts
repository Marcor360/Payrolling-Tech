const API_KEY = import.meta.env.VITE_CHECKID_API_KEY;
const BASE_URL = import.meta.env.VITE_CHECKID_BASE_URL;

export async function busquedaCheckId(TerminoBusqueda: string) {
    const res = await fetch(`${BASE_URL}/Busqueda`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ApiKey: API_KEY,
            TerminoBusqueda,
            ObtenerRFC: true,
            ObtenerCURP: true,
            ObtenerRegimenFiscal: true,
            ObtenerCP: true,
        }),
    });

    if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${txt}`);
    }

    return res.json();
}
