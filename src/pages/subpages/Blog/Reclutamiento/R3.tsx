import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Reclutamiento digital en México 2025: tendencias y herramientas clave",
//   description: "Conoce las tecnologías y buenas prácticas que están transformando el reclutamiento en México.",
//   keywords: "reclutamiento digital México, tecnología RRHH, automatización, candidate experience",
//   secondaryKeywords:
//     "reclutamiento para pymes, agencia de reclutamiento México, selección de personal eficiente, contratar empleados rápido, headhunting tecnológico, reclutamiento empresarial, empresas de reclutamiento en México, servicios de reclutamiento y selección, reclutamiento y contratación de personal, agencia de talento humano, soluciones de recursos humanos para pymes, reclutamiento masivo México, reclutamiento por competencias, procesos de selección automatizados, mejores prácticas en reclutamiento, software para recursos humanos, rh, top estrategias de reclutamiento, claves para retener y atraer talento, profesionalizar tu reclutamiento"
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
                                    alt="Tendencias del reclutamiento digital en México 2025"
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
                                    Tendencias del reclutamiento
                                    <br className="hidden md:block" />
                                    digital en México 2025
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    El reclutamiento digital pasó de alternativa a columna vertebral de la atracción de talento.
                                    IA, automatización y analítica permiten contratar más rápido, con menos sesgos y mejor experiencia
                                    para el candidato, integrando bolsas de empleo, redes sociales, ATS y dashboards en cada fase.
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
                            A diferencia del enfoque tradicional, el reclutamiento digital integra plataformas de empleo, redes
                            sociales, sistemas ATS y tableros analíticos para optimizar desde la publicación de vacantes hasta la
                            incorporación del nuevo colaborador.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            En Payrolling Tech acompañamos a PyMEs y empresas en su transición hacia procesos modernos, medibles y
                            centrados en las personas.
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
                                <br /> el reclutamiento digital?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Es la integración de tecnología (IA, automatización, ATS) y analítica para hacer el proceso más ágil,
                                    justo y trazable. Orquesta canales (bolsas, redes, referidos) y centraliza información para decisiones
                                    basadas en datos y mejor experiencia del candidato.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios del
                                <br /> reclutamiento digital
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Procesos más rápidos y automatizados, reduciendo el <em>time-to-hire</em> hasta un 50%.</li>
                                    <li>Mayor precisión en la selección con IA y analítica de compatibilidad.</li>
                                    <li>Mejor experiencia del candidato con comunicación y seguimiento automatizados.</li>
                                    <li>Atracción segmentada mediante campañas en LinkedIn, Meta y TikTok.</li>
                                    <li>Toma de decisiones basada en datos con tableros y métricas.</li>
                                    <li>Cumplimiento LFPDPPP para resguardar datos personales.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estas tendencias ya redefinen cómo compiten las empresas —sobre todo PyMEs— en sectores como tecnología,
                                    manufactura y servicios financieros.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en
                                <br /> el reclutamiento digital
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Usar IA sin supervisión ni validación humana (sesgos involuntarios).</li>
                                    <li>Vacantes no optimizadas para móvil (menos postulaciones).</li>
                                    <li>No medir embudos ni resultados por canal o etapa.</li>
                                    <li>Descuidar la experiencia del candidato (silencios, sin feedback).</li>
                                    <li>Ignorar obligaciones legales de la LFPDPPP.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estos errores dañan la marca empleadora, elevan costos y reducen la calidad del talento.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Soluciones Payrolling Tech */}
                        <section id="soluciones" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Cómo Payrolling Tech
                                <br /> impulsa el reclutamiento digital?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>IA aplicada: compatibilidad, priorización y <em>screening</em> automático de CVs.</li>
                                    <li>Optimización móvil y social: campañas segmentadas por perfil y ubicación (LinkedIn, Meta, TikTok).</li>
                                    <li>Automatización de comunicación: recordatorios, feedback y calendarios integrados.</li>
                                    <li>Tableros analíticos personalizados: embudos, costos y tiempos por etapa.</li>
                                    <li>Cumplimiento integral LFPDPPP: consentimiento, avisos y gestión segura de datos.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Todo centralizado en un ATS que integra desde la publicación hasta la contratación final, asegurando
                                    trazabilidad, control y eficiencia.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="tec-con-proposito" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Tecnología con propósito humano
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    El futuro del reclutamiento en México es digital, pero su éxito depende de adoptar tecnología de forma
                                    ordenada, ética y centrada en las personas.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Cuando las herramientas se combinan con datos precisos y cumplimiento normativo, los procesos se vuelven
                                    más ágiles, justos y efectivos, fortaleciendo la marca empleadora y la competitividad.
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
                                        ¿Qué es y cómo funciona el reclutamiento digital?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios del reclutamiento digital
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en el reclutamiento digital
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cómo Payrolling Tech impulsa el reclutamiento digital
                                    </a>
                                    <a href="#tec-con-proposito" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Tecnología con propósito humano
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
