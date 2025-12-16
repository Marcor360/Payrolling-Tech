import { useEffect, useState } from "react";
import Footer from "../../components/footer.tsx";
import Navbar from "../../components/header.tsx";

const KEY_RESULTS = [
    { title: "<=4 días para cubrir", subtitle: "una vacante" },
    { title: "3x más candidatos", subtitle: "calificados por vacante" },
    { title: "30% de reducción de costo", subtitle: "por contratación" },
];

type ChecklistItem = { strong: string; text: string };

const GUARANTEE_POINTS: ChecklistItem[] = [
    {
        strong: "Reposición sin costo",
        text: " si el talento no se mantiene en el período pactado.",
    },
    {
        strong: "Reportes semanales y métricas",
        text: " (pipeline, entrevistas y estado de cada vacante).",
    },
    {
        strong: "Confidencialidad total y protección de datos",
        text: " (privacidad y consentimiento).",
    },
];

const READY_POINTS: ChecklistItem[] = [
    {
        strong: "Respuesta en menos de 24 h hábiles",
        text: ".",
    },
    {
        strong: "NDA disponible",
        text: ".",
    },
    {
        strong: "Cobertura nacional (México) y roles remotos LATAM",
        text: ".",
    },
];

type ProcessStep = {
    number: string;
    title: string;
    description: string;
};

const PROCESS_STEPS: ProcessStep[] = [
    {
        number: "01",
        title: "Perfil ideal y brief",
        description:
            "Definición de objetivos, seniority, competencias y requisitos críticos.",
    },
    {
        number: "02",
        title: "Sourcing multicanal",
        description:
            "Búsqueda directa con IA, base propia, referidos y plataformas líderes.",
    },
    {
        number: "03",
        title: "Candidatos y entrevistas",
        description:
            "Envío de perfiles validados y coordinación de entrevistas con tu equipo.",
    },
    {
        number: "04",
        title: "Cierre y onboarding",
        description:
            "Acompañamiento en oferta, referencias y arranque sin riesgo.",
    },
];

function CheckItem({ strong, text }: ChecklistItem) {
    return (
        <li className="flex items-start gap-3 text-base leading-relaxed text-[#0a0a33] sm:text-lg">
            <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#050633]/60 bg-[#050633] text-white">
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

function ProcessStepCard({ number, title, description }: ProcessStep) {
    return (
        <div className="relative overflow-hidden rounded-[36px] bg-[#050633] px-7 py-8 text-white shadow-[0_30px_55px_rgba(5,6,51,0.35)] before:absolute before:-top-16 before:right-6 before:h-32 before:w-32 before:rounded-full before:bg-white/5 before:blur-3xl before:content-['']">
            <div className="relative z-10 flex flex-col gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#febe0b] text-lg font-black text-[#050633] shadow-inner shadow-black/20 sm:h-14 sm:w-14 sm:text-2xl">
                    {number}
                </span>
                <div>
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="mt-2 text-base leading-relaxed text-white/85">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function WalmartPage() {
    const [showScheduleLabel, setShowScheduleLabel] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setShowScheduleLabel(true), 5000);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f3e9] text-[#08082c]">
            <Navbar variant="dark" linkTarget="_blank" showLogin={false} logoHref="/wmc" />
            <main>
                <section className="px-4 pb-4 pt-8 sm:pb-8 sm:pt-12">
                    <div className="mx-auto max-w-7xl px-0 py-4 sm:px-10 sm:py-10">
                        <div className="mx-auto w-full max-w-[1200px] rounded-[44px] border-[6px] border-cardeno bg-white shadow-[0_35px_60px_rgba(5,6,51,0.25)]">
                            <div className="relative overflow-hidden rounded-[36px] bg-white">
                                <div className="aspect-video overflow-hidden rounded-[32px] bg-[#050633]">
                                    <video
                                        className="h-full w-full object-cover"
                                        controls
                                        playsInline
                                    >
                                        <source src="/video/walmart.mp4" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de video.
                                    </video>
                                </div>
                                <span className="pointer-events-none absolute left-6 top-6 hidden h-12 w-12 rounded-full bg-[#ff4bc1]/30 blur-2xl sm:block" />
                                <span className="pointer-events-none absolute bottom-6 right-6 hidden h-12 w-12 rounded-full bg-[#febe0b]/40 blur-2xl sm:block" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#050633] px-4 py-12 text-white">
                    <div className="mx-auto max-w-6xl text-center">
                        <p className="text-2xl font-bold leading-tight md:text-[2.5rem] md:font-black">
                            <span className="inline-flex items-center rounded-md bg-[#febe0b] px-6 py-3 text-[#050633] shadow-[0_6px_16px_rgba(0,0,0,0.25)] md:-skew-x-[6deg]">
                                <span className="mr-3 text-4xl font-bold text-cardeno sm:font-black">"</span>
                                <span className="-skew-x-[0deg] font-semibold text-cardeno sm:font-extrabold">
                                    Reducir tiempos
                                </span>
                            </span>
                            <span className="ml-3 inline text-white font-semibold sm:font-black">
                                de cobertura empieza con la decisión correcta."
                            </span>
                        </p>
                    </div>
                </section>

                <section className="px-4 pb-16 pt-12">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="text-base text-[#0b0b35]/80 sm:text-lg">
                            Combinamos{" "}
                            <span className="font-semibold text-[#050633]">
                                expertos locales, tecnología y procesos estandarizados
                            </span>{" "}
                            para lograr{" "}
                            <span className="font-semibold text-[#050633]">
                                contrataciones más rápidas, de mayor calidad y con menor
                                rotación.
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
                                        Garantías y diferenciales
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
                                        Cuéntanos el perfil y la cantidad de personal que necesitas.
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
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl font-black text-cardeno">Nuestro Proceso</h2>
                        <p className="mt-3 text-base text-[#0b0b35]/80 sm:text-lg">
                            Simple y orientado a resultados. Te acompañamos de principio a fin.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 w-full max-w-6xl rounded-[48px] border border-white/60 bg-[#fefaf1] px-5 py-8 shadow-[0_25px_45px_rgba(5,6,51,0.15)] sm:px-10 sm:py-12">
                        <div className="grid gap-6 md:grid-cols-2">
                            {PROCESS_STEPS.map((step) => (
                                <ProcessStepCard key={step.number} {...step} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer
                phoneDisplay="55 3827 8103"
                phoneHref="+525538278103"
                email="ffonseca@payrolling-tech.com"
            />
            <div className="fixed bottom-24 right-6 z-40 flex flex-col items-center gap-4 md:bottom-28 md:right-10">
                <span
                    className={`rounded-full bg-white/95 px-4 py-1 text-sm font-semibold text-[#050633] shadow-lg transition-all duration-300 ${showScheduleLabel ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
                >
                    Agendar reunión
                </span>
                <a
                    href="https://calendar.app.google/MnpkYVxEqDaAQgeo6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-[#febe0b] via-[#ff1d77] to-[#761bff] text-white shadow-[0_20px_35px_rgba(5,6,51,0.35)] transition hover:scale-105"
                    aria-label="Agendar reunión"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M4 11h16" />
                        <path d="M7 14h.013" />
                        <path d="M10.01 14h.005" />
                        <path d="M13.01 14h.005" />
                        <path d="M16.015 14h.005" />
                        <path d="M13.015 17h.005" />
                        <path d="M7.01 17h.005" />
                        <path d="M10.01 17h.005" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
