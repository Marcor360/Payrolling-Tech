import { useEffect } from "react";
import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import { useFormSubmit } from "../../hooks/useFormSubmit.ts";

// ¡No tocar! Imagen principal del héroe
import Gas from "/img/Contenido/TarjetasGas.webp";

type Benefit = {
    id: string;
    title: string;
    description: string;
};

type Step = {
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
        title: "Mayor control de combustible",
        description:
            "Con una herramienta en línea simple y eficiente, controla, registra y analiza el consumo y el desempeño de tu flotilla al instante.",
    },
    {
        id: "3",
        title: "100% deducible con CFDI",
        description:
            "Facilita tu contabilidad con una factura mensual única y 100% deducible, emitida con CFDI y estado de cuenta. Contamos con autorización del SAT como monedero electrónico.",
    },
    {
        id: "4",
        title: "Asignación de saldo en línea",
        description:
            "Evita el manejo de efectivo. Con la app móvil podrás distribuir saldo fácilmente y mantener un control total sobre los gastos de combustible.",
    },
    {
        id: "5",
        title: "Comodidad total",
        description:
            "Consulta en la app el saldo y movimientos de las tarjetas. Gracias al sello CARNET, son aceptadas en todas las gasolineras con TPV. ¡Olvídate de los vales en papel!",
    },
];

const STEPS: Step[] = [
    {
        id: "1",
        title: "Cotiza en línea",
        description:
            "Cotiza gratis y solicita tus vales al 0% de comisión por servicio durante los primeros 12 meses de contratación*.",
    },
    {
        id: "2",
        title: "Envía tus documentos",
        description:
            "Recibirás un correo electrónico con la documentación necesaria que debes enviar.",
    },
    {
        id: "3",
        title: "Activa tus vales de gasolina",
        description:
            "Recibe tus tarjetas y entrégalas a tu equipo; podrán activarlas al instante desde la app móvil.",
    },
];

// Hookcillo para revelar con scroll (suave y ligero)
function useScrollReveal() {
    useEffect(() => {
        const els = document.querySelectorAll<HTMLElement>("[data-animate]");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target as HTMLElement;
                        el.classList.remove("opacity-0", "translate-y-6");
                        el.classList.add("opacity-100", "translate-y-0");
                        io.unobserve(el);
                    }
                });
            },
            { threshold: 0.15 }
        );

        els.forEach((el) => {
            // estado inicial
            el.classList.add(
                "opacity-0",
                "translate-y-6",
                "transition-all",
                "duration-[900ms]",
                "ease-[cubic-bezier(0.22,1,0.36,1)]",
                "will-change-transform",
                "motion-reduce:transition-none",
                "motion-reduce:transform-none",
                "motion-reduce:opacity-100"
            );
            io.observe(el);
        });

        return () => io.disconnect();
    }, []);
}

