import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";

export default function Beneficios1() {
    return (
        <>
            <Headers variant="dark" />
            {/* HERO */}
            <section className=" pt-8 md:pt-12 pb-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-4 md:mb-6">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-cardeno font-semibold hover:underline underline-offset-4"
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
                            Volver al blog
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        {/* Imagen principal */}
                        <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-cardeno/10 bg-blanco">
                            <div className="aspect-[4/3] md:aspect-[16/10] w-full">
                                <img
                                    src={Img2}
                                    alt="Asesor saludando durante videollamada"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        {/* Texto principal */}
                        <div className="lg:col-span-6">
                            <p className="text-cardeno font-bold text-base md:text-lg text-center md:text-left mb-2">
                                Blog <span className="opacity-60">›</span> Beneficios
                            </p>

                            <h1 className="text-cardeno font-extrabold leading-tight text-center md:text-left text-4xl sm:text-5xl md:text-6xl text-balance">
                                Cómo atraer talento: <br />
                                Estrategias para <br />
                                construir equipos <br />
                                sólidos y exitosos
                            </h1>

                            <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                En este artículo exploramos las claves para crear equipos de alto rendimiento, fortalecer tu cultura
                                organizacional y convertir tu empresa en un imán de talento.
                            </p>

                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-[15px]">
                                <div className="text-center md:text-left">
                                    <span className="font-semibold">Publicado:</span> 19 de septiembre / 2025
                                </div>
                                <div className="text-center md:text-left">
                                    <span className="font-semibold">Actualizado:</span> 25 de septiembre / 2025
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
                            En un <span className="font-semibold">entorno laboral</span> cada vez <span className="font-semibold">más
                                competitivo</span>, atraer y retener talento se ha convertido en uno de los mayores desafíos para las empresas.
                            Ya no se trata solo de llenar vacantes, sino de <span className="font-semibold">construir equipos comprometidos,
                                motivados y alineados</span> con los objetivos del negocio.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            En Payrolling Tech entendemos que el talento es el motor que impulsa el crecimiento. Por eso desarrollamos estrategias
                            integrales que van más allá de la contratación tradicional y abarcan todo el ciclo de vida del colaborador.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO + ÍNDICE */}
            <section className="pb-12 md:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
                    {/* Artículo */}
                    <article className="lg:col-span-8 space-y-12">
                        <section id="propuesta-valor" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Construye una propuesta de <br /> valor atractiva para el talento
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Hoy las personas buscan <span className="font-semibold">algo más que un salario competitivo</span>:
                                    quieren propósito, flexibilidad y oportunidades reales de crecimiento. Tu propuesta de valor como empleador
                                    debe reflejar quién eres como empresa y qué te hace diferente.
                                </p>

                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Comunica tu cultura organizacional:</span> muestra lo que hace única a tu empresa.</li>
                                    <li><span className="font-semibold">Ofrece desarrollo profesional:</span> programas de capacitación, mentorías o planes de carrera.</li>
                                    <li><span className="font-semibold">Promueve el bienestar y la flexibilidad:</span> modelos híbridos, días personales y beneficios a la medida.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    En Payrolling Tech acompañamos a las empresas a diseñar propuestas de valor coherentes con su cultura,
                                    potenciando su reputación de marca empleadora y atrayendo perfiles que realmente encajan.
                                </p>
                            </div>
                        </section>

                        <section id="digitaliza-reclutamiento" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Digitaliza y optimiza tu <br /> proceso de reclutamiento
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La tecnología es un aliado fundamental en la <span className="font-semibold">búsqueda de talento</span>.
                                    Desde sistemas de seguimiento de candidatos hasta analítica avanzada, digitalizar el proceso te permite:
                                </p>

                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Analizar métricas clave</span> como rotación o desempeño de contrataciones.</li>
                                    <li><span className="font-semibold">Garantizar procesos más justos, ágiles y transparentes.</span></li>
                                    <li><span className="font-semibold">Automatizar tareas repetitivas</span> y enfocarte en la experiencia del candidato.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    Con un enfoque data-driven, logramos que el reclutamiento se convierta en una herramienta estratégica.
                                </p>
                            </div>
                        </section>

                        <section id="retener" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Retener es tan importante <br /> como atraer
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    De nada sirve atraer talento si no se logra mantenerlo motivado. Un equipo sólido se construye con
                                    confianza, reconocimiento y oportunidades reales de crecimiento.
                                </p>

                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Diseñar planes de compensación</span> flexibles y beneficios personalizados.</li>
                                    <li><span className="font-semibold">Fomentar la retroalimentación</span> constante y el liderazgo positivo.</li>
                                    <li><span className="font-semibold">Medir la satisfacción</span> del personal y actuar con base en los resultados.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    Nuestro servicio de gestión de talento y nómina inteligente permite a las empresas enfocarse en su gente,
                                    mientras nosotros nos encargamos de la administración y cumplimiento.
                                </p>

                                <hr className="my-6 border-t-2 border-cardeno/40" />

                                <p className="text-center md:text-justify leading-relaxed">
                                    Atraer talento hoy no se trata solo de contratar: se trata de crear una experiencia laboral completa.
                                    Las empresas que invierten en su cultura, digitalización y bienestar interno son las que logran construir
                                    equipos fuertes, comprometidos y exitosos.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    En Payrolling Tech te ayudamos a lograrlo. Descubre cómo nuestras soluciones pueden impulsar tu estrategia
                                    de atracción y gestión de talento.
                                </p>

                                <div className="mt-3">
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
                            </div>
                        </section>
                    </article>

                    {/* Índice lateral (desktop) */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24">
                            {/* Tarjeta del índice (mantenemos la misma “tablita”) */}
                            <div className="rounded-2xl border-2 border-noche/20 bg-blanco overflow-hidden">
                                {/* Encabezado de ancho completo */}
                                <div
                                    id="indice-titulo"
                                    className="w-full bg-mango text-noche font-extrabold px-5 py-3 md:py-3.5 leading-none rounded-t-2xl"
                                >
                                    Índice
                                </div>

                                {/* Navegación (igual que tus secciones) */}
                                <nav
                                    className="divide-y divide-noche/20 border-t-2 border-noche/20"
                                    aria-labelledby="indice-titulo"
                                >
                                    <a href="#propuesta-valor" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Construye una propuesta de valor atractiva para el talento
                                    </a>
                                    <a href="#digitaliza-reclutamiento" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Digitaliza y optimiza tu proceso de reclutamiento
                                    </a>
                                    <a href="#retener" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Retener es tan importante como atraer
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
