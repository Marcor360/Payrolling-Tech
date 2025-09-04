import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";

type Card = {
  title: string;
  color: string;
  img: string;
  imgBack?: string;
  backTitle: string;
  backText: string;
  cta?: string;
  href?: string;
};

// Color del TÍTULO por card
const titleColorFor = (title: string) => {
  switch (title) {
    case "Reclutamiento":
      return "text-mango";
    case "Nómina":
      return "text-noche";
    case "Vales":
      return "text-noche";
    case "Adelantos Nómina":
      return "text-mango";
    case "Seguros de vida":
      return "text-noche";
    default:
      return "text-white";
  }
};

// Color del CUERPO (backText)
const bodyColorFor = (title: string) =>
  title === "Nómina" || title === "Seguros de vida" ? "text-noche" : "text-white";

const CARDS: Card[] = [
  {
    title: "Reclutamiento",
    color: "bg-cardeno",
    img: "/img/img-tarjetas/Tarjeta_reclutamiento_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-1.webp",
    backTitle: "Reclutamiento",
    backText:
      "Localizamos el mejor talento \ncon herramientas digitales y \nalcance nacional, cubriendo \ntus vacantes de forma ágil \ncon perfiles que aportan valor \na tu negocio.",
    cta: "Conoce más",
    href: "#",
  },
  {
    title: "Nómina",
    color: "bg-mango",
    img: "/img/img-tarjetas/Tarjeta_Nomina_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-2.webp",
    backTitle: "Nómina",
    backText:
      "Ofrecemos maquila y \nautoservicio para generar \nnómina y cumplir con \nobligaciones fiscales y de \nseguridad social con precisión \ny 0 errores",
    cta: "Conoce más",
    href: "/nominas",
  },
  {
    title: "Vales",
    color: "bg-cereza",
    img: "/img/img-tarjetas/Tarjeta_vales_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-3.webp",
    backTitle: "Vales",
    backText:
      "Centraliza vales, simplifica \nprocesos y motiva a tu equipo, \ncon control total de gastos, \noptimización de recursos y \nmáximas deducciones fiscales",
    cta: "Conoce más",
    href: "#",
  },
  {
    title: "Adelantos Nómina",
    color: "bg-nevado",
    img: "/img/img-tarjetas/Tarjeta_adelantos nomina_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-1.webp",
    backTitle: "Adelantos y\npréstamos sobre\nnómina",
    backText: "Centraliza la administración \nde vales y préstamos de \nhasta 3 meses.",
    cta: "Conoce más",
    href: "#",
  },
  {
    title: "Seguros de vida",
    color: "bg-futura",
    img: "/img/img-tarjetas/Tarjeta_Seguros de vida_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-2.webp",
    backTitle: "Seguros de gastos\nmédicos y vida",
    backText:
      "Beneficios que aumentan la \nlealtad y reducen la rotación, \ndeducibles fiscalmente para \noptimizar costos, proteger a tu \nequipo y fortalecer tu \ncompetitividad.",
    cta: "Conoce más",
    href: "#",
  },
];

export default function ServicesSlider() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const style = getComputedStyle(card);
    const gap = parseInt(style.marginRight || "16", 10) || 16;
    const step = rect.width + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* ===== Desktop ===== */}
      <div className="hidden md:block">
        <div
          className="
            relative w-full max-w-full mx-auto overflow-hidden [contain:paint]
            md:[--card-w:260px] md:[--overlap:85px]  md:[--card-h:360px]
            lg:[--card-w:280px] lg:[--overlap:120px] lg:[--card-h:380px]
            xl:[--card-w:300px] xl:[--overlap:130px] xl:[--card-h:400px]
            2xl:[--card-w:320px] 2xl:[--overlap:135px] 2xl:[--card-h:420px]
            transform-gpu
            xl:-translate-x-2 2xl:-translate-x-3  /* ← desplazamos un poco a la izquierda solo en pantallas grandes */
          "
          style={{
            width: "calc(var(--card-w) + calc(4 * var(--overlap)))",
            height: "calc(var(--card-h) + 24px)",
          }}
        >
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="
                absolute bottom-0 group origin-bottom
                transition-transform duration-300 will-change-transform
                hover:scale-[1.04] hover:-translate-y-1 hover:!z-[100]  /* ← 1.04 para evitar overflow extremo */
                [perspective:1200px]
              "
              style={{
                width: "var(--card-w)",
                height: "var(--card-h)",
                left: `calc(${i} * var(--overlap))`,
                zIndex: 10 + (CARDS.length - i), // z-index invertido (Opción B)
              }}
            >
              {/* Flipper */}
              <div
                className="
                  relative h-full w-full transform-gpu
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                  group-hover:[transition-delay:120ms]
                "
              >
                {/* Frente */}
                <div
                  className="
                    absolute inset-0 rounded-2xl border border-black/5 shadow-xl
                    overflow-hidden [backface-visibility:hidden]
                  "
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="block h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                {/* Reverso */}
                <div
                  className="
                    absolute inset-0 rounded-2xl border border-black/5 shadow-xl
                    overflow-hidden [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <img
                    src={c.imgBack ?? c.img}
                    alt={`${c.title} reverso`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="relative z-10 h-full w-full flex flex-col">
                    {/* Texto anclado abajo */}
                    <div className="px-5 py-6 md:px-6 md:py-7 mt-auto">
                      <h3
                        className={`text-lg md:text-xl font-extrabold leading-tight whitespace-pre-line ${titleColorFor(
                          c.title
                        )}`}
                      >
                        {c.backTitle}
                      </h3>
                      <p
                        className={`mt-3 text-xs md:text-sm leading-relaxed whitespace-pre-line ${bodyColorFor(
                          c.title
                        )}`}
                      >
                        {c.backText}
                      </p>
                    </div>

                    {/* Botón: Link si es ruta interna, <a> si es externa */}
                    {c.href?.startsWith("/") ? (
                      <Link
                        to={c.href}
                        className="
                          block px-5 py-3 md:py-3.5 text-center font-semibold
                          text-white
                          bg-white/12 backdrop-blur border-t border-white/25
                          hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40
                          rounded-b-2xl
                        "
                        aria-label={`Conoce más sobre ${c.title}`}
                      >
                        {c.cta ?? "Conoce más"}
                      </Link>
                    ) : (
                      <a
                        href={c.href ?? "#"}
                        className="
                          block px-5 py-3 md:py-3.5 text-center font-semibold
                          text-white
                          bg-white/12 backdrop-blur border-t border-white/25
                          hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40
                          rounded-b-2xl
                        "
                        aria-label={`Conoce más sobre ${c.title}`}
                      >
                        {c.cta ?? "Conoce más"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mobile: carrusel (solo frente) ===== */}
      <div className="md:hidden relative">
        <div
          ref={scroller}
          className="
            w-full max-w-full
            flex items-stretch gap-4 overflow-x-auto px-1 py-2
            snap-x snap-mandatory scroll-smooth
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          aria-label="Servicios"
        >
          {CARDS.map((c) => (
            <article
              key={c.title}
              data-card
              className="
                snap-center shrink-0
                rounded-2xl border border-black/5 shadow-xl
                overflow-hidden
              "
              style={{ width: 300, height: 380 }}
            >
              <img
                src={c.img}
                alt={c.title}
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-cardeno/80 text-white shadow hover:bg-cardeno"
            aria-label="Anterior"
            onClick={() => scrollByCard(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-cardeno/80 text-white shadow hover:bg-cardeno"
            aria-label="Siguiente"
            onClick={() => scrollByCard(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
