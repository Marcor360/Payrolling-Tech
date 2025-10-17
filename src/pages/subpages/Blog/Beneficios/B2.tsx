import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Beneficios del seguro de vida para empleados y retención de talento",
//   description: "Convierte el seguro de vida en un diferenciador de atracción y permanencia.",
//   keywords: "beneficios seguro de vida empleados, retención de talento, cultura organizacional",
//   secondaryKeywords:
//     "vales de despensa exentos ISR, beneficios para empleados, incentivos laborales México, compensación flexible, productividad y bienestar laboral"
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
                                    alt="Seguro de vida corporativo como beneficio para empleados"
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
                                    Blog <span className="opacity-60">›</span> Beneficios
                                </p>

                                <h1
                                    className="text-cardeno font-extrabold leading-tight text-center md:text-left
                  text-4xl sm:text-5xl md:text-6xl text-balance"
                                >
                                    Beneficios del seguro de vida
                                    <br className="hidden md:block" />
                                    para empleados y retención de talento
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    En un entorno competitivo, el seguro de vida corporativo fortalece la confianza y demuestra compromiso
                                    con el bienestar del equipo. Más allá del valor económico, es una señal de empatía y responsabilidad
                                    que impacta directamente en la retención de talento.
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
                            Los colaboradores valoran seguridad, estabilidad y respaldo real. El seguro de vida corporativo se ha
                            convertido en un beneficio clave para fortalecer la confianza. Es una pieza estratégica del EVP que
                            contribuye a atraer y mantener talento valioso.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO + ÍNDICE */}
            <section className="pb-12 md:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
                    {/* Artículo */}
                    <article className="lg:col-span-8 space-y-12">

                        {/* 1 - Comparativa */}
                        <section id="comparativa" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Comparativa con otros beneficios corporativos
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Frente a vales, bonos o capacitaciones, el seguro de vida destaca por alto impacto emocional y costo
                                    relativo predecible. Ofrece tranquilidad duradera para el colaborador y su familia.
                                </p>

                                <p className="text-center md:text-left leading-relaxed font-semibold">Ventajas clave:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Percepción de valor alta:</span> se asocia a estabilidad y cuidado genuino.</li>
                                    <li><span className="font-semibold">Costo predecible:</span> primas grupales accesibles frente a beneficios equivalentes.</li>
                                    <li><span className="font-semibold">Amplia cobertura:</span> protege incluso fuera del entorno laboral.</li>
                                    <li><span className="font-semibold">Compatibilidad:</span> convive con otros programas de incentivos y bienestar.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    Por ello, cada vez más empresas lo integran como parte esencial de su propuesta de valor al empleado.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Estrategia de implementación */}
                        <section id="estrategia" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Estrategia de implementación
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Diseñar un programa eficiente implica segmentar y personalizar dentro de la organización:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Sumas aseguradas diferenciadas por nivel o tipo de puesto.</li>
                                    <li>Coberturas opcionales: invalidez, accidentes, enfermedades graves.</li>
                                    <li>Aportaciones voluntarias del colaborador para ampliar cobertura.</li>
                                    <li>Actualización anual según salarios, antigüedad o inflación.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Combina equidad y flexibilidad para ajustarse a la estructura de la empresa y la realidad económica de cada equipo.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Comunicación interna */}
                        <section id="comunicacion" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Comunicación interna efectiva
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Un seguro solo impacta si los empleados lo conocen, entienden y valoran. Comunica de forma clara, humana y continua:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Lanzamientos internos con apoyo de líderes.</li>
                                    <li>Sesiones informativas presenciales o virtuales.</li>
                                    <li>Guías, infografías y FAQs sobre coberturas y procesos.</li>
                                    <li>Explicación simple de reclamaciones y canales de acompañamiento.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    La transparencia y la empatía fortalecen la confianza y elevan la percepción del beneficio.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Medición del impacto */}
                        <section id="medicion" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Medición del impacto
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Mide el efecto del seguro en retención y satisfacción para justificar inversión y mejorar su gestión:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Encuestas de satisfacción y conocimiento del beneficio.</li>
                                    <li>Análisis de rotación antes/después de implementarlo.</li>
                                    <li>Seguimiento de uso o reclamaciones (si aplica).</li>
                                    <li>Impacto en marca empleadora (reviews, NPS, Glassdoor).</li>
                                    <li>Comparativa de permanencia entre cubiertos vs. no cubiertos.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Usa los resultados en la renovación anual para ajustar coberturas, sumas aseguradas o comunicación.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="cultura-pertenencia" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Cultura, estabilidad y pertenencia
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    El seguro de vida corporativo es más que una póliza: simboliza cultura organizacional y cuidado mutuo.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Al integrarlo al bienestar integral, tu empresa protege a su gente y fortalece su reputación y
                                    capacidad de retener talento valioso.
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
                                    <a href="#comparativa" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Comparativa con otros beneficios corporativos
                                    </a>
                                    <a href="#estrategia" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Estrategia de implementación
                                    </a>
                                    <a href="#comunicacion" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Comunicación interna efectiva
                                    </a>
                                    <a href="#medicion" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Medición del impacto
                                    </a>
                                    <a href="#cultura-pertenencia" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cultura, estabilidad y pertenencia
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
