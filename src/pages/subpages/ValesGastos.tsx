import { useEffect, useRef } from "react";
import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";

// ¡No tocar! Imagen principal del héroe
import Gas from "/img/Contenido/TarjetasGastosC.webp";

type Benefit = {
    id: string;
    title: string;
    description: string;
};

type UseCase = {
    id: string;
    title: string;
    description: string;
};

const BENEFITS: Benefit[] = [
    {
        id: "1",
        title: "Red abierta",
        description:
            "El colaborador puede usar la tarjeta en cualquier comercio con terminal bancaria y en línea.",
    },
    {
        id: "2",
        title: "Control total del saldo",
        description:
            "Asigna montos y define límites personalizados para tu presupuesto.",
    },
    {
        id: "3",
        title: "Control sin afectar tu crédito",
        description:
            "Evita trámites de tarjetas de crédito y mantén una contabilidad simple y transparente.",
    },
    {
        id: "4",
        title: "Optimización logística",
        description:
            "Reduce facturación, reembolsos y manejo de efectivo; ahorra tiempo y costos.",
    },
    {
        id: "5",
        title: "Beneficios fiscales",
        description:
            "Deducibles en uniformes, herramientas, teletrabajo y alimentos de negocios al usar la tarjeta.",
    },
];

const USE_CASES: UseCase[] = [
    {
        id: "A",
        title: "Dispersión de viáticos",
        description: "Facilita los viajes de negocio sin manejar efectivo.",
    },
    {
        id: "B",
        title: "Manejo de caja chica",
        description:
            "Administra gastos diarios de oficina de forma segura y eficiente, sin efectivo.",
    },
    {
        id: "C",
        title: "Gastos de mantenimiento o limpieza",
        description:
            "Simplifica los pagos de mantenimiento y limpieza de tus instalaciones.",
    },
    {
        id: "D",
        title: "Pagos a proveedores",
        description: "Realiza pagos rápidos y sin complicaciones.",
    },
    {
        id: "E",
        title: "Fortalecimiento de alianzas comerciales",
        description:
            "Úsala en campañas, eventos o como regalo corporativo en fechas especiales.",
    },
];

