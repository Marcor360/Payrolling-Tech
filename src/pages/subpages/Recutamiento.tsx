import Headers from "../../components/header.tsx";
import Footers from "../../components/footer.tsx";
import BotonCobertura from "/img/tarjetas/Botones/Blanco.png";
import BotonCandidatos from "/img/tarjetas/Botones/Cardeno.png";
import BotonCosto from "/img/tarjetas/Botones/Mango.png";

const HERO_TAGS = [
  "Tiempo de cobertura de 4 días hábiles*",
  "Modelo por vacante",
  "Administrativos, Profesionales y Pre-Gerenciales",
];

const HERO_DESCRIPTION = "";

type HeroMetric = {
  image: string;
  title: string;
  caption: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    image: BotonCobertura,
    title: "≤4 días",
    caption: "Tiempo típico de cobertura",
  },
  {
    image: BotonCandidatos,
    title: "3x",
    caption: "Más candidatos calificados por vacante",
  },
  {
    image: BotonCosto,
    title: "30%",
    caption: "Reducción de costo por contratación",
  },
];

const GARANTIAS = [
  "Reposición sin costo si el talento no se mantiene en el periodo pactado.",
  "Reportes semanales y métricas (pipeline, entrevistas, estado por vacante).",
  "Confidencialidad y protección de datos (aviso de privacidad y consentimiento).",
];

const LISTOS = [
  "Respuesta en <24 h hábiles",
  "NDA disponible",
  "Atención nacional (MX) y roles remotos LATAM",
];

const PROCESO = [
  {
    paso: "1",
    titulo: "Perfil ideal y brief",
    detalle:
      "Alineamos objetivo, seniority, compensación y competencias críticas.",
  },
  {
    paso: "2",
    titulo: "Sourcing multicanal",
    detalle:
      "Modelo de búsqueda directa con IA, base propia, referidos y plataformas líderes.",
  },
  {
    paso: "3",
    titulo: "Candidatos y entrevistas",
    detalle:
      "Enviamos perfiles validados; coordinamos entrevistas con tu equipo y el candidato.",
  },
  {
    paso: "4",
    titulo: "Cierre y Onboarding",
    detalle: "Soporte en oferta, referencias y arranque para reducir riesgo.",
  },
];

export default function Reclutamiento() {
  return (
    <>
      <Headers variant="dark" />
      <main className="bg-fondo-cremita text-black">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black leading-tight text-cardeno sm:text-5xl lg:text-[56px] lg:leading-[1]">
                Reclutamiento y
                <br className="hidden sm:block" />
                Selección de
                <br className="hidden sm:block" />
                Personal
              </h1>
              <p className="mt-5 text-xl font-semibold italic">
                Eficiente, Efectivo y sin complicaciones.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-noche text-[11px] font-bold text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {tag}
                  </span>
                ))}
              </div>

              {HERO_DESCRIPTION && (
                <div className="mt-3 flex max-w-2xl items-start gap-3 text-base font-medium">
                  <span
                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-noche text-[11px] font-bold text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{HERO_DESCRIPTION}</span>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-mango px-7 py-3 text-sm font-extrabold text-black shadow-sm transition hover:bg-mango/90 focus:outline-none focus:ring-2 focus:ring-black/40"
                >
                  Agenda una consulta
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-black px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[420px] rounded-[48px] border border-black/20 bg-white/80 px-6 py-16 text-center text-xs font-semibold uppercase tracking-[0.35em] text-black shadow-xl shadow-black/10">
                Área para fotografía
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <div className="grid gap-4 sm:grid-cols-3">
            {HERO_METRICS.map((metric) => (
              <article
                key={metric.title}
                className="relative overflow-hidden rounded-3xl shadow-lg shadow-black/15"
              >
                <img
                  src={metric.image}
                  alt={metric.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-black">
                  <p className="text-2xl font-extrabold">{metric.title}</p>
                  <p className="mt-2 text-sm font-medium text-black/80">{metric.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white/80 p-8 shadow-sm shadow-black/10">
              <h3 className="text-xl font-bold text-cardeno">Garantías y diferenciales</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {GARANTIAS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cardeno" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white/80 p-8 shadow-sm shadow-black/10">
                <h3 className="text-xl font-bold text-cardeno">Listos para cubrir tus vacantes</h3>
                <p className="mt-3 text-sm">
                  Cuéntanos el perfil y la cantidad de personal que requieres. Te regresamos una propuesta y un tiempo estimado de cobertura. Sin compromiso.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {LISTOS.map((item) => (
                    <li key={item}>&bull; {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-black/10 p-6 text-sm">
                <p>Payrolling Tech© 2025 Payrolling Tech México</p>
                <p className="mt-1">Blvd. Palmas Hills 1 Valle de las Palmas</p>
                <p className="mt-1">52787 Naucalpan de Juárez, Mex.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <h3 className="text-2xl font-extrabold text-cardeno">Proceso claro, orientado a resultados</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map((step) => (
              <div key={step.paso} className="rounded-3xl bg-white/80 p-6 shadow-sm shadow-black/10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cardeno text-base font-bold text-white">
                  {step.paso}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-black">{step.titulo}</h4>
                <p className="mt-2 text-sm text-black/80">{step.detalle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-24">
          <div className="rounded-3xl bg-cardeno px-8 py-10 text-white shadow-lg shadow-cardeno/30">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              ¿COSTO?
            </p>
            <h3 className="mt-4 text-2xl font-extrabold">Pagas sólo por vacantes cubiertas.</h3>
            <p className="mt-3 text-sm text-white/90">Transparencia total y sin sorpresas.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-cardeno shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Solicitar cotización
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </>
  );
}
