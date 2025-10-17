import { Link } from "react-router-dom";
import Headers from "../../../../components/header.tsx";
import Footer from "../../../../components/footer.tsx";
import Img2 from "/img/Contenido/Blog/1.1.webp";

// Opcional: SEO con react-helmet-async
// import { Helmet } from "react-helmet-async";
// const SEO = {
//   title: "Seguros de vida corporativos en México: qué debe saber tu empresa",
//   description: "Explora opciones, coberturas y mejores prácticas para implementar seguros de vida empresariales.",
//   keywords: "seguros de vida empresas México, seguro de vida corporativo, póliza grupal",
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
                                    alt="Seguros de vida corporativos en México para empresas"
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
                                    Seguros de vida corporativos
                                    <br className="hidden md:block" />
                                    en México: qué debe saber tu empresa
                                </h1>

                                <p className="mt-4 text-noche text-base sm:text-lg leading-relaxed text-center md:text-justify md:max-w-xl">
                                    El seguro de vida corporativo es un beneficio muy valorado. Protege a las familias, refuerza la
                                    propuesta de valor al empleado (EVP) y proyecta a tu empresa como empleador responsable. Para las PYMEs,
                                    es también una estrategia de retención y cultura organizacional.
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
                            Además de proteger ante eventualidades, este beneficio fortalece el compromiso y la confianza. Implementarlo
                            con claridad operativa y de comunicación maximiza su impacto en bienestar y retención.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO + ÍNDICE */}
            <section className="pb-12 md:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
                    {/* Artículo */}
                    <article className="lg:col-span-8 space-y-12">

                        {/* 1 - Tipos */}
                        <section id="tipos" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Tipos de seguros de vida corporativos
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Existen esquemas adaptables al tamaño y giro de la empresa:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li><span className="font-semibold">Colectivo básico:</span> fallecimiento por cualquier causa.</li>
                                    <li><span className="font-semibold">Obligatorio por contrato:</span> requerido por normativas o convenios.</li>
                                    <li><span className="font-semibold">Voluntario:</span> el colaborador elige sumas mayores o coberturas extra.</li>
                                    <li><span className="font-semibold">Complementario:</span> añade accidentes, invalidez o enfermedades graves.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Las coberturas adicionales pueden incluir asistencia médica telefónica, apoyo funerario o anticipo por
                                    enfermedad terminal, aumentando la percepción de valor.
                                </p>
                            </div>
                        </section>

                        {/* 2 - Factores de costo */}
                        <section id="costos" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Factores que determinan el costo
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    Variables clave para negociar con aseguradoras:
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Edad promedio de los asegurados.</li>
                                    <li>Suma asegurada (monto a indemnizar).</li>
                                    <li>Giro o nivel de riesgo ocupacional.</li>
                                    <li>Historial de siniestralidad.</li>
                                    <li>Coberturas adicionales y extensión del plan.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Consejo: renegocia condiciones con base en datos al menos una vez al año para equilibrar costo y cobertura.
                                </p>
                            </div>
                        </section>

                        {/* 3 - Integración con nómina y RRHH */}
                        <section id="integracion" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Integración con la nómina y RRHH
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Define criterios de elegibilidad (antigüedad, tipo de contrato, puesto).</li>
                                    <li>Establece periodos de espera y portabilidad en bajas o cambios.</li>
                                    <li>Sincroniza altas, bajas y actualizaciones con nómina o HRIS.</li>
                                    <li>Comunica condiciones, beneficiarios y procedimientos de reclamación.</li>
                                </ul>
                                <p className="text-center md:text-justify leading-relaxed">
                                    Una comunicación clara evita confusiones y mejora la percepción del beneficio.
                                </p>
                            </div>
                        </section>

                        {/* 4 - Beneficios */}
                        <section id="beneficios" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Beneficios para la empresa y los colaboradores
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-left leading-relaxed font-semibold">Para el colaborador:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Tranquilidad financiera para su familia.</li>
                                    <li>Sensación de respaldo y cuidado de la empresa.</li>
                                    <li>Acceso a coberturas adicionales sin costo elevado.</li>
                                </ul>

                                <p className="text-center md:text-left leading-relaxed font-semibold mt-4">Para la empresa:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Mejor retención y clima organizacional.</li>
                                    <li>Marca empleadora más competitiva en atracción de talento.</li>
                                    <li>Impulso a una cultura de bienestar integral y responsabilidad social.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 5 - Cumplimiento y buenas prácticas */}
                        <section id="cumplimiento" className="scroll-mt-24">
                            <h2 className="text-cardeno font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left text-balance">
                                Cumplimiento y buenas prácticas
                            </h2>

                            <div className="mt-4 space-y-4 text-noche">
                                <p className="text-center md:text-justify leading-relaxed">
                                    La gestión de seguros implica datos personales sensibles. Cumple con la LFPDPPP y las disposiciones de
                                    la CNSF para resguardar información y operar con transparencia.
                                </p>
                                <p className="text-center md:text-left leading-relaxed font-semibold">Buenas prácticas recomendadas:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-center md:text-left">
                                    <li>Obtener consentimiento informado por escrito del colaborador.</li>
                                    <li>Mantener avisos de privacidad actualizados.</li>
                                    <li>Resguardar documentación y beneficiarios con protocolos de seguridad.</li>
                                    <li>Capacitar a RH sobre coberturas, exclusiones y procesos de reclamación.</li>
                                </ul>

                                {/* Cierre dentro de la última sección (sin usar "Conclusión" en el índice) */}
                                <p className="text-center md:text-justify leading-relaxed">
                                    Un programa bien diseñado y comunicado multiplica su impacto: protege, refuerza la relación
                                    empresa–empleado y diferencia a tu organización en un mercado competitivo.
                                </p>
                                <p className="text-center md:text-justify leading-relaxed">
                                    No es solo protección; es una muestra concreta de cuidado mutuo que fortalece confianza y pertenencia.
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
                                    <a href="#tipos" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Tipos de seguros de vida corporativos
                                    </a>
                                    <a href="#costos" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Factores que determinan el costo
                                    </a>
                                    <a href="#integracion" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Integración con la nómina y RRHH
                                    </a>
                                    <a href="#beneficios" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Beneficios para la empresa y los colaboradores
                                    </a>
                                    <a href="#cumplimiento" className="block px-5 py-4 hover:bg-fondo-cremita/70">
                                        Cumplimiento y buenas prácticas
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
