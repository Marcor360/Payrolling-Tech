import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
//Importacion de imagenes
import Vale from "/img/Contenido/TarjetasVales.webp";
//import tablaVales from "../../../public/img/Contenido/TablaVales.png";
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
        description: "Podras deducir entre 47% y 53% de los bonos sin generar cargas fiscales adicionales.",
    },
    {
        title: "MAYOR BIENESTAR",
        description: "Impulsa la salud financiera y la calidad de vida de tus colaboradores.",
    },
    {
        title: "MEJOR RETENCION",
        description: "Mantiene a tu equipo motivado con un beneficio que promueve compromiso y permanencia.",
    },
];

type ComparisonRow = {
    label: string;
    conVales: string;
    sinVales: string;
};

const EMPRESA_ROWS: ComparisonRow[] = [
    { label: "Monto pagado", conVales: "$795.00", sinVales: "$-" },
    { label: "ISR", conVales: "$1,209.81", sinVales: "$1,340.27" },
    { label: "IMMS", conVales: "$360.00", sinVales: "$405.00" },
    { label: "ISN", conVales: "--", sinVales: "--" },
    { label: "Total pagado", conVales: "$774.81", sinVales: "$1,745.27" },
];

const EMPLEADO_ROWS: ComparisonRow[] = [
    { label: "Monto por recibir", conVales: "$1,033.15", sinVales: "$1,283.80" },
    { label: "ISR", conVales: "$352.98", sinVales: "$391.04" },
    { label: "Total recibido", conVales: "$1,386.12", sinVales: "$1,674.84" },
];

