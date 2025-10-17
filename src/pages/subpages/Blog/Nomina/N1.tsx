import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/7_1.webp";
// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Beneficios para PYMEs al usar maquila de nómina en México",
//   description: "Ahorra tiempo, costos y riesgos delegando la nómina con especialistas.",
//   keywords: "maquila nómina PYMEs México, outsourcing nómina PYME, ventajas maquila",
//   secondaryKeywords:
//     "servicios de nómina para empresas, gestión de nómina automatizada, cálculo de nómina para pymes, externalización de nómina, timbrado de nómina CFDI 4.0, nómina electrónica SAT, consultoría de nómina, errores comunes en nómina, mejores prácticas en administración de nómina, cumplimiento fiscal en nómina"
// };

export default function Beneficios1() {
    return (
        <>
            {/* Opcional SEO:
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={`${SEO.keywords}, ${SEO.secondaryKeywords}`} />
      </Helmet> */}

            <Headers variant="dark" />

            {/* HERO */}
            <section className="py-0">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch lg:min-h-screen">
                        {/* Imagen primero en mobile */}
                        <div className="lg:col-span-6">
                            <div
                                className="relative overflow-hidden rounded-2xl border border-cardeno/1
                h-[50vh] sm:h-[60vh] lg:h-full"
                            >
                                {/* Imagen llena el contenedor */}
                                <img
                                    src={Img2}
                                    alt="Beneficios para PYMEs al usar maquila de nómina en México"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    decoding="async"
                                />

                                {/* Botón volver sobre la imagen (blanco) */}
                                <Link
                                    to="/blog"
                                    className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 inline-flex items-center gap-2
                  rounded-full bg-blanco/50 text-cardeno font-semibold px-3.5 py-2 shadow-sm
                  hover:bg-blanco focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                                    aria-label="Volver al blog"
                                >
                                    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                                        <path
                                            d="M15 18l-6-6 6-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="hidden xs:inline sm:inline">Volver al blog</span>
                                </Link>
                            </div>
                        </div>

                        {/* Texto principal */}
                        <div className="lg:col-span-6 flex items-center">
                            <div className="w-full">
                                <p className="text-cardeno font-bold text-base md:text-lg text-center md:text-left mb-2">
                                    Blog <span className="opacity-60">›</span> Nómina
                                </p>

                                <h1
                                    className="text-cardeno font-extrabold leading-tight text-center md:text-left
                  text-4xl sm:text-5xl md:text-6xl text-balance"
                                >
                                    Beneficios para PYMEs al usar
                                    <br className="hidden md:block" />
                                    maquila de nómina en México
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    La maquila de nómina permite delegar cálculo, timbrado y administración a un proveedor experto. Combina
                                    tecnología, cumplimiento fiscal y soporte operativo para reducir errores y cargas administrativas.
                                </p>

                                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-[15px]">
                                    <div className="text-center md:text-left">
                                        <span className="font-semibold">Publicado:</span> 17 de octubre / 2025
                                    </div>
                                    <div className="text-center md:text-left">
                                        <span className="font-semibold">Actualizado:</span> 17 de octubre / 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-6 md:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="md:mx-auto md:max-w-4xl text-noche space-y-4">
                        <p className="text-center md:text-justify leading-relaxed">
                            En México, muchas PYMEs enfrentan fechas críticas de pago, cambios frecuentes en leyes y alta rotación. Con
                            maquila de nómina, el proceso se opera en plataformas seguras con validaciones ante SAT, IMSS e INFONAVIT y
                            reportes listos para auditoría.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO + ÍNDICE */}
            <section className="pb-12 md:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
                    {/* Artículo */}
                    <article className="lg:col-span-8 space-y-12">

                        {/* 1 - Qué es y cómo funciona */}
                        <section id="que-es" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Qué es la maquila de nómina y cómo funciona?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Servicio de tercerización especializada para delegar cálculo, timbrado y administración de nómina a un
                                    proveedor experto. Reduce errores y carga administrativa combinando tecnología, cumplimiento y soporte.
                                </p>

                                <p className="text-center md:text-left leading-relaxed font-semibold">Retos frecuentes de PYMEs en México:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Fechas críticas de pago y dispersión bancaria.</li>
                                    <li>Cambios constantes en leyes laborales y fiscales.</li>
                                    <li>Alta rotación o dependencia de personal clave.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    Con maquila, la nómina se procesa con validaciones automáticas (SAT, IMSS, INFONAVIT) y reportes listos
                                    para auditoría.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Beneficios principales */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios principales para las PYMEs
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-3 text-center md:text-left">
                                    <li>
                                        <span className="font-semibold">Orden y previsibilidad:</span> menos variabilidad y errores en cálculos,
                                        timbrado y pagos; cumplimiento 100% fiscal y laboral.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Control de costos:</span> evita multas y reprocesos; convierte gastos
                                        variables en costos fijos predecibles.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Valor estratégico para dirección:</span> reportes y tableros, proyecciones
                                        de costos y soporte en inspecciones o auditorías.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Escalabilidad:</span> crecer o ajustar headcount sin rehacer procesos; altas,
                                        bajas e incidencias por flujos estandarizados.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Cumplimiento automatizado:</span> actualización ante reformas del SAT, LFT,
                                        IMSS y CFDI 4.0 para timbrados correctos y retenciones precisas.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 3 - Errores comunes internos */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en la gestión interna de nómina
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Dependencia de personas clave sin respaldos ni procesos documentados.</li>
                                    <li>Errores de cálculo en ISR, IMSS o INFONAVIT.</li>
                                    <li>Timbrados incorrectos o fuera de tiempo (multas).</li>
                                    <li>Cierres mensuales improvisados y sobrecarga de horas extra.</li>
                                    <li>Falta de integración tecnológica (sin datos en tiempo real).</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estos errores afectan la operación, la confianza del colaborador y la reputación de la empresa.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Soluciones Payrolling-Tech */}
                        <section id="soluciones" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Cómo Payrolling-Tech optimiza la maquila de nómina?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Implementación en 8 semanas: diagnóstico, limpieza, parametrización, pruebas y salida a producción.</li>
                                    <li>Cumplimiento fiscal y laboral garantizado (SAT, IMSS, INFONAVIT, STPS).</li>
                                    <li>Tableros ejecutivos: costos, headcount, ausentismo y proyecciones.</li>
                                    <li>Automatización de flujos de altas, bajas e incidencias.</li>
                                    <li>Soporte 24/7 con asesoría continua para inspecciones o auditorías.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Resultado: pagos puntuales, cumplimiento total y liberación del foco operativo.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="menos-estres" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Más tiempo para el negocio, menos estrés operativo
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La maquila de nómina libera a las PYMEs de la complejidad fiscal y administrativa, para enfocarse en
                                    ventas, clientes y crecimiento.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    También mejora la experiencia del colaborador con pagos puntuales y precisos, fortaleciendo confianza y compromiso.
                                </p>
                            </div>

                            <div className="mt-6">
                                <Link
                                    to="/beneficios"
                                    className="inline-flex items-center font-semibold text-cardeno hover:underline underline-offset-4"
                                >
                                    Conoce más sobre nuestros servicios
                                    <svg viewBox="0 0 24 24" className="ml-2 size-5 fill-current" aria-hidden="true">
                                        <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                    </svg>
                                </Link>
                            </div>
                        </section>
                    </article>

                    {/* Índice lateral (desktop) */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24">
                            <div className="rounded-2xl border-2 border-noche/20 bg-blanco overflow-hidden">
                                <div
                                    id="indice-titulo"
                                    className="w-full bg-mango text-noche font-extrabold px-5 py-3 md:py-3.5 leading-none rounded-t-2xl"
                                >
                                    Índice
                                </div>
                                <nav className="divide-y divide-noche/20" aria-labelledby="indice-titulo">
                                    <a href="#que-es" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        ¿Qué es la maquila de nómina y cómo funciona?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios principales para las PYMEs
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en la gestión interna de nómina
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        ¿Cómo Payrolling-Tech optimiza la maquila de nómina?
                                    </a>
                                    <a href="#menos-estres" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Más tiempo para el negocio, menos estrés operativo
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </>
    );
}
