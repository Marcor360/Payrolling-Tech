import Footer from "../../components/footer.tsx";

const NAV_ITEMS = [
    { label: "Servicios", hasDropdown: true },
    { label: "Contacto" },
    { label: "Blog" },
];

const KEY_RESULTS = [
    { title: "<=4 dias para cubrir", subtitle: "una vacante" },
    { title: "3x mas candidatos", subtitle: "calificados por vacante" },
    { title: "30% de reduccion de costo", subtitle: "por contratacion" },
];

type ChecklistItem = { strong: string; text: string };

const GUARANTEE_POINTS: ChecklistItem[] = [
    {
        strong: "Reposicion sin costo",
        text: " si el talento no se mantiene en el periodo pactado.",
    },
    {
        strong: "Reportes semanales y metricas",
        text: " (pipeline, entrevistas y estado de cada vacante).",
    },
    {
        strong: "Confidencialidad total y proteccion de datos",
        text: " (privacidad y consentimiento).",
    },
];

const READY_POINTS: ChecklistItem[] = [
    {
        strong: "Respuesta en menos de 24 h habiles",
        text: ".",
    },
    {
        strong: "NDA disponible",
        text: ".",
    },
    {
        strong: "Cobertura nacional (Mexico) y roles remotos LATAM",
        text: ".",
    },
];

const FIRST_STEP = {
    number: 1,
    title: "Perfil ideal y brief",
    description: "Definicion de objetivos, seniority, competencias y requisitos criticos.",
};

const PLACEHOLDER_SEGMENTS = Array.from({ length: 3 });

function CheckItem({ strong, text }: ChecklistItem) {
    return (
        <li className="flex items-start gap-3 text-base leading-relaxed text-[#0a0a33] sm:text-lg">
            <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#050633]/60 bg-[#050633] text-white shadow-[0_6px_14px_rgba(4,6,51,0.35)]">
                <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.5 6.5L5.5 10.5L14.5 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
            <span>
                <span className="font-semibold text-[#050633]">{strong}</span>
                {text}
            </span>
        </li>
    );
}

function OutlineSegment({
  isLast,
  className = "",
}: {
  isLast?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-[200px] flex-1 ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-full w-full bg-white"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 50px) 0, 100% 50%, calc(100% - 50px) 100%, 0 100%)",
          border: "2px solid #050633",
          borderRadius: isLast ? "0 40px 40px 0" : "0",
        }}
      />
    </div>
  );
}

