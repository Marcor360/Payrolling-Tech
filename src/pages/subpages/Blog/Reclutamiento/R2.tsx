import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/2_2.webp";
// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Selección de personal eficiente: cómo elegir al candidato ideal en México",
//   description: "Optimiza tu proceso de selección con entrevistas estructuradas, evaluaciones y decisiones basadas en datos.",
//   keywords: "selección de personal México, entrevistas estructuradas, pruebas psicométricas, onboarding",
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
                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch lg:minh-screen lg:min-h-screen">
                        {/* Imagen primero en mobile */}
                        <div className="lg:col-span-6">
                            <div
                                className="relative overflow-hidden rounded-2xl border border-cardeno/1
                h-[50vh] sm:h-[60vh] lg:h-full"
                            >
                                {/* Imagen llena el contenedor */}
                                <img
                                    src={Img2}
                                    alt="Selección de personal eficiente en México"
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
                                    Blog <span className="opacity-60">›</span> Selección
                                </p>

                                <h1
                                    className="text-cardeno font-extrabold leading-tight text-center md:text-left
                  text-4xl sm:text-5xl md:text-6xl text-balance"
                                >
                                    Selección de personal eficiente:
                                    <br className="hidden md:block" />
                                    cómo elegir al candidato
                                    <br className="hidden md:block" />
                                    ideal en México
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    Una mala contratación puede costar hasta el 30% del salario anual del puesto. Más allá del costo,
                                    afecta productividad, cultura y moral del equipo. La selección efectiva define el perfil ideal,
                                    estructura el proceso y evalúa objetivamente cada etapa para alinear talento con valores y objetivos
                                    del negocio.
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
                            La selección efectiva identifica al candidato que mejor se alinea con las necesidades del negocio y reduce
                            la rotación temprana. Se basa en un perfil claro, un proceso definido y evaluaciones objetivas en cada etapa.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            En Payrolling Tech combinamos metodología, tecnología y evaluación experta para decisiones de selección
                            más confiables y sostenibles.
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
                                <br /> la selección efectiva de personal?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Su propósito es identificar al candidato que mejor se alinea con los valores, objetivos y contexto del
                                    puesto, reduciendo la rotación temprana y elevando el desempeño del equipo.
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Definir el perfil ideal con competencias, objetivos e indicadores de éxito.</li>
                                    <li>Estructurar un proceso claro con etapas, responsables y criterios objetivos.</li>
                                    <li>Evaluar cada etapa con evidencias y herramientas confiables.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 2 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios de una
                                <br /> selección profesional
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Menor rotación temprana y mayor retención a largo plazo.</li>
                                    <li>Contrataciones más acertadas (técnicas y blandas) y de mayor desempeño.</li>
                                    <li>Ahorro de tiempo y recursos al evitar recontrataciones.</li>
                                    <li>Mejor clima laboral por integraciones más armónicas.</li>
                                    <li>Reputación sólida de marca empleadora gracias a una experiencia positiva.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    En un mercado competitivo, estas ventajas diferencian a las empresas que crecen de las que se estancan.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en
                                <br /> la selección de personal
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Perfil de puesto difuso, sin indicadores de éxito ni contexto del área.</li>
                                    <li>Procesos improvisados, sin etapas ni responsables definidos.</li>
                                    <li>Entrevistas sin estructura ni objetividad (sesgos en la decisión).</li>
                                    <li>Pruebas sin interpretación profesional o sin relación con el puesto.</li>
                                    <li>Ofertas tardías o poco claras que hacen perder al mejor candidato.</li>
                                    <li>Ausencia de onboarding, retrasando la productividad inicial.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estos errores encarecen el proceso, dañan la marca empleadora y erosionan la confianza interna.
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
                                    <li>Definición del perfil con competencias, objetivos e indicadores de éxito.</li>
                                    <li>Proceso estandarizado con plantillas, checklists y etapas claras.</li>
                                    <li>Entrevistas estructuradas con guías situacionales y rúbricas comparables.</li>
                                    <li>Evaluaciones psicométricas y técnicas aplicadas e interpretadas por expertos.</li>
                                    <li>Decisión basada en <em>scoring</em> ponderado y oferta total (sueldo, beneficios, plan de carrera).</li>
                                    <li>Onboarding guiado 30-60-90 para acelerar productividad y compromiso.</li>
                                    <li>Métricas de desempeño: éxito en periodo de prueba y satisfacción del hiring manager.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Todo bajo un enfoque de datos + experiencia humana para contrataciones estratégicas y sostenibles.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="evidencia-proposito" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Selección con evidencia y propósito
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La selección basada en evidencia, tecnología y criterio experto transforma cómo construyes equipos:
                                    no es solo cubrir vacantes, es crear relaciones laborales duraderas y alineadas a tu cultura.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Con procesos estructurados, herramientas adecuadas y asesoría experta, cada contratación se vuelve
                                    una decisión estratégica de crecimiento.
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
                                        ¿Qué es y cómo funciona la selección efectiva de personal?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios de una selección profesional
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en la selección de personal
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cómo Payrolling Tech soluciona estos desafíos
                                    </a>
                                    <a href="#evidencia-proposito" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Selección con evidencia y propósito
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
