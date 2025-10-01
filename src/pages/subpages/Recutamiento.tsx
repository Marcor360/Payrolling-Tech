import { useEffect, useRef, useState } from "react";
import Headers from "../../components/header.tsx";
import Footers from "../../components/footer.tsx";
import BotonCobertura from "/img/tarjetas/Botones/Blanco.png";
import BotonCandidatos from "/img/tarjetas/Botones/Cardeno.png";
import BotonCosto from "/img/tarjetas/Botones/Mango.png";
import Costotext from "/img/textos/Costostext.png";
import Reclutamiento1 from "/img/img-tarjetas/Reclutamiento1.webp";

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
  titleClass?: string;
  captionClass?: string;
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
    titleClass: "text-white",
    captionClass: "text-white/80",
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
  const procesoRef = useRef<HTMLOListElement | null>(null);
  const [procesoVisible, setProcesoVisible] = useState(false);

  useEffect(() => {
    const target = procesoRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcesoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Headers variant="dark" />
      <main className="bg-fondo-cremita text-black">
        <section className="mx-auto max-w-6xl px-4 pb-32 pt-24 sm:pt-28 lg:pb-36">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-black leading-tight text-cardeno sm:text-5xl lg:text-[56px] lg:leading-[1] text-center lg:text-left">
                Reclutamiento y{" "}
                <br className="hidden sm:block" />
                Selección de{" "}
                <br className="hidden sm:block" />
                Personal
              </h1>
              <p className="mt-5 text-xl font-semibold italic text-center lg:text-left">
                Eficiente, Efectivo y sin complicaciones.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold lg:justify-start">
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
                <div className="mt-3 flex max-w-2xl items-start justify-center gap-3 text-base font-medium lg:justify-start">
                  <span
                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-noche text-[11px] font-bold text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{HERO_DESCRIPTION}</span>
                </div>
              )}

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
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

              <div className="mt-10 max-w-2xl text-center lg:mx-0 lg:text-left">
                <h2 className="text-2xl font-extrabold text-cardeno">La propuesta de valor</h2>
                <p className="mt-3 text-base leading-relaxed text-black">
                  Combinamos expertos locales, tecnología de búsqueda y procesos estandarizados de selección para darte más velocidad, mejor calidad y menor rotación por contratación.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[540px]">
                <div className="overflow-hidden rounded-[48px] shadow-xl shadow-black/10">
                  <img
                    src={Reclutamiento1}
                    alt="Equipo colaborando"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative z-10 -mt-20 flex flex-col items-center gap-3 px-4 sm:-mt-16 sm:flex-row sm:items-stretch sm:justify-center lg:-mt-24 lg:gap-6 lg:justify-between">
                  {HERO_METRICS.map((metric) => {
                    const titleClass = metric.titleClass ?? "text-black";
                    const captionClass = metric.captionClass ?? "text-black/80";
                    const baseTitleClass = "text-xl font-extrabold lg:text-lg";
                    const baseCaptionClass = "mt-2 text-sm font-medium sm:mt-3 sm:text-sm lg:mt-3 lg:text-xs";

                    return (
                      <article
                        key={metric.title}
                        className="relative w-full max-w-[220px] overflow-hidden rounded-3xl shadow-lg shadow-black/15 sm:flex-1 sm:max-w-none md:max-w-[240px] lg:max-w-[300px] min-h-[140px] sm:min-h-[160px] lg:min-h-[190px]"
                      >
                        <img
                          src={metric.image}
                          alt={metric.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 py-4 text-center sm:gap-3 sm:px-7 sm:py-5 lg:gap-2 lg:px-8 lg:py-5">
                          <p className={[baseTitleClass, titleClass].join(" ")}>{metric.title}</p>
                          <p className={[baseCaptionClass, captionClass].join(" ")}>
                            {metric.caption}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
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
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[minmax(0,520px)_minmax(0,520px)] 2xl:grid-cols-[minmax(0,560px)_minmax(0,640px)] lg:items-center lg:gap-20 2xl:gap-24 lg:justify-items-center 2xl:justify-items-end">
            <div className="max-w-sm md:mx-auto md:text-center lg:mx-0 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl lg:justify-self-start lg:pl-4 lg:text-left">
              <h3 className="text-3xl font-black leading-tight text-white sm:text-[34px] md:text-center lg:text-left lg:whitespace-nowrap">Proceso claro, orientado a resultados</h3>
              <ol
                ref={procesoRef}
                className={`mt-10 list-none space-y-5 sm:space-y-6 md:mx-auto md:max-w-xl lg:mx-0 proceso-list ${procesoVisible ? "proceso-list--visible" : ""}`}
              >
                {PROCESO.map((step) => (
                  <li key={step.paso} className="flex items-start gap-4 md:flex-col md:items-center md:gap-3 md:text-center lg:flex-row lg:text-left">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-extrabold text-cardeno shadow-lg shadow-black/10 md:mb-2">
                      {step.paso}
                    </span>
                    <div className="max-w-xs sm:max-w-sm md:max-w-lg md:text-center lg:max-w-md lg:text-left">
                      <h4 className="text-lg font-semibold text-white">{step.titulo}</h4>
                      <p className="mt-1 text-sm text-white/90">{step.detalle}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex items-center justify-center lg:justify-end lg:justify-self-end lg:pr-6 2xl:justify-self-end 2xl:pl-16">
              <img
                src={Costotext}
                alt="Costo? Pagas solo por vacantes cubiertas."
                className="w-full max-w-[480px] sm:max-w-[620px] lg:max-w-[760px] xl:max-w-[820px] mx-auto lg:mx-0 lg:ml-auto 2xl:max-w-[940px] 2xl:ml-auto 2xl:translate-x-12"
              />
            </div>
          </div>
        </section>
        <section className="bg-noche py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 justify-items-center lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-16 lg:justify-items-start">
            <form className="order-2 w-full max-w-[560px] rounded-3xl bg-fondo-cremita p-8 text-black shadow-2xl shadow-black/30 lg:order-1">
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

            <div className="order-1 flex flex-col items-center justify-center gap-6 text-center md:order-1 md:text-center lg:order-2 lg:items-start lg:text-left">
              <div>
                <h3 className="mt-4 text-4xl font-black text-mango">
                  Listos para cubrir tus vacantes
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/90 text-center md:text-center lg:text-left">
                  Cuéntanos el perfil y la cantidad de personal que requieres. Te regresamos una propuesta y un tiempo estimado de cobertura. Sin compromiso.
                </p>
              </div>
              <ul className="space-y-3 text-lg text-white/90 text-center md:text-center lg:text-left">
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








