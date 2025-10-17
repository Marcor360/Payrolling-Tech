import { useEffect, useMemo, useRef, useState } from "react";
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
import { useFormSubmit } from "../../hooks/useFormSubmit.ts";

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

// Tipado para las ventanas emergentes
export interface Tarjeta {
    id: string;    // slug para abrir el modal
    title: string; // título visible
    body: string;  // contenido del modal
    svg: string;   // ícono asociado
}

// Contenido para modales (desde el PDF)
export const textoTarjetas: Tarjeta[] = [
    {
        id: "salario-on-demand",
        title: "Salario On-Demand",
        body:
            "Permite a tus colaboradores acceder al dinero ya trabajado con un clic. Reciben efectivo al instante, más rápido que un adelanto de nómina y sin intereses. Solo ingresan a la app, solicitan el monto y lo reciben en su cuenta bancaria en segundos. La empresa define el porcentaje máximo de retiro.",
        svg: svg1,
    },
    {
        id: "caja-de-ahorro",
        title: "Caja de ahorro",
        body:
            "Implementa una caja de ahorro lista para usar, con rendimientos competitivos de hasta 12% anual. Cada colaborador elige cuándo y cuánto aportar y tiene acceso inmediato a sus recursos.",
        svg: svg2,
    },
    {
        id: "telemedicina",
        title: "Telemedicina",
        body:
            "Atención médica en línea sin costo con médicos generales y especialistas (psicología, nutrición, salud sexual, pediatría y veterinaria). Complementa el seguro de salud y apoya el bienestar integral.",
        svg: svg3,
    },
    {
        id: "seguros-y-asistencias",
        title: "Seguros y asistencias",
        body:
            "Coberturas adicionales: hasta $20,000 MXN por gastos de accidente, $200,000 MXN por muerte accidental y asistencia funeraria para el titular. Incluye consultas con tarifas preferenciales, descuentos en salud, chequeo médico y cita dental gratuitos al año.",
        svg: svg4,
    },
    {
        id: "club-de-descuentos",
        title: "Club de descuentos",
        body:
            "Con geolocalización, tus colaboradores ubican comercios afiliados y acceden a descuentos en entretenimiento, restaurantes, servicios médicos y ópticas.",
        svg: svg5,
    },
    {
        id: "compras-y-pagos-de-servicios",
        title: "Compras y Pagos de servicio",
        body:
            "Pagos y recargas telefónicas a más de 50 proveedores desde el celular, con transacciones inmediatas disponibles 24/7.",
        svg: svg6,
    },
    {
        id: "prestamos-tasas-preferenciales",
        title: "Préstamos con tasas preferenciales",
        body:
            "Acceso a préstamos en línea con tasas más bajas que las bancarias y sin trámites complicados, apoyando la estabilidad financiera.",
        svg: svg7,
    },
    {
        id: "beneficios-fijos",
        title: "Beneficios fijos con cualquier plan",
        body:
            "Disponibles sin costo en la app del empleado y la plataforma de gestión: • Videos de entrenamiento y clases de fitness • Contenido de meditación, yoga y pausas activas • Curso virtual de finanzas personales • Recompensas con donaciones a causas sociales • Herramientas de encuestas y comunicaciones • Tarjeta de vales universales para bonos e incentivos.",
        svg: svg8,
    },
    {
        id: "vales-despensa",
        title: "Tarjeta de vales despensa",
        body:
            "Uso en más de 500,000 comercios en México, con consulta de saldo y movimientos desde la app. Para la empresa: deducción de hasta 53% de ISR sin generar IMSS, INFONAVIT ni ISN.",
        svg: svg9,
    },
    {
        id: "vales-gasolina",
        title: "Tarjeta de vales de gasolina",
        body:
            "Mejor control de flotilla y gastos, con deducción fiscal del 100%. La empresa define parámetros de control y asigna saldo en línea desde la plataforma de gestión hacia la app del empleado.",
        svg: svg10,
    },
    {
        id: "tarjeta-recompensas",
        title: "Tarjeta de recompensas",
        body:
            "Motiva y reconoce el desempeño entregando regalos, bonos o comisiones de forma fácil y segura. Gestión centralizada y personalizable de incentivos para impulsar productividad y compromiso.",
        svg: svg11,
    },
    {
        id: "gastos-corporativos",
        title: "Tarjeta de gastos corporativos",
        body:
            "Administra gastos de oficina, caja chica y viáticos con monitoreo en tiempo real, límites de uso y procesos de reembolso/conciliación más simples, reduciendo errores y mejorando la transparencia.",
        svg: svg12,
    },
];

// --- Util para mapear title → id con tolerancia (acentos, mayúsculas, espacios) ---
function norm(s: string) {
    return s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quita acentos
        .replace(/[\s/–—-]+/g, " ") // normaliza separadores
        .trim();
}

