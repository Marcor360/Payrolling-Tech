import Headers from "../../components/header.tsx";
import Foter from "../../components/footer.tsx";
import { useState } from "react";

import FondoHeadBubles from "/img/tarjetas/Fondo-tarjetas/FondoNomina.webp";
import Text1 from "/img/textos/TuNominaRapidoySinErrores.webp";
import Text2 from "/img/textos/IngresaYfasilitaTusProcesos.webp";
import Colient1 from "/img/img-tarjetas/Cliente1.webp";
import Colient2 from "/img/img-tarjetas/Cliente2.webp";
import Colab1 from "/img/img-tarjetas/Colaborador1.webp";
import Colab2 from "/img/img-tarjetas/Colaborador2.webp";

function Card({
    label,
    imgDefault,
    imgActive,
    align = "left",
    href = "",
}: {
    label: string;
    imgDefault: string;
    imgActive: string;
    align?: "left" | "right";
    href?: string;
}) {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);
    const src = hover || open ? imgActive : imgDefault;

    return (
        <>
            <div
                className={`relative mx-auto w-full max-w-md transition-transform duration-300 ${align === "right" ? "md:rotate-3" : "md:-rotate-3"}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setOpen(true);
                }}
                aria-label={`${label}. Tocar o hacer clic para ingresar`}
            >
                <img
                    src={src}
                    alt={label}
                    className="w-full h-auto rounded-2xl ring-2 ring-cardeno shadow-xl select-none"
                    draggable={false}
                />
                <span
                    className={`absolute ${align === "right" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 -rotate-90 bg-cardeno text-white px-3 py-1 rounded-md font-bold shadow`}
                >
                    {label}
                </span>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Ingresar a ${label}`}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={imgActive}
                            alt={`${label} ampliado`}
                            className="w-full max-w-2xl md:max-w-3xl h-auto rounded-2xl ring-4 ring-cardeno shadow-2xl"
                        />
                        <a
                            href={href}
                            className="absolute inset-0 m-auto h-12 w-48 flex items-center justify-center rounded-xl bg-yellow-400 text-noche font-extrabold shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                        >
                            Ingresar
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default function Nominas() {

    return (
        <>
            <section
                aria-label="Hero Nóminas"
                className="relative overflow-hidden text-white bg-cover bg-bottom min-h-[680px] md:min-h-[760px] lg:min-h-[840px]"
                style={{ backgroundImage: `url(${FondoHeadBubles})` }}
            >
                <Headers variant="darkTransparent" />
                <div className="mx-auto max-w-7xl px-4 pt-0 md:pt-1 lg:pt-2 pb-6 md:pb-6 text-center -mt-4 md:-mt-6 lg:-mt-8">
                    <img
                        src={Text1}
                        alt="Tu nómina rápido y sin errores"
                        className="mx-auto w-full max-w-3xl h-auto"
                        loading="eager"
                        decoding="async"
                    />
                    <p className="mt-1 md:mt-1 text-white/90 text-base sm:text-lg md:text-xl">
                        tu <span className="font-bold text-white">activo</span> más importante para <span className="font-extrabold text-white">fortalecer tu negocio</span>
                    </p>

                    <a
                        href="https://api.whatsapp.com/send/?phone=528138646238&text=%C2%A1Hola%21+Quiero+m%C3%A1s+info+del+servicio+de+%2APayrolling+Tech%2A&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                        className="mt-1 md:mt-2 inline-block rounded-md bg-yellow-400 px-6 py-3 font-semibold text-noche shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    >
                        Conoce nuestro servicio
                    </a>
                </div>
            </section>
            <section>
                <div className="mx-auto w-full max-w-5xl px-4 pt-15">
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
            <section className="py-10 pt-20">
                <div className="mx-auto w-full max-w-6xl px-4">
                    <h2 className="text-cardeno font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
                        ¿QUE INCLUYE NUESTRO SERVICIO?
                    </h2>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-noche/90 text-sm sm:text-base md:text-lg list-disc list-inside md:list-outside md:pl-6 text-center md:text-left">
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
                        <li>
                            App para colaboradores (potal del colaborador).
                        </li>
                        <li>
                            Reportes personalizados.
                        </li>
                        <li>
                            Integraciones STP para dispersión (ERP, SAP, oracle,).
                        </li>
                        <li>
                            Alertas y notificaciones.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="bg-cardeno py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="flex justify-center md:justify-start">
                            <a
                                href="https://api.whatsapp.com/send/?phone=528138646238&text=%C2%A1Hola%21+Quiero+m%C3%A1s+info+del+servicio+de+%2APayrolling+Tech%2A&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 md:px-10 md:py-5 text-noche font-extrabold text-lg md:text-2xl shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                                aria-label="Solicitar una demo por WhatsApp"
                            >
                                Solicitar una demo
                            </a>
                        </div>
                        <h2 className="text-white text-center md:text-right leading-tight">
                            <span className="text-2xl sm:text-3xl md:text-4xl text-white/90">¿Te gustaría automatizar</span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold">tu nómina?</span>
                        </h2>
                    </div>
                </div>
            </section>
            <section id="login" aria-label="Ingresar y facilitar procesos" className="relative overflow-hidden py-12 md:py-16 bg-[#f6f3ef] scroll-mt-24">
                {/* Texto de fondo */}
                <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-center z-0">
                    <img src={Text2} alt="¡Ingresa y facilita tus procesos!" className="w-[90%] max-w-5xl h-auto opacity-100" />
                </div>

                {/* Tarjetas */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Colaboradores */}
                    <Card
                        label="Colaboradores"
                        imgDefault={Colab1}
                        imgActive={Colab2}
                        href="http://payrolling-tech.webhop.org:9362/mn/sirele/index"
                    />

                    {/* Clientes */}
                    <Card
                        label="Clientes"
                        imgDefault={Colient1}
                        imgActive={Colient2}
                        align="right"
                        href="http://payrolling-tech.webhop.org:9362/mn/index"
                    />
                </div>
            </section>
            <Foter />
        </>
    )
}
