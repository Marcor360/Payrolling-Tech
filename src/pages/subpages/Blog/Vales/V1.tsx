import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Vales de incentivo para empleados en México: guía legal y fiscal",
//   description: "Implementa vales de incentivo cumpliendo normativa fiscal y laboral en México y maximiza su impacto.",
//   keywords: "vales de incentivo México, bonos empleados, incentivos fiscales, vales de despensa",
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
                                    alt="Vales de incentivo para empleados en México"
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
                                    Vales de incentivo para empleados
                                    <br className="hidden md:block" />
                                    en México: guía legal y fiscal
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    Los vales de incentivo, bien diseñados, elevan satisfacción, productividad y retención sin disparar la
                                    carga salarial—siempre cumpliendo con SAT y LFT. Son una herramienta para reconocer desempeño y fortalecer
                                    la cultura organizacional con control y trazabilidad.
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
                            Los vales de incentivo reconocen el desempeño y motivan al personal. Cuando se diseñan con claridad legal y
                            operativa, mejoran el poder adquisitivo, la experiencia del colaborador y la retención sin incrementar
                            desproporcionadamente el costo salarial.
                        </p>
                        <p className="text-center md:text-justify leading-relaxed">
                            En Payrolling Tech ayudamos a implementar programas de vales con enfoque estratégico y cumplimiento fiscal/laboral.
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
                                <br /> los vales de incentivo?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Son beneficios que reconocen desempeño y fortalecen cultura. Bien estructurados, elevan satisfacción,
                                    productividad y retención sin aumentar en exceso la carga salarial.
                                </p>

                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Vales de despensa:</span> apoyan el consumo básico.</li>
                                    <li><span className="font-semibold">Vales de combustible:</span> útiles para personal operativo/campo.</li>
                                    <li><span className="font-semibold">Vales de restaurante:</span> fomentan convivencia y bienestar.</li>
                                    <li><span className="font-semibold">Vales de regalo o incentivos especiales:</span> reconocimientos/campañas.</li>
                                    <li><span className="font-semibold">Vales digitales:</span> flexibles, seguros y fáciles de administrar.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    El <em>mix</em> depende de objetivos: motivación, ahorro, cobertura fiscal o retención de talento.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios de implementar
                                <br /> vales en tu empresa
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-left leading-relaxed font-semibold">Para el colaborador:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Mayor poder adquisitivo sin elevar su carga fiscal.</li>
                                    <li>Reconocimiento y sentido de pertenencia.</li>
                                    <li>Flexibilidad en el uso de beneficios.</li>
                                </ul>

                                <p className="text-center md:text-left leading-relaxed font-semibold mt-4">Para la empresa:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Mejor percepción del paquete de compensación.</li>
                                    <li>Eficiencia administrativa y control de gastos.</li>
                                    <li>Cumplimiento fiscal (SAT) y laboral (LFT) con trazabilidad.</li>
                                    <li>Menor rotación y mayor compromiso del equipo.</li>
                                </ul>

                                <p className="text-center md:text-justify leading-relaxed">
                                    Un programa bien gestionado se convierte en ventaja competitiva en sectores con alta rotación.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en
                                <br /> la gestión de vales
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Otorgar vales sin reglas documentadas ni criterios de elegibilidad.</li>
                                    <li>No integrarlos con nómina timbrada (inconsistencias ante el SAT).</li>
                                    <li>Desconocer límites deducibles o exenciones de ISR.</li>
                                    <li>Falta de trazabilidad/controles en asignación y uso.</li>
                                    <li>No medir impacto en satisfacción o productividad.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Estos fallos pueden implicar sanciones fiscales, pérdida de deducibilidad y desconfianza interna.
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
                                    <li>Diseño de programas personalizados por sector, tamaño y objetivos.</li>
                                    <li>Cumplimiento fiscal y laboral conforme a criterios del SAT y LFT.</li>
                                    <li>Plataforma de vales digitales con controles, reportes y soporte.</li>
                                    <li>Integración con nómina para timbrado y conciliación automatizada.</li>
                                    <li>KPIs: participación, uso, satisfacción y rotación.</li>
                                    <li>Auditoría y trazabilidad completa para revisiones internas o externas.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Convertimos los vales en un instrumento estratégico, no solo un beneficio aislado.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="estructura-cumplimiento" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Incentivos con estructura y cumplimiento
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Un programa profesional de vales motiva, optimiza la administración y fortalece la cultura de reconocimiento.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    La clave: claridad legal, control operativo y estrategia de talento trabajando juntas.
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
                                        ¿Qué son y cómo funcionan los vales de incentivo?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios de implementar vales en tu empresa
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en la gestión de vales
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cómo Payrolling Tech soluciona estos desafíos
                                    </a>
                                    <a href="#estructura-cumplimiento" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Incentivos con estructura y cumplimiento
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