function ComparisonTable({ title, rows }: { title: string; rows: ComparisonRow[] }) {
    return (
        <div className="rounded-3xl bg-white/80 p-6 shadow-lg shadow-cardeno/10 ring-1 ring-cardeno/15">
            <h4 className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-cardeno">{title}</h4>
            <div className="mt-6 overflow-hidden rounded-2xl border border-noche/10 bg-white">
                <div className="grid grid-cols-3 bg-cardeno/10 text-xs font-semibold uppercase text-noche/70">
                    <div className="px-4 py-3 text-left">Concepto</div>
                    <div className="px-4 py-3 text-center">Con vales</div>
                    <div className="px-4 py-3 text-center">Sin vales</div>
                </div>
                <ul className="divide-y divide-noche/10 text-sm text-noche">
                    {rows.map((row) => (
                        <li key={row.label} className="grid grid-cols-3">
                            <span className="px-4 py-3 font-medium">{row.label}</span>
                            <span className="px-4 py-3 text-center text-cardeno font-semibold">{row.conVales}</span>
                            <span className="px-4 py-3 text-center">{row.sinVales}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="mt-4 text-center text-xs text-noche/60">Valores transcritos del comparativo incluido en el PDF original. "--" indica dato no aplicable.</p>
        </div>
    );
}

export default function Vales() {
    return (
        <div className="min-h-screen bg-[#f4f3e9] text-noche">
            <Headers variant="dark" />
            <main className="flex flex-col gap-24 pb-24">
                <section className="bg-[#f4f3e9]">
                    <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-20 pt-16 lg:flex-row lg:items-center lg:gap-20">
                        <div className="flex flex-1 flex-col gap-6">
                            <h1 className="text-4xl font-black leading-tight text-cardeno sm:text-5xl sm:leading-tight">
                                Incrementa el poder adquisitivo de tus colaboradores
                            </h1>
                            <p className="max-w-xl text-base leading-7 text-noche/80 sm:text-lg">
                                <strong className="font-semibold text-noche">Aprovecha los beneficios </strong> fiscales de los vales de despensa y deduce hasta el 53% del Impuesto Sobre la Renta (ISR).
                                <strong className="ml-1 font-semibold text-noche">Con payrolling, opta por el mejor precio</strong> y la red de aceptacion mas amplia en vales de despensa para tu equipo.
                            </p>
                            <p className="text-sm italic text-noche/60">*Aplica a partir de una dispersion mensual minima de $100,000 (por producto)</p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://api.whatsapp.com/send/?phone=528138646238&text=Hola%2C%20quiero%20cotizar%20vales%20de%20despensa&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-[#ffbf2b] px-8 py-3 text-sm font-semibold text-noche shadow-lg shadow-cardeno/30 transition hover:bg-[#ffce4d]"
                                >
                                    Cotiza ahora
                                </a>
                                <a
                                    href="mailto:hola@payrollingtech.com"
                                    className="inline-flex items-center justify-center rounded-full border border-noche/20 bg-white px-8 py-3 text-sm font-semibold text-noche shadow-sm transition hover:border-cardeno/40 hover:text-cardeno"
                                >
                                    Habla con nosotros
                                </a>
                            </div>
                        </div>
                        <div className="relative flex flex-1 items-center justify-center">
                            <div className="absolute -top-12 left-10 hidden h-32 w-32 rounded-full bg-cardeno/10 blur-3xl lg:block" aria-hidden="true" />
                            <div className="absolute -bottom-16 right-6 hidden h-36 w-36 rounded-full bg-[#ffbf2b]/30 blur-3xl lg:block" aria-hidden="true" />
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-6 rounded-[3rem] bg-cardeno/15 blur-3xl" aria-hidden="true" />
                                <img
                                    src={Vale}
                                    alt="Tarjetas de vales Payrolling Tech"
                                    className="relative w-full drop-shadow-[0_18px_45px_rgba(97,37,221,0.35)]"
                                />
                            </div>
                        </div>
                        <div className="mt-12 rounded-3xl border border-dashed border-cardeno/40 bg-white/60 p-10 text-center shadow-inner">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cardeno/80">Espacio para fotografia secundaria</p>
                            <p className="mt-3 text-base text-noche/70">Reserva este bloque para ilustraciones de colaboradores usando vales.</p>
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

                <section className="bg-gradient-to-br from-[#701dff] via-[#7a28ff] to-[#8d3bff] py-20">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="text-center text-white">
                            <h2 className="text-3xl font-black sm:text-4xl">Compra tus vales de despensa en tres pasos</h2>
                            <p className="mx-auto mt-3 max-w-3xl text-base text-white/85">Cotiza gratis en linea y en tan solo 3 pasos entrega vales de despensa a tus colaboradores. &iexcl;Mejora la salud financiera de tu equipo!
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {STEPS.map((step) => (
                                <article
                                    key={step.id}
                                    className="relative flex h-full flex-col gap-4 rounded-[1.4rem] border border-black/10 bg-white px-8 pb-10 pt-12 text-left shadow-[0_14px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-1"
                                >
                                    <div className="absolute -top-8 right-8 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#7a28ff] text-lg font-bold text-white shadow-[0_8px_0_rgba(0,0,0,0.2)]">
                                        {step.id}
                                    </div>
                                    <h3 className="text-lg font-extrabold text-noche">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-noche/80">{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-4">
                    <h2 className="text-center text-3xl font-extrabold text-noche sm:text-4xl">&iquest;Por que vales?</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {REASONS.map((reason) => (
                            <div key={reason.title} className="rounded-3xl bg-cardeno/10 p-6 text-center shadow-inner">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cardeno">{reason.title}</h3>
                                <p className="mt-4 text-sm text-noche/75">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white/80 py-16">
                    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row">
                        <div className="flex-1">
                            <h2 className="text-3xl font-extrabold text-noche sm:text-4xl">Vales versus efectivo</h2>
                            <p className="mt-4 text-sm text-noche/70">
                                El comparativo muestra el impacto en la nomina cuando se opta por vales de despensa frente al pago tradicional en efectivo.
                            </p>
                        </div>
                        <div className="flex-1 space-y-8">
                            <ComparisonTable title="Empresa" rows={EMPRESA_ROWS} />
                            <ComparisonTable title="Empleado" rows={EMPLEADO_ROWS} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

