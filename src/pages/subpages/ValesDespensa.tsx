import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
//Importacion de imagenes
import Vale from "/img/Contenido/TarjetasVales.webp";
import tablaVales from "/img/Contenido/TablaVales.webp";
//importar svg
import svgPuerco from "/img/svg/Iconografia-01.svg";
import svgEstrella from "/img/svg/Iconografia-02.svg";
import svgValanza from "/img/svg/Iconografia-03.svg";

type BenefitCard = {
    id: string;
    title: string;
    description: string;
    variant: "filled" | "outline";
};

const BENEFITS: BenefitCard[] = [
    {
        id: "1",
        title: "Red abierta",
        description: "El colaborador puede usar la tarjeta en cualquier comercio con terminal bancaria y en linea.",
        variant: "filled",
    },
    {
        id: "2",
        title: "Sin cargas ante el IMSS, INFONAVIT e ISN",
        description: "Este beneficio no genera cargas ante los organismos de ley, permitiendote destinar mas recursos a areas estrategicas y al bienestar de tu equipo.",
        variant: "outline",
    },
    {
        id: "3",
        title: "Deduccion de impuestos",
        description: "Puedes deducir desde 47% hasta 53% en el Impuesto Sobre la Renta (ISR). Ahorro fiscal directo para la empresa.",
        variant: "filled",
    },
    {
        id: "4",
        title: "Mejora tu employer branding",
        description: "Reten y atrae talento elevando la reputacion de tu empresa con un beneficio tangible.",
        variant: "outline",
    },
];
const STEPS = [
    {
        id: "1",
        title: "Cotiza en linea",
        description: "Solicita tu cotizacion en linea y accede a beneficios exclusivos durante tu primer ano de contratacion.",
    },
    {
        id: "2",
        title: "Envia tus documentos",
        description: "Recibiras un correo electronico donde te indicamos la documentacion necesaria que debes enviar.",
    },
    {
        id: "3",
        title: "Activa tus vales de despensa",
        description: "Recibe tus tarjetas de vales y entregalas a tu equipo; las podran activar al instante desde la aplicacion movil.",
    },
];

const REASONS = [
    {
        title: "MENOS IMPUESTOS",
        description: "Podras deducir entre 47% y 53% de los bonos. Su uso no genera cargas fiscales para tu equipo.",
        icon: svgValanza,
    },
    {
        title: "MAYOR BIENESTAR",
        description: "Impulsa la salud y calidad de vida de tus empleados.",
        icon: svgPuerco,
    },
    {
        title: "MEJOR RETENCION",
        description: "Manten a tus empleados motivados y comprometidos con tu empresa con un beneficio que promueve su bienestar.",
        icon: svgEstrella,
    },
];

