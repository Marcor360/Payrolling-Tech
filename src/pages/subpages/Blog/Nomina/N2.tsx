import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Tendencias tecnológicas en maquila de nómina en México 2025",
//   description: "Innovaciones para una nómina más segura, automatizada y con analítica accionable.",
//   keywords: "tendencias nómina México, nómina en la nube, automatización, IA nómina",
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
                                    alt="Tendencias tecnológicas en maquila de nómina en México 2025"
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
                                    Blog <span className="opacity-60">›</span> Tendencias
                                </p>

                                <h1
                                    className="text-cardeno font-extrabold leading-tight text-center md:text-left
                  text-4xl sm:text-5xl md:text-6xl text-balance"
                                >
                                    Tendencias tecnológicas en
                                    <br className="hidden md:block" />
                                    maquila de nómina en México 2025
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    La maquila de nómina evoluciona con nube, automatización e IA. Estas tecnologías elevan precisión y
                                    trazabilidad, reducen riesgos fiscales y fortalecen la experiencia del empleado.
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
                            La combinación de nube, automatización e inteligencia artificial redefine cómo las empresas calculan, pagan
                            y auditan la nómina en México. Más precisión, mejor trazabilidad y menos riesgo fiscal.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            Estas innovaciones también mejoran la experiencia del empleado al ofrecer consultas, recibos y soporte más
                            rápidos y confiables.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO + ÍNDICE */}
            <section className="pb-12 md:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
                    {/* Artículo */}
                    <article className="lg:col-span-8 space-y-12">

                        {/* 1 - Nube y APIs */}
                        <section id="nube-apis" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Nube y APIs: integración sin fricciones
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Las plataformas en la nube conectan nómina con ERP, HRIS y contabilidad mediante APIs y webhooks,
                                    eliminando archivos planos e impulsando la sincronización en tiempo real de:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Altas, bajas e incidencias.</li>
                                    <li>Catálogos maestros (empleados, centros de costo).</li>
                                    <li>Recibos timbrados y dispersión bancaria.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Resultado: procesos ágiles, menos duplicidad de datos y visibilidad operativa total.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Automatización inteligente */}
                        <section id="automatizacion" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Automatización inteligente
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    RPA y flujos preconfigurados validan incidencias, ejecutan cálculos masivos y timbran recibos de forma
                                    automática, reduciendo errores y tiempo de ciclo:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Validación de incidencias y variables.</li>
                                    <li>Conciliación de percepciones y deducciones.</li>
                                    <li>Reportes fiscales y dispersión bancaria.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    PYMEs que migran a este esquema pueden reducir hasta un 40% los tiempos de cierre de nómina.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Seguridad y cumplimiento */}
                        <section id="seguridad" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Seguridad y cumplimiento
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Con la digitalización, proteger la información es crítico. Proveedores líderes implementan:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Cifrado AES-256 en tránsito y reposo.</li>
                                    <li>Controles de acceso por roles (RBAC).</li>
                                    <li>Bitácoras de auditoría, trazabilidad y segregación de ambientes.</li>
                                    <li>Pruebas de penetración y planes de recuperación ante desastres.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Cumplimiento con LFPDPPP y estándares como ISO 27001 para garantizar integridad y confidencialidad.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Analítica y predicción */}
                        <section id="analitica" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Analítica y predicción
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Las nuevas plataformas convierten la nómina en inteligencia accionable:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Dashboards de costos, headcount, ausentismo y rotación.</li>
                                    <li>Modelos predictivos para anticipar variaciones presupuestales.</li>
                                    <li>Simuladores para planeación de incrementos o bonos.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    De centro de costo a fuente estratégica de decisiones.
                                </p>
                            </div>
                        </section>

                        {/* 5 - IA y soporte conversacional */}
                        <section id="ia-conversacional" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                2025: IA y soporte conversacional
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La maquila de 2025 integra asistentes conversacionales para consultas de recibos, vacaciones,
                                    incidencias y políticas, además de recomendaciones proactivas de ajustes y detección de errores.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Esta capa de IA ayuda a prever impactos fiscales ante cambios del SAT y STPS, dando agilidad a las PYMEs.
                                </p>

                                {/* Cierre dentro de la última sección */}
                                <p className="text-center md:text-justify leading-relaxed">
                                    Invertir en tecnología de nómina es apostar por continuidad operativa, cumplimiento y satisfacción del
                                    empleado. Las empresas que digitalicen su nómina reducirán errores y costos, construyendo una cultura de
                                    precisión, confianza y eficiencia.
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
                                    <a href="#nube-apis" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Nube y APIs: integración sin fricciones
                                    </a>
                                    <a href="#automatizacion" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Automatización inteligente
                                    </a>
                                    <a href="#seguridad" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Seguridad y cumplimiento
                                    </a>
                                    <a href="#analitica" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Analítica y predicción
                                    </a>
                                    <a href="#ia-conversacional" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        2025: IA y soporte conversacional
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
