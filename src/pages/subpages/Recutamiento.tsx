import Headers from "../../components/header.tsx";
import Footers from "../../components/footer.tsx";
import BotonCobertura from "/img/tarjetas/Botones/Blanco.png";
import BotonCandidatos from "/img/tarjetas/Botones/Cardeno.png";
import BotonCosto from "/img/tarjetas/Botones/Mango.png";
import Costotext from "/img/textos/Costostext.png";

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

              <div className="mt-10 max-w-2xl">
                <h2 className="text-2xl font-extrabold text-cardeno">La propuesta de valor</h2>
                <p className="mt-3 text-base leading-relaxed text-black">
                  Combinamos expertos locales, tecnología de búsqueda y procesos estandarizados de selección para darte más velocidad, mejor calidad y menor rotación por contratación.
                </p>
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
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 sm:scroll-px-0">
            {HERO_METRICS.map((metric) => (
              <article
                key={metric.title}
                className="relative min-w-[85vw] flex-shrink-0 snap-center overflow-hidden rounded-3xl shadow-lg shadow-black/15 sm:min-w-0 sm:flex-auto"
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
            </div>
          </div>
        </section>

        <section className="bg-cardeno text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center lg:gap-20">
            <div className="max-w-sm lg:max-w-none lg:justify-self-start lg:pl-4">
              <h3 className="text-3xl font-black leading-tight text-white sm:text-[34px]">Proceso claro, orientado a resultados</h3>
              <ol className="mt-10 list-none space-y-5 sm:space-y-6">
                {PROCESO.map((step) => (
                  <li key={step.paso} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-extrabold text-cardeno shadow-lg shadow-black/10">
                      {step.paso}
                    </span>
                    <div className="max-w-xs sm:max-w-sm lg:max-w-md">
                      <h4 className="text-lg font-semibold text-white">{step.titulo}</h4>
                      <p className="mt-1 text-sm text-white/90">{step.detalle}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex justify-center lg:justify-center">
              <img
                src={Costotext}
                alt="Costo? Pagas solo por vacantes cubiertas."
                className="w-full max-w-[480px] sm:max-w-[620px] lg:max-w-[760px] xl:max-w-[820px]"
              />
            </div>
          </div>
        </section>
        <section className="bg-noche py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-16">
            <form className="w-full max-w-[560px] rounded-3xl bg-fondo-cremita p-8 text-black shadow-2xl shadow-black/30">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Nombre*
                  <input
                    type="text"
                    name="nombre"
                    placeholder="María López"
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Empresa*
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Tu compañía SA de CV"
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Correo*
                  <input
                    type="email"
                    name="correo"
                    placeholder="nombre@empresa.com"
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  WhatsApp*
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="+52 55 0000 0000"
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  />
                </label>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold sm:col-span-2">
                  Perfiles a cubrir*
                  <input
                    type="text"
                    name="perfiles"
                    placeholder="Ej. Ejecutivo de ventas senior en Monterrey"
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Volumen estimado*
                  <select
                    name="volumen"
                    defaultValue=""
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="1-3">1-3</option>
                    <option value="3-10">3-10</option>
                    <option value="mas-10">Más de 10</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Modalidad*
                  <select
                    name="modalidad"
                    defaultValue=""
                    required
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="por-vacante">Por vacante</option>
                    <option value="competencias">Competencias</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold sm:col-span-2">
                  Mensaje
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder="Cuéntanos detalles, tiempos, seniority, etc."
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/40"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-mango px-6 py-3 text-base font-extrabold text-black shadow-md transition hover:bg-mango/90 focus:outline-none focus:ring-2 focus:ring-mango/60"
              >
                Solicitar cotización
              </button>
              <p className="mt-3 text-center text-xs text-black/60">
                Al enviar aceptas el tratamiento de datos conforme a nuestro Aviso de Privacidad.
              </p>
            </form>

            <div className="flex flex-col justify-center gap-6">
              <div>
                <h3 className="mt-4 text-3xl font-black text-mango">
                  Listos para cubrir tus vacantes
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/90">
                  Cuéntanos el perfil y la cantidad de personal que requieres. Te regresamos una propuesta y un tiempo estimado de cobertura. Sin compromiso.
                </p>
              </div>
              <ul className="space-y-3 text-base text-white/90">
                {LISTOS.map((item) => (
                  <li key={item}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </>
  );
}