export default function ValesDespensa() {
    return (
        <div className="min-h-screen text-noche">
            <Headers variant="dark" />
            <main className="flex flex-col gap-24 pb-0">
                <section>
                    <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16">
                        <div className="absolute inset-x-0 top-12 hidden h-[420px] rounded-[3rem] bg-gradient-to-r from-[#f6ecff] via-white to-[#fff6e1] blur-3xl lg:block" aria-hidden="true" />
                        <div className="relative grid gap-12 lg:[grid-template-columns:1.05fr_0.95fr] lg:items-center">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl font-black leading-tight text-cardeno sm:text-5xl sm:leading-tight">
                                    Incrementa el poder adquisitivo de tus colaboradores
                                </h1>
                                <p className="max-w-xl text-base leading-7 text-noche/85 sm:text-lg">
                                    <strong className="font-semibold text-noche">Aprovecha los beneficios fiscales</strong> de los vales de despensa y deduce hasta el 53% del Impuesto Sobre la Renta (ISR).
                                    <strong className="font-semibold text-noche"> Con payrolling, opta por el mejor precio</strong> y la red de aceptacion mas amplia en vales de despensa para tu equipo.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=528138646238&text=Hola%2C%20quiero%20cotizar%20vales%20de%20despensa&type=phone_number&app_absent=0"
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
                            <div className="relative flex items-center justify-center lg:justify-end">
                                <div className="absolute -left-10 top-6 hidden h-60 w-60 rounded-[3rem] bg-gradient-to-br from-[#f1d8ff] via-[#fbefff] to-[#ffe7bf] blur-3xl lg:block" aria-hidden="true" />
                                <div className="absolute -bottom-10 right-0 hidden h-48 w-48 rounded-full bg-[#ffbf2b]/40 blur-3xl lg:block" aria-hidden="true" />
                                <img
                                    src={Vale}
                                    alt="Tarjetas de vales Payrolling Tech"
                                    className="relative w-full max-w-md -rotate-2 drop-shadow-[0_20px_55px_rgba(97,37,221,0.4)]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f4f3e9]">
                    <div className="mx-auto max-w-6xl px-4 py-16">
                        <div className="text-center">
                            <h2 className="text-3xl font-black text-cardeno sm:text-5xl">
                                &iquest;Por que otorgar vales de despensa en tu empresa?
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-base text-noche/80 sm:text-lg">
                                Apoyar a tu equipo con vales de despensa no solo mejora su calidad de vida, tambien impulsa la salud financiera de tu empresa. &iexcl;El beneficio es para todos!
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {BENEFITS.map((benefit) => {
                                const filled = benefit.variant === "filled";
                                const cardClasses = filled
                                    ? "bg-[#ffbf2b] border-[#f5a400] text-noche shadow-[0_12px_0_rgba(0,0,0,0.16)]"
                                    : "bg-white border-noche/20 text-noche shadow-[0_10px_0_rgba(0,0,0,0.12)]";
                                const descriptionClasses = filled ? "text-noche/90" : "text-noche/70";

                                return (
                                    <article
                                        key={benefit.id}
                                        className={`flex h-full flex-col gap-4 rounded-[1rem] border px-8 py-8 text-left transition-transform duration-200 hover:-translate-y-1 ${cardClasses}`}
                                    >
                                        <h3 className="text-lg font-extrabold leading-tight text-noche">
                                            <span className="font-black">{benefit.id}.</span> {benefit.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${descriptionClasses}`}>
                                            {benefit.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-cardeno py-20">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="text-center text-white">
                            <h2 className="text-3xl font-black sm:text-4xl">Compra tus vales de despensa en tres pasos</h2>
                            <p className="mx-auto mt-3 max-w-3xl text-base text-white/90">Cotiza gratis en linea y en tan solo 3 pasos entrega vales de despensa a tus colaboradores. &iexcl;Mejora la salud financiera de tu equipo!
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {STEPS.map((step) => (
                                <article
                                    key={step.id}
                                    className="relative flex h-full flex-col gap-5 rounded-[1.2rem] border border-black/10 bg-white px-9 pb-12 pt-14 text-left shadow-[0_12px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-1"
                                >
                                    <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#7a28ff] text-base font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)]">
                                        {step.id}
                                    </div>
                                    <h3 className="text-lg font-extrabold text-noche">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-noche/85">{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-4 py-16">
                    <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[1.1fr,0.9fr]">
                        <div className="space-y-10">
                            <h2 className="text-4xl font-black text-cardeno sm:text-5xl">&iquest;Por que vales?</h2>
                            <div className="space-y-8">
                                {REASONS.map((reason) => (
                                    <article key={reason.title} className="flex items-start gap-6 text-left">
                                        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-cardeno shadow-[0_18px_0_rgba(0,0,0,0.18)]">
                                            <img src={reason.icon} alt={`Icono ${reason.title.toLowerCase()}`} className="h-10 w-10" loading="lazy" />
                                        </div>
                                        <div className="space-y-1.5 max-w-lg">
                                            <h3 className="text-lg font-extrabold uppercase tracking-[0.08em] text-noche">{reason.title}</h3>
                                            <p className="text-base leading-relaxed text-noche/85">{reason.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-start justify-center lg:justify-end lg:self-start">
                            <img
                                src={tablaVales}
                                alt="Comparativo de vales versus efectivo"
                                className="w-full max-w-xl drop-shadow-[0_32px_60px_rgba(97,37,221,0.28)]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-noche py-16">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid gap-12 lg:[grid-template-columns:1.25fr_0.75fr] lg:items-center lg:gap-16 xl:[grid-template-columns:1.2fr_0.8fr]">
                            <div className="max-w-3xl text-center text-mango lg:order-2 lg:mx-auto xl:pr-6">
                                <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                                    Agenda una cita para conocer mas sobre nuestros vales.
                                </h2>
                            </div>
                            <form onSubmit={(event) => event.preventDefault()} className="w-full space-y-8 rounded-[2rem] bg-white px-6 py-10 shadow-[0_32px_70px_rgba(0,0,0,0.22)] lg:order-1 lg:max-w-[58rem] lg:px-16 lg:justify-self-end xl:max-w-[64rem]" noValidate>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Cuentanos mas de ti</legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input type="text" name="firstName" placeholder="Nombre" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                        <input type="text" name="lastName" placeholder="Apellido" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                    </div>
                                    <input type="text" name="role" placeholder="Tu cargo es" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                </fieldset>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Como podemos comunicarnos contigo?</legend>
                                    <div className="grid gap-4 sm:grid-cols-[0.8fr,1.2fr]">
                                        <div className="flex items-center gap-2 rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus-within:border-cardeno focus-within:ring-2 focus-within:ring-cardeno/30">
                                            <span className="font-semibold text-noche/80">+52</span>
                                            <input type="tel" name="phone" placeholder="Numero de celular" className="w-full border-none bg-transparent text-sm text-noche placeholder:text-noche/40 focus:outline-none" />
                                        </div>
                                        <input type="email" name="email" placeholder="Email empresarial" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                    </div>
                                </fieldset>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Cuentanos mas sobre tu empresa</legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input type="text" name="company" placeholder="Nombre de empresa" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                        <select name="employees" defaultValue="" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30">
                                            <option value="" disabled>Numero de colaboradores</option>
                                            <option value="1-10">1 - 10</option>
                                            <option value="10-20">10 - 20</option>
                                            <option value="20-100">20 - 100</option>
                                            <option value="100+">Mas de 100</option>
                                        </select>
                                    </div>
                                    <select name="location" defaultValue="" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30">
                                        <option value="" disabled>Donde se encuentra tu empresa?</option>
                                        <option value="cdmx">CDMX</option>
                                        <option value="guadalajara">Guadalajara</option>
                                        <option value="monterrey">Monterrey</option>
                                        <option value="otro">Otra ciudad</option>
                                    </select>
                                </fieldset>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Como conociste a Payrolling-Tech?</legend>
                                    <select name="source" defaultValue="" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30">
                                        <option value="" disabled>Como conociste a Payrolling-Tech?</option>
                                        <option value="referido">Referido</option>
                                        <option value="eventos">Eventos</option>
                                        <option value="redes">Redes sociales</option>
                                        <option value="busqueda">Busqueda en internet</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </fieldset>
                                <label className="flex items-start gap-3 text-xs text-noche/70">
                                    <input type="checkbox" name="terms" className="mt-1 h-4 w-4 rounded border border-noche/20 accent-cardeno focus:ring-cardeno" />
                                    <span>Al hacer clic en el boton "Agendar una cita", aceptaras nuestros Terminos, Condiciones y Politica de Privacidad.</span>
                                </label>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-full bg-[#ffbf2b] px-6 py-3 text-base font-semibold text-noche shadow-[0_16px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffc947] disabled:cursor-not-allowed disabled:opacity-70"
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











