export default function ValesGastos() {
    const pageRef = useRef<HTMLDivElement>(null);

    // Animaciones sutiles al hacer scroll
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;

        const prefersReduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const nodes = root.querySelectorAll<HTMLElement>("[data-ani]");
        if (prefersReduce) {
            nodes.forEach((el) => el.classList.add("opacity-100", "translate-y-0"));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target as HTMLElement;
                        el.classList.add("opacity-100", "translate-y-0");
                        io.unobserve(el);
                    }
                });
            },
            { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
        );

        nodes.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <div className="min-h-screen text-noche" ref={pageRef}>
            <Headers variant="dark" />

            {/* 🔧 Quitamos el gap para eliminar la “línea” de separación */}
            <main className="flex flex-col pb-0">
                {/* === HERO === */}
                <section>
                    <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-10 hidden h-[420px] rounded-[3rem] bg-gradient-to-r from-[#f6ecff] via-white to-[#fff6e1] blur-3xl lg:block"
                        />
                        <div className="relative grid gap-12 lg:[grid-template-columns:1.05fr_0.95fr] lg:items-center">
                            {/* Copy */}
                            <div className="flex flex-col gap-6">
                                <h1
                                    data-ani
                                    style={{ transitionDelay: "80ms" }}
                                    className="opacity-0 translate-y-3 transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                             text-4xl font-black leading-tight text-cardeno sm:text-5xl sm:leading-tight"
                                >
                                    Gestiona los gastos de tu empresa con tu tarjeta corporativa
                                </h1>

                                <ul className="mt-2 space-y-3 text-base leading-7 text-noche/85 sm:text-lg">
                                    {[
                                        <>
                                            <strong className="text-noche">
                                                Mejora el control financiero
                                            </strong>{" "}
                                            con reglas y límites a la medida.
                                        </>,
                                        <>
                                            <strong className="text-noche">
                                                Facilita caja chica y viáticos
                                            </strong>{" "}
                                            en una solución segura y eficiente.
                                        </>,
                                        <>
                                            Simplifica la administración y{" "}
                                            <strong className="text-noche">optimiza los recursos</strong>{" "}
                                            de tu negocio.
                                        </>,
                                    ].map((content, i) => (
                                        <li
                                            key={i}
                                            data-ani
                                            style={{ transitionDelay: `${160 + i * 120}ms` }}
                                            className="opacity-0 translate-y-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                                        >
                                            {content}
                                        </li>
                                    ))}
                                </ul>

                                <div
                                    data-ani
                                    style={{ transitionDelay: "520ms" }}
                                    className="opacity-0 translate-y-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                             flex flex-wrap gap-4 pt-2"
                                >
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=528138646238&text=Hola%2C%20quiero%20cotizar%20la%20tarjeta%20de%20gastos%20corporativos&type=phone_number&app_absent=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-[1.5rem] bg-[#ffbf2b] px-9 py-3 text-base font-semibold text-noche shadow-[0_12px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffc947]"
                                    >
                                        Cotiza ahora
                                    </a>

                                    <a
                                        href="mailto:hola@payrollingtech.com"
                                        className="inline-flex items-center justify-center rounded-[1.5rem] border border-noche/25 bg-white px-9 py-3 text-base font-semibold text-noche shadow-[0_10px_0_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#6f2bff] hover:text-[#6f2bff]"
                                    >
                                        Habla con nosotros
                                    </a>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div
                                data-ani
                                style={{ transitionDelay: "120ms" }}
                                className="opacity-0 translate-y-4 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                           relative flex items-center justify-center lg:justify-end"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute -left-10 top-6 hidden h-60 w-60 rounded-[3rem] bg-gradient-to-br from-[#f1d8ff] via-[#fbefff] to-[#ffe7bf] blur-3xl lg:block"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-10 right-0 hidden h-48 w-48 rounded-full bg-[#ffbf2b]/40 blur-3xl lg:block"
                                />
                                <img
                                    src={Gas}
                                    alt="Tarjetas de vales de gastos corporativos Payrolling Tech"
                                    className="relative w-full max-w-md -rotate-2 drop-shadow-[0_20px_55px_rgba(97,37,221,0.4)]"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* === Beneficios (PDF) – estilo referencia === */}
                <section className="bg-[#f4f3e9]">
                    <div className="mx-auto max-w-6xl px-4 py-16">
                        {/* Encabezado */}
                        <div
                            data-ani
                            className="opacity-0 translate-y-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] text-center"
                        >
                            <h2 className="text-3xl sm:text-5xl font-black text-noche">
                                Beneficios de la tarjeta corporativa
                            </h2>

                            {/* Copy como en la imagen (con negritas) */}
                            <p className="mx-auto mt-4 max-w-4xl text-base sm:text-lg text-noche/85">
                                Mejora el control financiero de tu empresa con nuestra{" "}
                                <strong className="text-noche">
                                    Tarjeta de Gastos Corporativos
                                </strong>
                                . Facilita la gestión de{" "}
                                <strong className="text-noche">caja chica y viáticos</strong>,
                                ofreciendo una solución{" "}
                                <strong className="text-noche">segura y eficiente</strong> para
                                administrar los gastos de oficina.
                            </p>
                        </div>

                        {/* Tarjetas */}
                        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {BENEFITS.map((b, i) => {
                                const mango = [0, 2, 4].includes(i); // 1,3,5 mango
                                const place =
                                    i === 3 ? "lg:col-start-1" : i === 4 ? "lg:col-start-3" : "";

                                return (
                                    <li
                                        key={b.id}
                                        data-ani
                                        style={{ transitionDelay: `${120 + i * 120}ms` }}
                                        className={[
                                            "opacity-0 translate-y-6 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                                            "rounded-[1.35rem] px-7 py-7 sm:py-9",
                                            mango
                                                ? "bg-[#ffbf2b] text-noche shadow-[0_14px_0_rgba(0,0,0,0.18)]"
                                                : "bg-white text-noche border border-noche/10 shadow-[0_12px_0_rgba(0,0,0,0.12)]",
                                            place,
                                        ].join(" ")}
                                    >
                                        <h3 className="text-lg sm:text-xl font-extrabold leading-tight tracking-tight">
                                            <span className="font-black">{b.id}.</span> {b.title}
                                        </h3>

                                        <p
                                            className={`mt-3 text-sm sm:text-[0.95rem] leading-relaxed ${mango ? "text-noche/90" : "text-noche/80"
                                                }`}
                                        >
                                            {b.description}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>

                {/* === Flexibilidad / Casos de uso (estilo PDF) === */}
                <section className="bg-noche py-16 sm:py-20">
                    <div className="mx-auto max-w-6xl px-4">
                        {/* Encabezado */}
                        <div
                            data-ani
                            className="opacity-0 translate-y-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                 text-center text-white"
                        >
                            <h2 className="text-3xl sm:text-4xl font-black text-mango">
                                Flexibilidad en el uso de la tarjeta corporativa
                            </h2>
                            <p className="mt-3 text-white/85">
                                Diseñada para adaptarse a diversas operaciones empresariales,
                                esta tarjeta de gastos te permite controlar y optimizar los
                                recursos de tu negocio.
                            </p>
                        </div>

                        {/* Lista en 2 columnas con viñetas */}
                        <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
                            {USE_CASES.map((u, i) => (
                                <li
                                    key={u.id}
                                    data-ani
                                    style={{ transitionDelay: `${100 + i * 100}ms` }}
                                    className="opacity-0 translate-y-5 transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                     flex items-start gap-4"
                                >
                                    <span className="mt-2 inline-block h-3.5 w-3.5 rounded-full bg-[#ffbf2b] shadow-[0_0_0_6px_rgba(255,191,43,0.18)]" />
                                    <div>
                                        <h3 className="text-base font-extrabold text-white">
                                            {u.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-white/85">
                                            {u.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* === Formulario de contacto === */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid gap-12 lg:[grid-template-columns:1.25fr_0.75fr] lg:items-center lg:gap-16 xl:[grid-template-columns:1.2fr_0.8fr]">
                            <div
                                data-ani
                                className="opacity-0 translate-y-4 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                           max-w-3xl text-center text-noche lg:order-2 lg:mx-auto xl:pr-6"
                            >
                                <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                                    Agenda una cita para conocer más sobre nuestros vales.
                                </h2>
                            </div>

                            <form
                                data-ani
                                style={{ transitionDelay: "160ms" }}
                                className="opacity-0 translate-y-6 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                           w-full space-y-8 rounded-[2rem] bg-white px-6 py-10 shadow-[0_32px_70px_rgba(0,0,0,0.22)] lg:order-1 lg:max-w-[58rem] lg:px-16 lg:justify-self-end xl:max-w-[64rem]"
                                noValidate
                            >
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        Cuéntanos más de ti
                                    </legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Nombre"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Apellido"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="Tu cargo es"
                                        className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                    />
                                </fieldset>

                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        ¿Cómo podemos comunicarnos contigo?
                                    </legend>
                                    <div className="grid gap-4 sm:grid-cols-[0.8fr,1.2fr]">
                                        <div className="flex items-center gap-2 rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus-within:border-cardeno focus-within:ring-2 focus-within:ring-cardeno/30">
                                            <span className="font-semibold text-noche/80">+52</span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Número de celular"
                                                className="w-full border-none bg-transparent text-sm text-noche placeholder:text-noche/40 focus:outline-none"
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email empresarial"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                    </div>
                                </fieldset>

                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        Cuéntanos más sobre tu empresa
                                    </legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Nombre de empresa"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                        <select
                                            name="employees"
                                            defaultValue=""
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        >
                                            <option value="" disabled>
                                                Número de colaboradores
                                            </option>
                                            <option value="1-10">1 - 10</option>
                                            <option value="10-20">10 - 20</option>
                                            <option value="20-100">20 - 100</option>
                                            <option value="100+">Más de 100</option>
                                        </select>
                                    </div>
                                    <select
                                        name="location"
                                        defaultValue=""
                                        className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                    >
                                        <option value="" disabled>
                                            ¿Dónde se encuentra tu empresa?
                                        </option>
                                        <option value="cdmx">CDMX</option>
                                        <option value="guadalajara">Guadalajara</option>
                                        <option value="monterrey">Monterrey</option>
                                        <option value="otro">Otra ciudad</option>
                                    </select>
                                </fieldset>

                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        ¿Cómo conociste a Payrolling-Tech?
                                    </legend>
                                    <select
                                        name="source"
                                        defaultValue=""
                                        className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                    >
                                        <option value="" disabled>
                                            Selecciona una opción
                                        </option>
                                        <option value="referido">Referido</option>
                                        <option value="eventos">Eventos</option>
                                        <option value="redes">Redes sociales</option>
                                        <option value="busqueda">Búsqueda en internet</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </fieldset>

                                <label className="flex items-start gap-3 text-xs text-noche/70">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        className="mt-1 h-4 w-4 rounded border border-noche/20 accent-cardeno focus:ring-cardeno"
                                    />
                                    <span>
                                        Al hacer clic en el botón “Enviar”, aceptas nuestros
                                        Términos, Condiciones y Política de Privacidad.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-full bg-[#ffbf2b] px-6 py-3 text-base font-semibold text-noche shadow-[0_16px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffc947]"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
