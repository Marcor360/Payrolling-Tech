import Headers from "../../components/header.tsx"
import Foter from "../../components/footer.tsx"
//

// Video en carpeta public (usar ruta absoluta)

export default function Nominas() {

    return (
        <>
            <Headers variant="darkTransparent" />
            <section aria-label="Hero Nóminas" className="relative overflow-hidden bg-[#0b0f2a] text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 text-center">
                    <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Tu <span className="bg-cardeno px-2 rounded-sm">nòmina</span> <span>ràpido</span> y <span>sin errores</span>
                    </h1>
                    <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl">
                        tu <span className="font-bold text-white">activo</span> más importante para <span className="font-extrabold text-white">hacer crecer negocio</span>
                    </p>

                    <a
                        href=""
                        className="mt-8 inline-block rounded-md bg-yellow-400 px-6 py-3 font-semibold text-noche shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    >
                        Conoce nuestro servicio
                    </a>
                </div>
            </section>
            <section>
                <div className="mx-auto w-full max-w-5xl px-4">
                    {/* aqui va el video */}
                    <video
                        className="w-full h-auto rounded-md shadow-sm"
                        controls
                        playsInline
                        preload="metadata"
                        src="/video/vid-1.mp4"
                    >
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </section>
            <section className="py-10">
                <div className="mx-auto w-full max-w-6xl px-4">
                    <h2 className="text-cardeno font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
                        ¿QUE INCLUYE NUESTRO SERVICIO?
                    </h2>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-noche/90 text-sm sm:text-base list-disc list-inside md:list-outside md:pl-6 text-center md:text-left">
                        <li>
                            Cálculo de nómina y timbrado de recibos mensual, quincenal o semanal.
                        </li>
                        <li>
                            Control de asistencias, vacaciones, aguinaldo, finiquitos y liquidaciones.
                        </li>
                        <li>
                            Determinación de impuestos y retenciones (ISR, IMSS, INFONAVIT).
                        </li>
                        <li>
                            Asesoría personalizada en materia Fiscal, Laboral y RR HH.
                        </li>
                        <li>
                            Altas y bajas de empleados ante el IMSS y plataformas fiscales.
                        </li>
                        <li>
                            Atención y soporte personalizado de nuestra plataforma.
                        </li>
                    </ul>
                </div>
            </section>
            <Foter />
        </>
    )
}
