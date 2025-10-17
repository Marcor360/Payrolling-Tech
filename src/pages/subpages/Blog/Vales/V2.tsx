import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/5_1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Bonos e incentivos corporativos: cómo estructurarlos con vales",
//   description: "Estructura bonos efectivos usando vales para alinear desempeño, motivación y control presupuestal.",
//   keywords: "bonos con vales México, incentivos corporativos, desempeño, productividad",
//   secondaryKeywords:
//     "programas de beneficios para empleados, vales de gasolina para empresas, beneficios laborales deducibles, incentivos para retención de personal, recompensas para empleados, beneficios fiscales para empresas, programas de motivación laboral, cómo mejorar el clima laboral, estrategias de fidelización laboral, salario emocional en México"
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
                                    alt="Bonos e incentivos corporativos estructurados con vales"
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
                                    Blog <span className="opacity-60">›</span> Incentivos
                                </p>

                                <h1
                                    className="text-cardeno font-extrabold leading-tight text-center md:text-left
                  text-4xl sm:text-5xl md:text-6xl text-balance"
                                >
                                    Bonos e incentivos corporativos:
                                    <br className="hidden md:block" />
                                    cómo estructurarlos con vales
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    Los bonos impulsan resultados y motivación. Combinados con vales, permiten entrega ágil, mejor
                                    experiencia para el colaborador y trazabilidad financiera—con reglas claras y ventanas de medición
                                    definidas.
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
                            Los bonos corporativos son incentivos económicos para reforzar la cultura de desempeño. Al combinarlos con
                            vales (físicos o digitales) se incrementa la rapidez de entrega, la percepción de valor y el control.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            Tipos frecuentes: individual, por equipo/proyecto, puntualidad/asistencia, calidad y referidos. Cada uno
                            debe tener reglas transparentes, umbrales y periodos de medición claros.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO + ÍNDICE */}
            <section className="pb-12 md:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
                    {/* Artículo */}
                    <article className="lg:col-span-8 space-y-12">

                        {/* 1 - Qué son y cómo funcionan */}
                        <section id="que-son" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Qué son y cómo funcionan
                                <br /> los bonos con vales?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Buscan impulsar resultados y motivación; con vales, la entrega es ágil, la experiencia del colaborador
                                    mejora y la trazabilidad es total.
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Individual:</span> desempeño personal y metas.</li>
                                    <li><span className="font-semibold">Equipo o proyecto:</span> colaboración y resultados colectivos.</li>
                                    <li><span className="font-semibold">Puntualidad o asistencia:</span> hábitos de cumplimiento.</li>
                                    <li><span className="font-semibold">Calidad:</span> estándares y resultados.</li>
                                    <li><span className="font-semibold">Referidos:</span> atracción de talento.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Exige reglas claras, ventanas de medición y umbrales de elegibilidad transparentes.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios de estructurar
                                <br /> bonos con vales
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-left leading-relaxed font-semibold">Para el colaborador:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Reconocimiento oportuno y tangible.</li>
                                    <li>Mayor percepción de valor del incentivo.</li>
                                    <li>Flexibilidad y facilidad de uso (especialmente con vales digitales).</li>
                                </ul>

                                <p className="text-center md:text-left leading-relaxed font-semibold mt-4">Para la empresa:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Refuerza cultura de desempeño y resultados esperados.</li>
                                    <li>Agiliza la operación y evita entregas manuales o retrasos.</li>
                                    <li>Trazabilidad y control financiero con evidencia para auditoría.</li>
                                    <li>Medición de impacto en ventas, productividad, NPS, ausentismo y rotación.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    Así, los bonos dejan de ser gasto para convertirse en herramienta estratégica de talento.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en
                                <br /> bonos e incentivos
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Fórmulas complicadas o indicadores fuera del control del colaborador.</li>
                                    <li>Falta de políticas y aprobación formal (menos transparencia y auditoría).</li>
                                    <li>Entrega tardía o manual que reduce el efecto motivacional.</li>
                                    <li>No integrar con HRIS o nómina (errores/duplicidades).</li>
                                    <li>Medición insuficiente sin correlacionar con resultados del negocio ni rotación.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estos errores afectan motivación y percepción de justicia interna.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Soluciones Payrolling-Tech */}
                        <section id="soluciones" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Cómo Payrolling-Tech
                                <br /> ayuda a estructurar bonos con vales?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Diseño de bonos alineados a KPIs, fórmulas simples y topes definidos.</li>
                                    <li>Entrega mediante vales físicos o digitales para rapidez, control y percepción de valor.</li>
                                    <li>Gobernanza y automatización: políticas de aprobación, evidencia digital e integración HRIS/nómina.</li>
                                    <li>Medición continua: correlación con ventas, productividad, NPS, ausentismo y rotación.</li>
                                    <li>Iteración trimestral para ajustar montos/categorías según resultados y feedback.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Aseguramos incentivos transparentes, oportunos y estratégicos.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="cultura-desempeno" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Cultura de desempeño y control financiero
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La mezcla de bonos y vales alinea desempeño con reconocimiento inmediato manteniendo control y trazabilidad.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Un programa bien estructurado motiva al personal, optimiza la administración y fortalece la marca empleadora.
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
                                    <a href="#que-son" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        ¿Qué son y cómo funcionan los bonos con vales?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios de estructurar bonos con vales
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en bonos e incentivos
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cómo Payrolling-Tech ayuda a estructurar bonos con vales
                                    </a>
                                    <a href="#cultura-desempeno" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cultura de desempeño y control financiero
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
