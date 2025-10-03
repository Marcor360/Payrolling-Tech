import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import BanerPrincipal from "../../../public/img/Contenido/BanerBeneficio.webp";

export default function Beneficios() {
    return (
        <>
            <Headers variant="dark" />

            {/* HERO BENEFICIOS */}
            <section className="w-full text-center">
                {/* Grid a pantalla completa: 1 col en mobile, 2 cols desde md */}
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Columna Izquierda: Texto (contenida) */}
                    <div>
                        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
                            <div className="max-w-xl">
                                <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl text-cardeno">
                                    Conoce nuestros{" "}
                                    <span className="block text-cardeno">beneficios</span>
                                </h1>

                                <p className="mt-6 text-base sm:text-lg leading-relaxed text-noche">
                                    <span className="font-semibold">Conoce la nueva forma de impulsar a tu equipo:</span>{" "}
                                    más de <span className="font-semibold">50 beneficios laborales</span> reunidos en{" "}
                                    <span className="font-semibold">una sola app</span> para elevar el{" "}
                                    <span className="font-semibold">bienestar</span> y{" "}
                                    <span className="font-semibold">productividad</span> de tu equipo.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a
                                        href="#cotizar"
                                        className="inline-flex items-center justify-center rounded-xl bg-mango px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                                    >
                                        Cotizar ahora
                                    </a>
                                    <a
                                        href="#beneficios"
                                        className="inline-flex items-center justify-center rounded-xl border border-noche/20 bg-white px-5 py-3 text-sm font-semibold text-[#2B2B2B] hover:bg-gray-50 transition"
                                    >
                                        Ver los beneficios
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Columna Derecha: Imagen (full-bleed, ocupa media pantalla) */}
                    <div className="relative min-h-[400px] md:min-h-[760px] bg-center bg-cover">
                        <img
                            src={BanerPrincipal}
                            alt="Equipo celebrando beneficios laborales"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>
            {/* BANDA MORADA - Full width */}
            <section className="bg-cardeno text-white">
                <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
                    <p className="text-center text-base sm:text-lg leading-relaxed">
                        <span className="font-semibold">Tú puedes decidir cuáles de estos planes activar</span> para tus colaboradores.
                        Los <span className="font-semibold">gestionas</span> desde una <span className="font-semibold">plataforma web</span> y
                        se reflejan en la <span className="font-semibold">aplicación móvil</span> del empleado.
                    </p>
                </div>
            </section>
            {/* Cuadros de Beneficios */}
            <section>

            </section>
            <Footer />
        </>
    );
}
