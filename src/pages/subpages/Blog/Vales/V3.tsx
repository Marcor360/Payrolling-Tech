
import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/6_1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Vales digitales en México: el futuro de los incentivos laborales",
//   description: "Descubre cómo los vales digitales modernizan la experiencia del empleado y simplifican la administración.",
//   keywords: "vales digitales México, incentivos laborales, vales electrónicos, app beneficios",
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
                                    alt="Vales digitales en México para incentivos laborales"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    decoding="async"
                                />
                                {/* Overlay sutil para contraste */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-noche/30 to-transparent pointer-events-none" />

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
                                    Vales digitales en México:
                                    <br className="hidden md:block" />
                                    el futuro de los incentivos laborales
                                </h1>

                                {/* Badges cortos para hacerlo más “vivo” */}
                                <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide bg-mango/80 text-noche px-2.5 py-1 rounded-full">Omnicanal</span>
                                    <span className="text-xs font-semibold uppercase tracking-wide bg-fondo-cremita/80 text-noche px-2.5 py-1 rounded-full">LFPDPPP</span>
                                    <span className="text-xs font-semibold uppercase tracking-wide bg-cardeno/10 text-cardeno px-2.5 py-1 rounded-full">Tiempo real</span>
                                </div>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    Los vales digitales permiten entrega inmediata, control granular y una experiencia móvil superior. A
                                    diferencia de los físicos, se gestionan en plataformas que facilitan administración, trazabilidad y
                                    cumplimiento fiscal.
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
                            Se pueden entregar mediante tarjetas virtuales, códigos QR y APIs integradas con nómina/contabilidad para
                            actualizar saldos en tiempo real y asegurar un uso seguro en comercios autorizados.
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
                                <br /> los vales digitales?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Instrumentos de incentivo laboral operados en plataformas tecnológicas para entrega inmediata, control
                                    granular y cumplimiento fiscal/operativo.
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Tarjetas virtuales:</span> carga del incentivo de forma instantánea.</li>
                                    <li><span className="font-semibold">Códigos QR:</span> canje en comercios autorizados sin fricción.</li>
                                    <li><span className="font-semibold">Integraciones API:</span> saldos/movimientos en tiempo real con nómina y contabilidad.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 2 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios de los
                                <br /> vales digitales
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-left leading-relaxed font-semibold">Para el colaborador:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Entrega inmediata sin logística física.</li>
                                    <li>Autoservicio: consulta de saldo y movimientos.</li>
                                    <li>Notificaciones y catálogo de comercios.</li>
                                    <li>Experiencia omnicanal con soporte remoto.</li>
                                </ul>

                                <p className="text-center md:text-left leading-relaxed font-semibold mt-4">Para la empresa:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Control por montos, categorías y destinatarios.</li>
                                    <li>Menos fraude y menores costos logísticos/administrativos.</li>
                                    <li>Trazabilidad total y auditoría electrónica.</li>
                                    <li>Segmentación de incentivos por rubro/departamento.</li>
                                    <li>Integración con nómina y contabilidad para reportes y cumplimiento fiscal.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 3 - Errores comunes */}
                        <section id="errores" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Errores comunes en la
                                <br /> implementación
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Sin piloto por área (baja adopción y errores operativos).</li>
                                    <li>No parametrizar límites/categorías (riesgos de control y fiscales).</li>
                                    <li>Comunicación deficiente al colaborador (confusión de uso/beneficios).</li>
                                    <li>No medir experiencia del empleado (sin mejoras continuas).</li>
                                    <li>Integración incompleta con nómina/contabilidad (inconsistencias de saldo/reportes).</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4 - Soluciones Payrolling Tech */}
                        <section id="soluciones" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                ¿Cómo Payrolling Tech
                                <br /> ayuda con los vales digitales?
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Plataforma con tarjetas virtuales, QR y APIs integradas.</li>
                                    <li>Gestión de saldos/movimientos en tiempo real con reportes automáticos.</li>
                                    <li>Cumplimiento fiscal/normativo: límites, políticas y resguardos electrónicos.</li>
                                    <li>Implementación gradual: piloto, ajustes por feedback y escalamiento por fases.</li>
                                    <li>Mejor experiencia del empleado: autoservicio, notificaciones y soporte omnicanal.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Convertimos los vales digitales en una palanca estratégica de <em>engagement</em> y productividad.
                                </p>
                            </div>
                        </section>

                        {/* 5 - Cierre (sin usar "Conclusión" en el índice) */}
                        <section id="ventaja-estrategica" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Incentivos digitales como ventaja estratégica
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La digitalización convierte los vales en una herramienta eficiente, segura y motivadora: entregas rápidas,
                                    control total y mayor satisfacción del colaborador.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Adoptar esta tecnología fortalece la marca empleadora y la cultura organizacional.
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
                                        ¿Qué son y cómo funcionan los vales digitales?
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios de los vales digitales
                                    </a>
                                    <a href="#errores" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Errores comunes en la implementación
                                    </a>
                                    <a href="#soluciones" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cómo Payrolling Tech ayuda con los vales digitales
                                    </a>
                                    <a href="#ventaja-estrategica" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Incentivos digitales como ventaja estratégica
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