function LeadProcessStep() {
  return (
    <div className="relative z-10 min-h-[200px] rounded-[48px] border-2 border-[#050633] bg-[#050633] px-8 py-8 text-white shadow-[0_25px_45px_rgba(5,6,51,0.4)]">
      <div
        className="absolute -right-16 top-0 hidden h-full w-[150px] bg-[#050633] md:block"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#febe0b] text-2xl font-black text-[#050633] shadow-inner shadow-black/20">
          {FIRST_STEP.number}
        </span>
        <div>
          <p className="text-2xl font-semibold">{FIRST_STEP.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/90">
            {FIRST_STEP.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WalmartPage() {
  return (
    <div className="min-h-screen bg-[#f4f3e9] text-[#08082c]">
            <header className="bg-[#050633] text-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-5 lg:px-6">
                    <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#febe0b] via-[#ff1d77] to-[#761bff] text-2xl font-black text-white shadow-lg shadow-black/30">
                            P
                        </div>
                        <div className="leading-tight">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                                Payrolling
                            </p>
                            <p className="text-lg font-semibold">Tech</p>
                        </div>
                    </div>
                    <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                className="flex items-center gap-1 text-white/85 transition hover:text-white"
                            >
                                <span>{item.label}</span>
                                {item.hasDropdown && (
                                    <svg
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1.5L6 6.5L11 1.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main>
                <section className="px-4 pb-8 pt-12 sm:pb-12">
                    <div className="mx-auto max-w-6xl rounded-xl border-4 border-[#050633] bg-white px-4 py-10 sm:px-10 sm:py-16">
                        <div className="relative flex min-h-[260px] items-center justify-center rounded-lg border border-[#050633]/30 bg-white px-6 py-10 text-center text-3xl font-semibold tracking-wider text-[#050633] sm:text-4xl">
                            VIDEO FER
                            <span
                                className="absolute left-6 bottom-8 hidden h-1 w-32 bg-[#050633] sm:block"
                                style={{ transform: "rotate(25deg)" }}
                                aria-hidden="true"
                            />
                            <span
                                className="absolute right-6 top-8 hidden h-1 w-32 bg-[#050633] sm:block"
                                style={{ transform: "rotate(25deg)" }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-[#050633] px-4 py-12 text-white">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="text-2xl font-black leading-tight md:text-[2.5rem]">
                            <span className="inline-block rounded-sm bg-[#febe0b] px-4 py-1 text-[#050633] shadow-[0_6px_16px_rgba(0,0,0,0.25)] md:-skew-x-[6deg]">
                                <span className="text-cardeno">“</span> <span className="-skew-x-[0deg] font-extrabold text-cardeno">Reducir tiempos</span>
                            </span>{" "}
                            <span className="block mt-3 md:mt-2">
                                de cobertura empieza con la decision correcta.”
                            </span>
                        </p>
                    </div>
                </section>

                <section className="px-4 pb-16 pt-12">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="text-base text-[#0b0b35]/80 sm:text-lg">
                            Combinamos{" "}
                            <span className="font-semibold text-[#050633]">
                                expertos locales, tecnologia y procesos estandarizados
                            </span>{" "}
                            para lograr{" "}
                            <span className="font-semibold text-[#050633]">
                                contrataciones mas rapidas, de mayor calidad y con menor
                                rotacion.
                            </span>
                        </p>
                        <h2 className="mt-6 text-4xl font-black tracking-tight text-cardeno">
                            Resultados clave
                        </h2>
                    </div>
                    <div className="mx-auto mt-10 max-w-6xl rounded-[48px] border-2 border-cardeno/50 bg-white px-6 py-6 shadow-[0_16px_35px_rgba(116,63,208,0.13)] sm:px-10">
                        <div className="grid gap-6 text-center text-[#050633] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#c8a9ff]">
                            {KEY_RESULTS.map((stat) => (
                                <div key={stat.title} className="px-4 py-4 sm:px-8">
                                    <p className="text-lg font-semibold leading-tight">
                                        {stat.title}
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-[#030318]/80">
                                        {stat.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 pb-12">
                    <div className="mx-auto max-w-5xl space-y-12">
                        <div className="rounded-[36px] border-2 border-[#120a3d] bg-[#fefaf1] px-5 py-8 shadow-[0_25px_40px_rgba(18,10,61,0.08)] sm:px-8 sm:py-10">
                            <div className="grid gap-10 md:grid-cols-2 md:items-center">
                                <div>
                                    <h3 className="text-3xl font-black text-cardeno">
                                        Garantias y diferenciales
                                    </h3>
                                    <ul className="mt-6 space-y-6">
                                        {GUARANTEE_POINTS.map((point) => (
                                            <CheckItem key={point.strong} {...point} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="overflow-hidden rounded-[32px] border-2 border-[#0f0938]/10 bg-white shadow-inner shadow-white/60">
                                    <img
                                        src="/img/walmart/1.webp"
                                        alt="Equipo revisando reportes de reclutamiento"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[36px] border-2 border-[#120a3d] bg-[#fefaf1] px-5 py-8 shadow-[0_25px_40px_rgba(18,10,61,0.08)] sm:px-8 sm:py-10">
                            <div className="grid gap-10 md:grid-cols-2 md:items-center">
                                <div>
                                    <div className="overflow-hidden rounded-[32px] border-2 border-[#0f0938]/10 bg-white shadow-inner shadow-white/60">
                                        <img
                                            src="/img/walmart/2.webp"
                                            alt="Personas evaluando candidatos"
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-cardeno">
                                        Listos para cubrir tus vacantes
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-[#0b0b35]/80 sm:text-lg">
                                        Cuentanos el perfil y la cantidad de personal que necesitas.
                                        Te enviamos una{" "}
                                        <span className="font-semibold text-[#050633]">
                                            propuesta y un tiempo estimado de cobertura
                                        </span>{" "}
                                        sin compromiso.
                                    </p>
                                    <ul className="mt-6 space-y-6">
                                        {READY_POINTS.map((point) => (
                                            <CheckItem key={point.strong} {...point} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        <section className="px-4 pb-16">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black text-cardeno">Nuestro Proceso</h2>
          </div>
          <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
              <div className="md:flex-[1.15]">
                <LeadProcessStep />
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
                {PLACEHOLDER_SEGMENTS.map((_, index) => (
                  <OutlineSegment
                    key={`segment-${index}`}
                    isLast={index === PLACEHOLDER_SEGMENTS.length - 1}
                    className={`md:flex-1 ${index === 0 ? "md:-ml-16" : index === 1 ? "md:-ml-20" : "md:-ml-20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
            </main>

            <Footer />
        </div>
    );
}
