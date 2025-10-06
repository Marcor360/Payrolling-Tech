import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import BanerPrincipal from "/img/Contenido/BanerBeneficio.webp";
import Tarjeta1 from "/img/img-tarjetas/RecuadroMango.webp";
import Tarjeta2 from "/img/img-tarjetas/RecuadroBlanco.webp";
import AgendaBeneficios from "/img/Contenido/AgentaBeneficios.webp";

//Importacion de SVG
import svg1 from "/img/svg/svg-beneficios/1.svg";
import svg2 from "/img/svg/svg-beneficios/2.svg";
import svg3 from "/img/svg/svg-beneficios/3.svg";
import svg4 from "/img/svg/svg-beneficios/4.svg";
import svg5 from "/img/svg/svg-beneficios/5.svg";
import svg6 from "/img/svg/svg-beneficios/6.svg";
import svg7 from "/img/svg/svg-beneficios/7.svg";
import svg8 from "/img/svg/svg-beneficios/8.svg";
import svg9 from "/img/svg/svg-beneficios/9.svg";
import svg10 from "/img/svg/svg-beneficios/10.svg";
import svg11 from "/img/svg/svg-beneficios/11.svg";
import svg12 from "/img/svg/svg-beneficios/12.svg";

const beneficiosData = [
    { icon: svg1, title: "Salario On-Demand" },
    { icon: svg2, title: "Caja de ahorro" },
    { icon: svg3, title: "Telemedicina" },
    { icon: svg4, title: "Seguros y asistencias" },
    { icon: svg5, title: "Club de descuentos" },
    { icon: svg6, title: "Compras y Pagos de servicio" },
    { icon: svg7, title: "Préstamos con tasas preferenciales" },
    { icon: svg8, title: "Beneficios fijos con cualquier plan" },
    { icon: svg9, title: "Tarjeta de vales despensa" },
    { icon: svg10, title: "Tarjeta de vales de gasolina" },
    { icon: svg11, title: "Tarjeta de recompensas" },
    { icon: svg12, title: "Tarjeta de gastos corporativos" },
];

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
            <section id="beneficios" className="bg-[#F3F1EA]">
                <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                        {beneficiosData.map((b, i) => (
                            <article
                                key={i}
                                className="bg-white rounded-2xl border-2 border-cardeno/50 hover:border-cardeno/70 transition
                           shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_rgba(93,48,255,0.08)]
                           flex flex-col items-center text-center overflow-hidden"
                            >
                                <div className="flex flex-col items-center gap-4 px-6 pt-8 pb-6">
                                    <img
                                        src={b.icon}
                                        alt={b.title}
                                        className="h-16 w-16 md:h-20 md:w-20"
                                        loading="lazy"
                                    />
                                    <h3 className="text-noche font-bold leading-tight text-lg md:text-xl">
                                        {b.title}
                                    </h3>
                                </div>

                                {/* Separador y CTA de la tarjeta */}
                                <a
                                    href=""
                                    aria-label={`Conoce más sobre ${b.title}`}
                                    className="w-full mt-auto text-cardeno font-semibold text-sm md:text-base
                             border-t border-cardeno/30 px-6 py-3 hover:bg-[#FAF9FF] transition"
                                >
                                    Conoce más
                                </a>
                            </article>
                        ))}
                    </div>

                    {/* Botón inferior central (ancla vacía por ahora) */}
                    <div className="mt-10 md:mt-12 flex justify-center">
                        <a
                            href=""
                            id="cotizar"
                            className="inline-flex items-center justify-center rounded-xl bg-mango px-6 py-3 md:px-8 md:py-4 
                         text-noche font-semibold text-base md:text-lg hover:opacity-90 transition"
                        >
                            Cotiza ahora
                        </a>
                    </div>
                </div>
                {/* Sección: Los beneficios de Payrolling Tech */}
                <section className="bg-noche text-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                        {/* Heading */}
                        <h2 className="text-center font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl">
                            Los beneficios de{" "}
                            <span className="relative inline-block align-middle">
                                <span className="relative z-10 px-2">Payrolling Tech</span>
                                <span className="absolute inset-0 -rotate-2 bg-cardeno rounded-lg px-2" aria-hidden />
                            </span>
                            <br className="hidden md:block" />
                            <span className="text-white/90">también son para tu empresa</span>
                        </h2>

                        {/* Descripción */}
                        <p className="mt-6 mx-auto max-w-4xl text-center text-base sm:text-lg text-white/80">
                            <span className="font-semibold">Optimiza</span> la administración de{" "}
                            <span className="font-semibold">tu nómina</span>, atrae el mejor talento,
                            <span className="font-semibold"> cumple con la regulación</span> y{" "}
                            <span className="font-semibold">reduce la rotación de personal</span> para enfocarte en el
                            crecimiento de tu negocio con un modelo ágil y seguro.
                        </p>

                        {/* Tarjetas */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-center">
                            {[
                                {
                                    title: "Reduce la rotación de talento en un 20%",
                                    body: "Con los beneficios de payrolling.",
                                    variant: "white",
                                },
                                {
                                    title: "60% de adopción de beneficios",
                                    body: "Los empleados acumulan +beneficios por uso desde los primeros meses.",
                                    variant: "white",
                                },
                                {
                                    title: "Deducibilidad fiscal",
                                    body: "100% de deducibilidad fiscal con vales de gasolina o 53% con vales de despensa.",
                                    variant: "white",
                                },
                                {
                                    title: "Cumple con la NOM-035",
                                    body: "Asegura el cumplimiento de bienestar de tus empleados.",
                                    variant: "mango",
                                },
                                {
                                    title: "Más productividad",
                                    body: "Al disminuir el estrés financiero en los empleados.",
                                    variant: "mango",
                                },
                            ].map((c, idx) => {
                                const isMango = c.variant === "mango";
                                // En desktop (lg) usamos 6 columnas; cada tarjeta ocupa 2.
                                // La 4ª arranca en col 2 y la 5ª en col 4 para quedar centradas.
                                const pos =
                                    idx === 3 ? "lg:col-start-2" : idx === 4 ? "lg:col-start-4" : "";

                                return (
                                    <article
                                        key={idx}
                                        className={`relative w-full lg:col-span-2 ${pos} rounded-2xl overflow-hidden`}
                                    >
                                        <img
                                            src={isMango ? Tarjeta1 : Tarjeta2}
                                            alt=""
                                            className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                                            loading="lazy"
                                        />

                                        <div className="relative px-6 py-8 md:px-8 md:py-10 text-center">
                                            <h3
                                                className={`font-extrabold leading-tight text-2xl md:text-[28px] ${isMango ? "text-[#1b1b1b]" : "text-cardeno"
                                                    }`}
                                            >
                                                {c.title}
                                            </h3>
                                            <p
                                                className={`mt-3 text-sm md:text-base ${isMango ? "text-[#1b1b1b]/80" : "text-[#1b1b1b]/70"
                                                    }`}
                                            >
                                                {c.body}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
                {/* Sección: Agenda una demo */}
                <section id="agenda-demo" className="bg-[#F3F1EA]">
                    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                            {/* Columna izquierda: Título + descripción + imagen */}
                            <div className="max-w-xl">
                                <h2 className="text-cardeno font-extrabold leading-tight text-4xl sm:text-5xl">
                                    Agenda una <br className="hidden sm:block" />
                                    <span className="block">demo en vivo</span>
                                </h2>

                                <p className="mt-4 text-noche text-base md:text-lg">
                                    Uno de <span className="font-semibold">nuestros especialistas</span> en beneficios laborales
                                    <span className="font-semibold"> te guiará</span> por la plataforma,
                                    <span className="font-semibold"> responderá</span> todas tus <span className="font-semibold">preguntas</span> y
                                    <span className="font-semibold"> realizará tu cotización</span>.
                                </p>

                                {/* Imagen: mostrar completa */}
                                <div className="mt-8 rounded-2xl overflow-hidden bg-[#F3F1EA]">
                                    <img
                                        src={AgendaBeneficios}
                                        alt="Asesor atendiendo una videollamada para agendar demo"
                                        className="block w-full h-auto max-h-[520px] md:max-h-[600px] object-contain mx-auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Columna derecha: Tarjeta con formulario */}
                            <div className="relative">
                                <div className="relative rounded-3xl border-2 border-cardeno p-6 md:p-8 bg-transparent">
                                    {/* Motivo punteado en esquina superior derecha */}
                                    <form className="space-y-6" noValidate>
                                        {/* --- Bloque: Cuéntanos más de ti --- */}
                                        <fieldset>
                                            <legend className="text-cardeno font-extrabold text-lg md:text-xl mb-3">
                                                Cuéntanos más de ti
                                            </legend>
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Nombre"
                                                    className="w-full rounded-xl border-2 border-cardeno bg-[#F3F1EA] px-4 py-3
                             placeholder:text-noche/50 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Apellido"
                                                    className="w-full rounded-xl border-2 border-cardeno bg-[#F3F1EA] px-4 py-3
                             placeholder:text-noche/50 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Tu cargo es"
                                                    className="w-full rounded-xl border-2 border-cardeno bg-[#F3F1EA] px-4 py-3
                             placeholder:text-noche/50 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                />
                                            </div>
                                        </fieldset>

                                        {/* --- Bloque: ¿Cómo podemos comunicarnos contigo? --- */}
                                        <fieldset>
                                            <legend className="text-cardeno font-extrabold text-lg md:text-xl mb-3">
                                                ¿Cómo podemos comunicarnos contigo?
                                            </legend>
                                            <div className="space-y-3">
                                                <input
                                                    type="tel"
                                                    placeholder="Número de celular"
                                                    className="w-full rounded-xl border-2 border-cardeno bg-[#F3F1EA] px-4 py-3
                             placeholder:text-noche/50 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email empresarial"
                                                    className="w-full rounded-xl border-2 border-cardeno bg-[#F3F1EA] px-4 py-3
                             placeholder:text-noche/50 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                />
                                            </div>
                                        </fieldset>

                                        {/* --- Bloque: Cuéntanos más sobre tu empresa --- */}
                                        <fieldset>
                                            <legend className="text-cardeno font-extrabold text-lg md:text-xl mb-3">
                                                Cuéntanos más sobre tu empresa
                                            </legend>
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Nombre de la empresa"
                                                    className="w-full rounded-xl border-2 border-cardeno bg-[#F3F1EA] px-4 py-3
                             placeholder:text-noche/50 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                />

                                                {/* Select: Número de colaboradores */}
                                                <div className="relative">
                                                    <select
                                                        className="w-full appearance-none pr-12 rounded-xl border-2 border-cardeno bg-[#F3F1EA]
                               px-4 py-3 text-noche/80 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Número de colaboradores</option>
                                                        <option>1–10</option>
                                                        <option>11–50</option>
                                                        <option>51–200</option>
                                                        <option>200+</option>
                                                    </select>
                                                    <svg
                                                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cardeno"
                                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    >
                                                        <path d="M5.5 7.5l4.5 5 4.5-5" />
                                                    </svg>
                                                </div>

                                                {/* Select: Dónde se encuentran */}
                                                <div className="relative">
                                                    <select
                                                        className="w-full appearance-none pr-12 rounded-xl border-2 border-cardeno bg-[#F3F1EA]
                               px-4 py-3 text-noche/80 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>¿Dónde se encuentran tu empresa?</option>
                                                        <option>CDMX</option>
                                                        <option>Estado de México</option>
                                                        <option>Interior de la República</option>
                                                        <option>Operación en varios estados</option>
                                                    </select>
                                                    <svg
                                                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cardeno"
                                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    >
                                                        <path d="M5.5 7.5l4.5 5 4.5-5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </fieldset>

                                        {/* --- Bloque: ¿Cómo conociste...? --- */}
                                        <fieldset>
                                            <legend className="text-cardeno font-extrabold text-lg md:text-xl mb-3">
                                                ¿Cómo conociste a Payrolling Tech?
                                            </legend>
                                            <div className="relative">
                                                <select
                                                    className="w-full appearance-none pr-12 rounded-xl border-2 border-cardeno bg-[#F3F1EA]
                             px-4 py-3 text-noche/80 focus:ring-4 focus:ring-cardeno/20 outline-none"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Selecciona una opción</option>
                                                    <option>Google</option>
                                                    <option>Redes sociales</option>
                                                    <option>Recomendación</option>
                                                    <option>Evento / Webinar</option>
                                                    <option>Otro</option>
                                                </select>
                                                <svg
                                                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cardeno"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                >
                                                    <path d="M5.5 7.5l4.5 5 4.5-5" />
                                                </svg>
                                            </div>
                                        </fieldset>

                                        <button
                                            type="submit"
                                            className="w-full rounded-xl bg-cardeno text-white font-semibold py-3 md:py-4
                         hover:opacity-90 transition"
                                        >
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}
