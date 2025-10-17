import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";
// Opcional: si usas react-helmet-async descomenta las 2 líneas siguientes
// import { Helmet } from "react-helmet-async";
// const SEO = { title: "Reclutamiento de personal en México: estrategias efectivas para empresas", description: "Descubre las mejores prácticas de reclutamiento en México para atraer talento calificado y optimizar procesos.", keywords: "reclutamiento de personal México, selección de talento, RRHH México, employer branding", secondaryKeywords: "reclutamiento para pymes, agencia de reclutamiento México, selección de personal eficiente, contratar empleados rápido, headhunting tecnológico, reclutamiento empresarial, empresas de reclutamiento en México, servicios de reclutamiento y selección, reclutamiento y contratación de personal, agencia de talento humano, soluciones de recursos humanos para pymes, reclutamiento masivo México, reclutamiento por competencias, procesos de selección automatizados, mejores prácticas en reclutamiento, software para recursos humanos, rh, top estrategias de reclutamiento, claves para retener y atraer talento, profesionalizar tu reclutamiento, software de RRHH, automatización de recursos humanos, HR Tech México, transformación digital RH, analítica de personal" };

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
                                    alt="Proceso de reclutamiento profesional en México"
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
                                    Blog <span className="opacity-60">›</span> Reclutamiento
                                </p>

                                <h1
                                    className="text-cardeno font-extrabold leading-tight text-center md:text-left
                  text-4xl sm:text-5xl md:text-6xl text-balance"
                                >
                                    Reclutamiento de personal en México:
                                    <br className="hidden md:block" />
                                    estrategias efectivas
                                    <br className="hidden md:block" />
                                    para empresas
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    En México, sectores como manufactura, tecnología, salud y servicios financieros compiten por talento
                                    calificado. Con perfiles especializados escasos, las empresas que mantienen procesos tradicionales
                                    enfrentan más vacantes sin cubrir.
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
                            El reclutamiento profesional aplica estrategias, tecnología y métricas para optimizar todo el ciclo de
                            contratación: desde la atracción hasta la integración. Un enfoque moderno combina marca empleadora,
                            tecnología (ATS) y analítica de datos para procesos más ágiles, precisos y centrados en el candidato.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            En Payrolling Tech impulsamos la profesionalización del área de RRHH para que el reclutamiento pase de
                            ser operativo a estratégico, alineado a los objetivos del negocio.
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
                                ¿Qué es y cómo funciona
                                <br /> el reclutamiento profesional?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Consiste en aplicar estrategias estructuradas, herramientas tecnológicas y medición constante para
                                    atraer, evaluar y contratar al mejor talento. En contextos competitivos, un proceso profesional:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Integra una propuesta de valor clara (EVP) y una marca empleadora sólida.</li>
                                    <li>Utiliza un sistema de seguimiento de candidatos (ATS) para centralizar etapas y comunicaciones.</li>
                                    <li>Emplea analítica para optimizar conversión, tiempos y calidad de contratación.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 2 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios de profesionalizar
                                <br /> tu proceso de reclutamiento
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Mayor tasa de aceptación y retención de candidatos.</li>
                                    <li>Ahorro de tiempo y costos gracias a la automatización.</li>
                                    <li>Mejor experiencia del candidato y reputación de marca.</li>
                                    <li>Decisiones más objetivas mediante evaluaciones estandarizadas.</li>
                                    <li>Cumplimiento normativo y trazabilidad completa del proceso.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Además, ofrecer flexibilidad, beneficios y un EVP claro fortalece el employer branding y te vuelve más
                                    competitivo frente al talento escaso.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en
                                <br /> los procesos de reclutamiento
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Publicar vacantes sin estrategia ni diferenciador de marca.</li>
                                    <li>Depender de un solo canal (p. ej., OCC o Indeed).</li>
                                    <li>No medir KPIs como tiempo o costo de contratación.</li>
                                    <li>Procesos manuales y desorganizados, sin ATS.</li>
                                    <li>Entrevistas sin estructura ni criterios claros (más sesgos).</li>
                                    <li>Sin seguimiento post contratación, elevando la rotación temprana.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estos errores degradan la calidad de contratación y afectan productividad y clima organizacional.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Soluciones Payrolling Tech */}
                        <section id="soluciones" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Cómo Payrolling Tech
                                <br /> soluciona estos desafíos?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>ATS integrado: vacantes, CVs, evaluaciones y entrevistas centralizadas.</li>
                                    <li>Automatización de filtros con preguntas knock-out y recordatorios.</li>
                                    <li>Evaluaciones psicométricas y técnicas alineadas al perfil.</li>
                                    <li>Medición de KPIs: time-to-hire, cost-per-hire y quality-of-hire.</li>
                                    <li>Integración con nómina e IMSS/SAT para alta inmediata.</li>
                                    <li>Consultoría en employer branding, EVP y cultura organizacional.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Transformamos RRHH de una función operativa a estratégica, basada en datos, procesos y experiencia del candidato.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar la palabra "Conclusión" en el índice) */}
                        <section id="estrategico" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Del reclutamiento operativo
                                <br /> al estratégico
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Profesionalizar el reclutamiento implica más que publicar vacantes: requiere estrategia, cultura,
                                    procesos y tecnología. Las empresas que miden, automatizan y fortalecen su marca empleadora atraen y
                                    retienen talento con una ventaja competitiva sostenible.
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
                                        ¿Qué es y cómo funciona el reclutamiento profesional?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios de profesionalizar tu proceso de reclutamiento
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en los procesos de reclutamiento
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cómo Payrolling Tech soluciona estos desafíos
                                    </a>
                                    <a href="#estrategico" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Del reclutamiento operativo al estratégico
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
