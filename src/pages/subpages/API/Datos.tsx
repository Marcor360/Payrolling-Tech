import { useState, type FormEvent } from "react";
import Header from "../../../components/header.tsx";
import Footer from "../../../components/footer.tsx";
import { buscarRFC_CURP, type CheckIdBusquedaResponse } from "../API/Consultas.ts"; // ajusta ruta

export default function Datos() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [data, setData] = useState<CheckIdBusquedaResponse | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const termino = query.trim().toUpperCase();
        setErrorMsg(null);
        setData(null);

        if (!termino) {
            setErrorMsg("Escribe un RFC o CURP.");
            return;
        }

        // Validación rápida (evita quemar requests por errores E100/E101)
        const rfcLike = /^[A-Z&Ñ]{3,4}\d{6}[A-Z0-9]{3}$/.test(termino);
        const curpLike = /^[A-Z][AEIOUX][A-Z]{2}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/.test(termino);
        if (!rfcLike && !curpLike) {
            setErrorMsg("Formato inválido. Debe ser RFC o CURP.");
            return;
        }

        setLoading(true);
        try {
            const resp = await buscarRFC_CURP(termino);

            if (!resp.exitoso) {
                // La API responde exitoso=false con codigoError/error (ej: E200 “No se encontró…”) :contentReference[oaicite:3]{index=3}
                setErrorMsg(resp.error ?? "Consulta no exitosa.");
                return;
            }

            setData(resp);
        } catch (e: any) {
            // Si CORS bloquea, normalmente verás "TypeError: Failed to fetch"
            setErrorMsg(e?.message ?? "Error de red.");
        } finally {
            setLoading(false);
        }
    };

    const resultado = data?.resultado;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fff7ef] via-white to-[#f7f1ff] text-noche flex flex-col">
            <Header />

            <main className="flex-1 px-4 pb-16 pt-20 md:pt-24">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-10">
                    <div className="text-center space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cardeno/70">
                            Verificación segura
                        </p>
                        <h1 className="text-3xl font-black text-cardeno sm:text-4xl">
                            Consulta RFC o CURP con Payrolling
                        </h1>
                        <p className="text-sm sm:text-base text-noche/80 max-w-2xl">
                            Valida datos con la plataforma de Payrolling Tech de forma rápida y confiable. Ingresa el
                            identificador y pronto podrás ver el resultado aquí mismo.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="w-full space-y-6 rounded-3xl border border-cardeno/20 bg-white/85 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                    >
                        <label className="block space-y-3">
                            <span className="text-sm font-semibold text-noche">RFC o CURP</span>
                            <div className="flex items-center gap-3 rounded-2xl border border-cardeno/25 bg-cardeno/10 px-4 py-3 shadow-inner shadow-cardeno/10">
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-cardeno"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="6" />
                                    <path d="m20 20-4.35-4.35" />
                                </svg>
                                <input
                                    type="text"
                                    name="identificador"
                                    autoComplete="off"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Introduce RFC o CURP para hacer una consulta"
                                    className="w-full bg-transparent text-base font-medium text-cardeno placeholder:text-cardeno focus:outline-none"
                                />
                            </div>
                        </label>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-xl bg-cardeno px-10 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(123,47,196,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(123,47,196,0.42)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cardeno disabled:opacity-60 disabled:hover:translate-y-0"
                                disabled={!query.trim() || loading}
                            >
                                {loading ? "Consultando..." : "Consultar"}
                            </button>
                        </div>

                        {errorMsg && (
                            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                {errorMsg}
                            </div>
                        )}
                    </form>

                    {/* RESULTADOS */}
                    {resultado && (
                        <div className="w-full space-y-4 rounded-3xl border border-cardeno/20 bg-white/85 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.08)]">
                            <h2 className="text-base font-extrabold text-cardeno">Resultado</h2>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {/* RFC */}
                                <div className="rounded-2xl border border-cardeno/15 p-4">
                                    <p className="text-xs font-bold text-noche/60">RFC</p>
                                    {resultado.rfc ? (
                                        resultado.rfc.exitoso ? (
                                            <>
                                                <p className="font-semibold text-noche">{resultado.rfc.rfc}</p>
                                                <p className="text-sm text-noche/70">{resultado.rfc.razonSocial}</p>
                                                <p className="text-sm text-noche/70">
                                                    Válido: {resultado.rfc.valido ? "Sí" : "No"} · Hasta: {resultado.rfc.validoHastaText}
                                                </p>
                                            </>
                                        ) : (
                                            <p className="text-sm text-red-700">{resultado.rfc.error ?? "Error en nodo RFC"}</p>
                                        )
                                    ) : (
                                        <p className="text-sm text-noche/60">Sin datos</p>
                                    )}
                                </div>

                                {/* CURP */}
                                <div className="rounded-2xl border border-cardeno/15 p-4">
                                    <p className="text-xs font-bold text-noche/60">CURP</p>
                                    {resultado.curp ? (
                                        resultado.curp.exitoso ? (
                                            <>
                                                <p className="font-semibold text-noche">{resultado.curp.curp}</p>
                                                <p className="text-sm text-noche/70">
                                                    {resultado.curp.nombres} {resultado.curp.primerApellido} {resultado.curp.segundoApellido}
                                                </p>
                                                <p className="text-sm text-noche/70">
                                                    Nacimiento: {resultado.curp.fechaNacimientoText} · {resultado.curp.entidad}
                                                </p>
                                            </>
                                        ) : (
                                            <p className="text-sm text-red-700">{resultado.curp.error ?? "Error en nodo CURP"}</p>
                                        )
                                    ) : (
                                        <p className="text-sm text-noche/60">Sin datos</p>
                                    )}
                                </div>

                                {/* CP */}
                                <div className="rounded-2xl border border-cardeno/15 p-4">
                                    <p className="text-xs font-bold text-noche/60">Código Postal</p>
                                    {resultado.codigoPostal?.exitoso ? (
                                        <p className="font-semibold text-noche">{resultado.codigoPostal.codigoPostal}</p>
                                    ) : (
                                        <p className="text-sm text-noche/60">Sin datos</p>
                                    )}
                                </div>

                                {/* Régimen */}
                                <div className="rounded-2xl border border-cardeno/15 p-4">
                                    <p className="text-xs font-bold text-noche/60">Régimen fiscal</p>
                                    {resultado.regimenFiscal?.exitoso ? (
                                        <p className="text-sm text-noche">{resultado.regimenFiscal.regimenesFiscales}</p>
                                    ) : (
                                        <p className="text-sm text-noche/60">Sin datos</p>
                                    )}
                                </div>
                            </div>

                            <details className="mt-2">
                                <summary className="cursor-pointer text-sm font-semibold text-cardeno">
                                    Ver respuesta completa (JSON)
                                </summary>
                                <pre className="mt-3 max-h-[420px] overflow-auto rounded-2xl bg-black/5 p-4 text-xs">
                                    {JSON.stringify(data, null, 2)}
                                </pre>
                            </details>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
