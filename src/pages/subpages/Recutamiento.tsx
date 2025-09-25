import Headers from "../../components/header.tsx";
import Footers from "../../components/footer.tsx";

const HERO_TAGS = [
  "Tiempo de cobertura de 4 días hábiles*",
  "Modelo por vacante",
];

const HERO_DESCRIPTION = "Cubrimos perfiles Técnicos, Operativos, Administrativos, Profesionales y Pre-Gerenciales.";

const HERO_GALLERY = [
  "/img/tarjetas/Fondo-tarjetas/400x400/AB.png",
  "/img/tarjetas/Fondo-tarjetas/400x400/Impuestos.png",
  "/img/tarjetas/Fondo-tarjetas/400x400/Nomina.png",
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
      <Headers />
      <main className="bg-fondo-cremita text-noche">
        <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black leading-tight text-cardeno sm:text-5xl lg:text-[56px] lg:leading-[1]">
                Reclutamiento y
                <br className="hidden sm:block" />
                Selección de
                <br className="hidden sm:block" />
                Personal
              </h1>
              <p className="mt-5 text-xl font-semibold italic text-noche">
                Eficiente, Efectivo y sin complicaciones.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-noche">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-cardeno/15 ring-1 ring-cardeno/30"
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-cardeno text-[11px] font-bold text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex max-w-2xl items-start gap-3 text-base font-medium text-noche">
                <span
                  className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cardeno text-[11px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{HERO_DESCRIPTION}</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-mango px-7 py-3 text-sm font-extrabold text-noche shadow-sm transition hover:bg-mango/90 focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                >
                  Agenda una consulta
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-noche px-7 py-3 text-sm font-semibold text-noche transition hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[420px] rounded-[48px] border border-cardeno/30 bg-white/75 px-6 py-16 text-center text-xs font-semibold uppercase tracking-[0.35em] text-cardeno/70 shadow-xl shadow-cardeno/15">
                Área para fotografía
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {HERO_GALLERY.map((src) => (
                  <div
                    key={src}
                    className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-md shadow-cardeno/15"
                  >
                    <img
                      src={src}
                      alt="Destacado reclutamiento"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="text-2xl font-extrabold text-cardeno">La propuesta de valor</h2>
          <p className="mt-4 text-base leading-relaxed text-noche/85">
            Combinamos expertos locales, tecnología de búsqueda y procesos estandarizados de selección más velocidad, mejor calidad y menor rotación por contratación.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white/70 p-8 shadow-sm shadow-cardeno/10">
              <h3 className="text-xl font-bold text-cardeno">Garantías y diferenciales</h3>
              <ul className="mt-4 space-y-3 text-sm text-noche/85">
                {GARANTIAS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cardeno" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white/70 p-8 shadow-sm shadow-cardeno/10">
                <h3 className="text-xl font-bold text-cardeno">Listos para cubrir tus vacantes</h3>
                <p className="mt-3 text-sm text-noche/85">
                  Cuéntanos el perfil y la cantidad de personal que requieres. Te regresamos una propuesta y un tiempo estimado de cobertura. Sin compromiso.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-noche/85">
                  {LISTOS.map((item) => (
                    <li key={item}>&bull; {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-cardeno/20 p-6 text-sm text-noche/75">
                <p>Payrolling Tech© 2025 Payrolling Tech México</p>
                <p className="mt-1">Blvd. Palmas Hills 1 Valle de las Palmas</p>
                <p className="mt-1">52787 Naucalpan de Juárez, Mex.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: "≤4 días", label: "Tiempo típico de cobertura" },
              { value: "3x", label: "Más candidatos calificados por vacante" },
              { value: "30%", label: "Reducción de costo por contratación" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-3xl bg-cardeno text-white px-6 py-8 text-center shadow-lg shadow-cardeno/30"
              >
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <p className="mt-3 text-sm font-medium text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <h3 className="text-2xl font-extrabold text-cardeno">Proceso claro, orientado a resultados</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map((step) => (
              <div key={step.paso} className="rounded-3xl bg-white/80 p-6 shadow-sm shadow-cardeno/10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cardeno text-base font-bold text-white">
                  {step.paso}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-noche">{step.titulo}</h4>
                <p className="mt-2 text-sm text-noche/80">{step.detalle}</p>
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