export default function Beneficios() {
    // -------- MODAL STATE --------
    const [activeId, setActiveId] = useState<string | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const { isSubmitting, handleSubmit } = useFormSubmit({
        formType: "general",
        subject: "Contacto - Beneficios",
        metadata: { form: "beneficios-contact" },
    });

    // Mapa por título normalizado → tarjeta
    const byTitle = useMemo(() => {
        const map = new Map<string, Tarjeta>();
        textoTarjetas.forEach((t) => map.set(norm(t.title), t));
        return map;
    }, []);

    const active = useMemo(
        () => (activeId ? textoTarjetas.find((t) => t.id === activeId) ?? null : null),
        [activeId]
    );

    function openByTitle(title: string) {
        const t = byTitle.get(norm(title));
        if (!t) {
            console.warn(`No encontré contenido para el título: "${title}"`);
            return;
        }
        setActiveId(t.id);
    }
    function closeModal() {
        setActiveId(null);


    }

    // Cerrar con ESC + bloquear scroll + foco en "X"
    useEffect(() => {
        if (!activeId) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        // Enfocar botón cerrar
        const t = setTimeout(() => closeBtnRef.current?.focus(), 0);

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            clearTimeout(t);
        };
    }, [activeId]);

    return (
        <>
            <Headers variant="dark" />

            {/* HERO BENEFICIOS */}
            <section className="w-full">
                {/* Grid a pantalla completa: 1 col en mobile, 2 cols desde md */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Columna Izquierda: Texto (contenida) */}
                    <div className="xl:flex xl:items-center xl:justify-center">
                        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
                            {/* max-w centrado dentro de la columna */}
                            <div className="max-w-xl mx-auto">
                                <h1 className="font-extrabold leading-tight text-left text-4xl sm:text-5xl lg:text-6xl text-cardeno">
                                    Conoce nuestros{" "}
                                    <span className="block text-cardeno">beneficios</span>
                                </h1>

                                <p className="mt-6 text-left text-base sm:text-lg leading-relaxed text-noche">
                                    <span className="font-semibold">La nueva forma de impulsar a tu equipo:</span>{" "}
                                    más de <span className="font-semibold">50 beneficios laborales</span> reunidos en{" "}
                                    <span className="font-semibold">una sola app</span> para elevar el{" "}
                                    <span className="font-semibold">bienestar</span> y{" "}
                                    <span className="font-semibold">productividad</span> de tu equipo.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3 justify-start">
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

                                {/* CTA de la tarjeta -> abre modal correspondiente */}
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openByTitle(b.title);
                                    }}
                                    aria-label={`Conoce más sobre ${b.title}`}
                                    className="w-full mt-auto text-cardeno font-semibold text-sm md:text-base
                    border-t border-cardeno/30 px-6 py-3 hover:bg-[#FAF9FF] transition cursor-pointer"
                                    role="button"
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
                                const pos = idx === 3 ? "lg:col-start-2" : idx === 4 ? "lg:col-start-4" : "";

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

                            {/* Columna derecha: Tarjeta = FORMULARIO */}
                            <form
                                className="relative rounded-3xl border-2 border-cardeno p-6 md:p-8 bg-transparent space-y-8"
                                noValidate
                                method="post"
                                onSubmit={handleSubmit}
                            >
                                {/* Decoración punteada (dentro del form) */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-xl opacity-80"
                                    style={{
                                        backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
                                        backgroundSize: "10px 10px",
                                        color: "rgb(128, 0, 255)" // fallback si no existe text-cardeno
                                    }}
                                />

                                {/* 1) Cuéntanos más de ti */}
                                <fieldset className="space-y-4">
                                    <legend className="text-cardeno font-semibold text-lg">Cuéntanos más de ti</legend>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="sr-only">Nombre</label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                placeholder="Nombre"
                                                required
                                                className="w-full rounded-xl border-2 border-cardeno px-4 py-3 bg-white text-noche placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="sr-only">Apellido</label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                placeholder="Apellido"
                                                required
                                                className="w-full rounded-xl border-2 border-cardeno px-4 py-3 bg-white text-noche placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="role" className="sr-only">Tu cargo es</label>
                                            <input
                                                id="role"
                                                name="role"
                                                type="text"
                                                placeholder="Tu cargo es"
                                                className="w-full rounded-xl border-2 border-cardeno px-4 py-3 bg-white text-noche placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* 2) ¿Cómo podemos comunicarnos contigo? */}
                                <fieldset className="space-y-4">
                                    <legend className="text-cardeno font-semibold text-lg">¿Cómo podemos comunicarnos contigo?</legend>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="sr-only">Número de celular</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                inputMode="tel"
                                                placeholder="Número de celular"
                                                pattern="^[+0-9\\s()-]{7,}$"
                                                required
                                                className="w-full rounded-xl border-2 border-cardeno px-4 py-3 bg-white text-noche placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="sr-only">Email empresarial</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Email empresarial"
                                                required
                                                className="w-full rounded-xl border-2 border-cardeno px-4 py-3 bg-white text-noche placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* 3) Cuéntanos más sobre tu empresa */}
                                <fieldset className="space-y-4">
                                    <legend className="text-cardeno font-semibold text-lg">Cuéntanos más sobre tu empresa</legend>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="company" className="sr-only">Nombre de la empresa</label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                placeholder="Nombre de la empresa"
                                                required
                                                className="w-full rounded-xl border-2 border-cardeno px-4 py-3 bg-white text-noche placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            />
                                        </div>

                                        {/* Número de colaboradores */}
                                        <div className="relative">
                                            <label htmlFor="employees" className="sr-only">Número de colaboradores</label>
                                            <select
                                                id="employees"
                                                name="employees"
                                                defaultValue=""
                                                required
                                                className="w-full appearance-none rounded-xl border-2 border-cardeno bg-white px-4 py-3 pr-12 text-noche focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            >
                                                <option value="" disabled>Número de colaboradores</option>
                                                <option>1–10</option>
                                                <option>11–50</option>
                                                <option>51–200</option>
                                                <option>201–500</option>
                                                <option>501–1,000</option>
                                                <option>1,000+</option>
                                            </select>
                                            <svg
                                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cardeno"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                            >
                                                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                                            </svg>
                                        </div>

                                        {/* Ubicación */}
                                        <div className="relative">
                                            <label htmlFor="location" className="sr-only">¿Dónde se encuentran tu empresa?</label>
                                            <select
                                                id="location"
                                                name="location"
                                                defaultValue=""
                                                required
                                                className="w-full appearance-none rounded-xl border-2 border-cardeno bg-white px-4 py-3 pr-12 text-noche focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                            >
                                                <option value="" disabled>¿Dónde se encuentran tu empresa?</option>
                                                <option>CDMX</option>
                                                <option>EDOMEX</option>
                                                <option>Otro</option>
                                            </select>
                                            <svg
                                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cardeno"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                            >
                                                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                                            </svg>
                                        </div>
                                    </div>
                                </fieldset>

                                {/* 4) ¿Cómo conociste a Payrolling Tech? */}
                                <fieldset className="space-y-4">
                                    <legend className="text-cardeno font-semibold text-lg">¿Cómo conociste a Payrolling Tech?</legend>

                                    <div className="relative">
                                        <label htmlFor="source" className="sr-only">¿Cómo conociste a Payrolling Tech?</label>
                                        <select
                                            id="source"
                                            name="source"
                                            defaultValue=""
                                            required
                                            className="w-full appearance-none rounded-xl border-2 border-cardeno bg-white px-4 py-3 pr-12 text-noche focus:outline-none focus:ring-2 focus:ring-cardeno/20 focus:border-cardeno"
                                        >
                                            <option value="" disabled>Selecciona una opción</option>
                                            <option>Google</option>
                                            <option>LinkedIn</option>
                                            <option>Webinar / Evento</option>
                                            <option>Referencia</option>
                                            <option>Redes sociales</option>
                                            <option>Otro</option>
                                        </select>
                                        <svg
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cardeno"
                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                        >
                                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                                        </svg>
                                    </div>
                                </fieldset>

                                {/* Honeypot anti-spam */}
                                <input type="text" name="empresa_web" className="hidden" tabIndex={-1} autoComplete="off" />

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl bg-cardeno text-white font-semibold py-3 md:py-4 hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar"}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

            </section>

            {/* -------- MODAL (Overlay + Dialog) -------- */}
            {active && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={closeModal} // clic fuera cierra
                    aria-hidden={false}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`modal-title-${active.id}`}
                        aria-describedby={`modal-desc-${active.id}`}
                        className="relative w-[92vw] max-w-xl md:max-w-2xl rounded-2xl bg-white shadow-xl p-6 md:p-8"
                        onClick={(e) => e.stopPropagation()} // evita cerrar si clic dentro
                    >
                        {/* TACHE */}
                        <button
                            ref={closeBtnRef}
                            onClick={closeModal}
                            aria-label="Cerrar"
                            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full
                text-[#2B2B2B] hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-cardeno/20"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 6l12 12M18 6l-12 12" />
                            </svg>
                            <span className="sr-only">Cerrar</span>
                        </button>

                        {/* Encabezado */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <img src={active.svg} alt="" className="h-10 w-10 md:h-12 md:w-12" />
                            <h3
                                id={`modal-title-${active.id}`}
                                className="text-xl md:text-2xl font-extrabold text-cardeno leading-tight"
                            >
                                {active.title}
                            </h3>
                        </div>

                        {/* Contenido */}
                        <p
                            id={`modal-desc-${active.id}`}
                            className="mt-4 text-sm md:text-base leading-relaxed text-[#1b1b1b]/80"
                        >
                            {active.body}
                        </p>

                        {/* CTA opcional dentro del modal (ejemplo) */}
                        {/* <div className="mt-6">
              <a href="#cotizar" className="inline-flex items-center justify-center rounded-xl bg-mango px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
                Cotizar este beneficio
              </a>
            </div> */}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