export default function ValesGasolina() {
    const { isSubmitting, handleSubmit } = useFormSubmit({
        formType: "general",
        subject: "Contacto - Vales de gasolina",
        metadata: { form: "vales-gasolina-contact" },
    });
    useScrollReveal();

    return (
        <div className="min-h-screen text-noche">
            <Headers variant="dark" />

            {/* IMPORTANTE: sin gap para que no se vea una franja entre secciones */}
            <main className="flex flex-col gap-0 pb-0">
                {/* === HERO === */}
                <section>
                    <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16">
                        <div
                            className="absolute inset-x-0 top-10 hidden h-[420px] rounded-[3rem] bg-gradient-to-r from-[#f6ecff] via-white to-[#fff6e1] blur-3xl lg:block"
                            aria-hidden="true"
                        />
                        <div className="relative grid gap-12 lg:[grid-template-columns:1.05fr_0.95fr] lg:items-center">
                            {/* Copy */}
                            <div className="flex flex-col gap-6" data-animate>
                                <h1 className="text-4xl font-black leading-tight text-cardeno sm:text-5xl sm:leading-tight">
                                    Impulsa tu empresa con tarjetas de vales de gasolina
                                </h1>

                                <ul className="mt-2 space-y-3 text-base leading-7 text-noche/85 sm:text-lg">
                                    <li>
                                        <strong className="text-noche">Optimiza, controla y reduce</strong>{" "}
                                        los gastos de combustible de tu empresa de manera práctica y
                                        eficiente.
                                    </li>
                                    <li>
                                        Implementa tarjetas de gasolina con{" "}
                                        <strong className="text-noche">red abierta</strong>, válidas en
                                        todo el país.
                                    </li>
                                    <li>
                                        Aprovecha la{" "}
                                        <strong className="text-noche">
                                            deducción del 100% con CFDI autorizado por el SAT
                                        </strong>
                                        , garantizando cumplimiento legal e integración contable sencilla.
                                    </li>
                                </ul>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=528138646238&text=Hola%2C%20quiero%20cotizar%20vales%20de%20gasolina&type=phone_number&app_absent=0"
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
                                className="relative flex items-center justify-center lg:justify-end"
                                data-animate
                                style={{ transitionDelay: "120ms" }}
                            >
                                <div
                                    className="absolute -left-10 top-6 hidden h-60 w-60 rounded-[3rem] bg-gradient-to-br from-[#f1d8ff] via-[#fbefff] to-[#ffe7bf] blur-3xl lg:block"
                                    aria-hidden="true"
                                />
                                <div
                                    className="absolute -bottom-10 right-0 hidden h-48 w-48 rounded-full bg-[#ffbf2b]/40 blur-3xl lg:block"
                                    aria-hidden="true"
                                />
                                <img
                                    src={Gas}
                                    alt="Tarjetas de vales de gasolina Payrolling Tech"
                                    className="relative w-full max-w-md -rotate-2 drop-shadow-[0_20px_55px_rgba(97,37,221,0.4)]"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* === Beneficios (5) === */}
                <section className="bg-[#f4f3e9]">
                    <div className="mx-auto max-w-6xl px-4 py-16">
                        {/* Encabezado */}
                        <div className="text-center" data-animate>
                            <h2 className="text-3xl sm:text-[2.75rem] font-black leading-tight">
                                <span className="text-noche">Impulsa tu empresa con tarjetas</span>
                                <span className="block text-cardeno">de vales de gasolina</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-base text-noche/80 sm:text-lg">
                                Con Payrolling como aliado, controlarás el gasto de combustible,
                                optimizarás tu flotilla y obtendrás beneficios fiscales que impulsan
                                la eficiencia financiera de tu empresa.
                            </p>
                        </div>

                        {/* Tarjetas */}
                        <div className="mt-12 grid gap-8 items-stretch sm:grid-cols-2 lg:grid-cols-3">
                            {BENEFITS.map((b, idx) => {
                                const accent = [0, 2, 4].includes(idx); // 1,3 y 5 moradas
                                const baseCard = accent
                                    ? "bg-cardeno text-white shadow-[0_12px_0_rgba(0,0,0,0.20)]"
                                    : "bg-white text-noche border border-noche/10 shadow-[0_12px_0_rgba(0,0,0,0.10)]";
                                const placement =
                                    idx === 3 ? "lg:col-start-1" : idx === 4 ? "lg:col-start-3" : "";

                                return (
                                    <article
                                        key={b.id}
                                        className={`rounded-[1.4rem] px-7 py-8 ${baseCard} ${placement}`}
                                        data-animate
                                        style={{ transitionDelay: `${120 + idx * 80}ms` }}
                                    >
                                        <h3
                                            className={`text-lg sm:text-xl font-extrabold leading-tight ${accent ? "text-white" : "text-noche"
                                                }`}
                                        >
                                            <span className="font-bold">{b.id}. </span>
                                            {b.title}
                                        </h3>
                                        <p
                                            className={`mt-3 text-sm sm:text-[0.95rem] leading-relaxed ${accent ? "text-white/90" : "text-noche/80"
                                                }`}
                                        >
                                            {b.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* === Proceso: 3 pasos (dark) === */}
                <section className="bg-noche py-16 sm:py-20">
                    <div className="mx-auto max-w-6xl px-4">
                        {/* Título + subtítulos */}
                        <div className="text-center text-white" data-animate>
                            <h2 className="text-[clamp(1.85rem,3.3vw,3rem)] sm:text-5xl font-black leading-tight">
                                Consigue tus vales de gasolina y optimiza tus gastos de combustible
                            </h2>

                            <p className="mx-auto mt-4 max-w-4xl text-[0.95rem] sm:text-base text-white/85">
                                En 3 pasos, tu empresa y colaboradores aprovechan al máximo los vales
                                de gasolina.
                            </p>
                            <p className="mx-auto mt-1 max-w-4xl text-[0.95rem] sm:text-base text-white/80">
                                Simplifica la gestión de gastos y mejora la movilidad y eficiencia de
                                tu organización.
                            </p>
                        </div>

                        {/* Tarjetas */}
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {STEPS.map((s, i) => (
                                <article
                                    key={s.id}
                                    className="
                    relative rounded-[1.25rem] border border-white/10
                    bg-white p-7 sm:p-8 text-left shadow-[0_18px_55px_rgba(0,0,0,0.35)]
                  "
                                    data-animate
                                    style={{ transitionDelay: `${120 + i * 90}ms` }}
                                >
                                    {/* Badge del número (arriba derecha) */}
                                    <span
                                        className="
                      absolute -top-5 right-6 grid h-12 w-12 place-items-center
                      rounded-full bg-noche text-white text-base font-bold
                      ring-4 ring-white shadow-[0_8px_0_rgba(0,0,0,0.28)]
                    "
                                    >
                                        {s.id}
                                    </span>

                                    <h3 className="pt-2 text-[1.05rem] sm:text-lg font-extrabold text-noche">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 text-[0.95rem] leading-relaxed text-noche/85">
                                        {s.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* === Formulario de contacto === */}
                <section className=" py-16">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid gap-12 lg:[grid-template-columns:1.25fr_0.75fr] lg:items-center lg:gap-16 xl:[grid-template-columns:1.2fr_0.8fr]">
                            <div
                                className="max-w-3xl text-center text-noche lg:order-2 lg:mx-auto xl:pr-6"
                                data-animate
                            >
                                <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                                    Agenda una cita para conocer más sobre nuestros vales.
                                </h2>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="w-full space-y-8 rounded-[2rem] bg-white px-6 py-10 shadow-[0_32px_70px_rgba(0,0,0,0.22)] lg:order-1 lg:max-w-[58rem] lg:px-16 lg:justify-self-end xl:max-w-[64rem]"
                                noValidate
                                data-animate
                                style={{ transitionDelay: "140ms" }}
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
                                        Al hacer clic en el botón “Enviar”, aceptas nuestros Términos,
                                        Condiciones y Política de Privacidad.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center rounded-full bg-[#ffbf2b] px-6 py-3 text-base font-semibold text-noche shadow-[0_16px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffc947] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar"}
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
