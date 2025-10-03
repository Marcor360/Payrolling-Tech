import { useRef, useEffect } from "react";
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
      return "text-cardeno";
    case "Vales":
      return "text-mango";
    case "Adelantos Nómina":
      return "text-mango";
    case "Seguros de vida":
      return "text-cardeno";
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
      "Combinamos la experiencia de expertos locales, tecnologías de búsquedas y procesos estandarizados de selección, para lograr contrataciones más rápidas y de mayor calidad.",
    cta: "Conoce más",
    href: "/reclutamiento",
  },
  {
    title: "Nómina",
    color: "bg-mango",
    img: "/img/img-tarjetas/Tarjeta_Nomina_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-2.webp",
    backTitle: "Nómina",
    backText:
      "Maquila y autoservicio de nómina asegurando el cumplimiento de las normas fiscales y de seguridad.",
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
    href: "/vales",
  },
  {
    title: "Adelantos Nómina",
    color: "bg-nevado",
    img: "/img/img-tarjetas/Tarjeta_adelantos nomina_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-1.webp",
    backTitle: "Adelantos y\npréstamos sobre\nnómina",
    backText: "Centraliza la administración \nde vales y préstamos de \nhasta 3 meses.",
    cta: "Conoce más",
    href: "/beneficios",
  },
  {
    title: "Seguros de vida",
    color: "bg-futura",
    img: "/img/img-tarjetas/Tarjeta_Seguros de vida_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-2.webp",
    backTitle: "Seguros de gastos\nmédicos y vida",
    backText:
      "Beneficios que aumentan la lealtad y reducen la rotación, deducibles fiscalmente para optimizar costos, proteger a tu equipo y fortalecer tu competitividad.",
    cta: "Conoce más",
    href: "#",
  },
];

export default function ServicesSlider() {
  const hScroller = useRef<HTMLDivElement>(null); // desktop arrows (se conserva)
  const vWrapRef = useRef<HTMLDivElement>(null);  // mobile "atardecer"


  // MOBILE: efecto "atardecer" optimizado para scroll suave
  useEffect(() => {
    const wrap = vWrapRef.current;
    if (!wrap) return;

    const items = Array.from(
      wrap.querySelectorAll<HTMLDivElement>("[data-vcard]")
    );
    if (!items.length) return;

    // knobs (ajusta a tu gusto)
    const MAX_SHIFT = 120; // px -> cuanto se mueve de derecha a izquierda
    const MAX_FADE = 0.28; // opacidad al alejarse del centro
    const THRESHOLD = 0.18; // que tan cerca del centro para voltear

    type Metric = {
      el: HTMLDivElement;
      center: number;
    };

    let metrics: Metric[] = [];
    let ticking = false;

    const readMetrics = () => {
      metrics = items.map((item) => ({
        el: item,
        center: item.offsetTop + item.offsetHeight / 2,
      }));
    };

    const applyShadow = (cb: () => void) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        cb();
        ticking = false;
      });
    };

    const update = () => {
      if (!metrics.length) {
        readMetrics();
      }

      const halfViewport = wrap.clientHeight / 2 || 1;
      const viewportCenter = wrap.scrollTop + halfViewport;

      metrics.forEach(({ el, center }) => {
        const raw = (center - viewportCenter) / halfViewport;
        const clamped = Math.max(-1, Math.min(1, raw));
        const eased = Math.sign(clamped) * Math.pow(Math.abs(clamped), 0.75);

        const shiftX = eased * MAX_SHIFT;
        const rotZ = eased * -1.6;
        const scale = 1 - 0.06 * Math.abs(eased);
        const opacity = 1 - MAX_FADE * Math.abs(eased);

        el.style.transform = `
          translateX(${shiftX}px)
          rotateZ(${rotZ}deg)
          scale(${scale})
        `;
        el.style.opacity = `${opacity}`;

        if (Math.abs(clamped) < THRESHOLD) {
          el.classList.add("is-centered");
        } else {
          el.classList.remove("is-centered");
        }
      });
    };

    const recompute = () => {
      readMetrics();
      update();
    };

    const onScroll = () => applyShadow(update);

    const handleResize = () => applyShadow(recompute);

    wrap.addEventListener("scroll", onScroll, { passive: true });

    const resizeObserver = (typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => recompute())
      : null);

    resizeObserver?.observe(wrap);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    recompute();
    const rafId = requestAnimationFrame(recompute);

    return () => {
      wrap.removeEventListener("scroll", onScroll as any);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const desktopTrackWidth = "calc(var(--stack-offset, 0px) + var(--card-w) + 4 * var(--overlap) + var(--safe-w, 0px))";

  return (
    <div className="w-full overflow-visible">
      {/* ===== Desktop: stack superpuesto ===== */}
      <div className="hidden lg:flex flex-col items-start xl:items-center">
        <div
          ref={hScroller}
          className="
            relative w-full max-w-none overflow-visible [contain:paint] xl:mx-auto
            md:[--card-w:210px] md:[--overlap:150px] md:[--card-h:320px] md:[--safe-w:14px] md:[--stack-offset:0px]
            lg:[--card-w:230px] lg:[--overlap:170px] lg:[--card-h:340px] lg:[--safe-w:18px] lg:[--stack-offset:0px]
            xl:[--card-w:240px] xl:[--overlap:165px] xl:[--card-h:310px] xl:[--safe-w:24px] xl:[--stack-offset:0px]
            2xl:[--card-w:235px] 2xl:[--overlap:240px] 2xl:[--card-h:300px] 2xl:[--safe-w:36px] 2xl:[--stack-offset:0px]
          "
          style={{
            width: desktopTrackWidth,
            height: "calc(var(--card-h) + 28px)",
          }}
        >
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="
                absolute bottom-0 group origin-bottom
                transition-transform duration-300 will-change-transform
                md:hover:scale-[1.02] lg:hover:scale-[1.04] hover:-translate-y-1 hover:!z-[100]
                [perspective:1200px]
              "
              style={{
                width: "var(--card-w)",
                height: "var(--card-h)",
                left: `calc(var(--stack-offset, 0px) + ${i} * var(--overlap))`,
                zIndex: 10 + (CARDS.length - i),
              }}
            >
              {/* Flipper desktop (hover) */}
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
                <div className="absolute inset-0 rounded-2xl border border-black/5 shadow-xl overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="block h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                {/* Reverso */}
                <div className="absolute inset-0 rounded-2xl border border-black/5 shadow-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={c.imgBack ?? c.img}
                    alt={`${c.title} reverso`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="relative z-10 h-full w-full flex flex-col">
                    <div className="px-5 py-6 md:px-6 md:py-7 mt-auto">
                      <h3
                        className={`text-lg md:text-xl font-extrabold leading-snug whitespace-pre-line ${titleColorFor(
                          c.title
                        )}`}
                      >
                        {c.backTitle}
                      </h3>
                      <p
                        className={`mt-3 text-xs md:text-sm leading-normal whitespace-pre-line ${bodyColorFor(
                          c.title
                        )}`}
                      >
                        {c.backText}
                      </p>
                    </div>

                    {c.href?.startsWith("/") ? (
                      <Link
                        to={c.href}
                        className="block px-5 py-3 md:py-3.5 text-center font-semibold text-white bg-white/12 backdrop-blur border-t border-white/25 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-b-2xl"
                        aria-label={`Conoce más sobre ${c.title}`}
                      >
                        {c.cta ?? "Conoce más"}
                      </Link>
                    ) : (
                      <a
                        href={c.href ?? "#"}
                        className="block px-5 py-3 md:py-3.5 text-center font-semibold text-white bg-white/12 backdrop-blur border-t border-white/25 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-b-2xl"
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

      {/* ===== Mobile: “atardecer” (der → centro → izq) + flip al centrar ===== */}
      <div className="lg:hidden relative md:flex md:justify-center">
        <div
          ref={vWrapRef}
          className="
            relative w-full h-[80vh] max-h-[640px]
            overflow-y-auto px-4
            md:w-auto md:h-[70vh] md:max-h-[580px] md:px-0
            snap-y snap-mandatory
            [perspective:1000px] [transform-style:preserve-3d]
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          aria-label="Servicios"
        >
          {/* separadores más altos para que la primera tarjeta alcance el centro */}
          <div className="h-[28vh] min-h-[140px]" />
          {CARDS.map((c) => (
            <article
              key={c.title}
              data-vcard
              className="
                group
                snap-center shrink-0 mx-auto my-6
                w-[86vw] max-w-[340px] h-[420px]
                md:w-[68vw] md:max-w-[420px] md:h-[460px]
                rounded-2xl border border-black/5 shadow-xl overflow-hidden
                transition-[transform,opacity] duration-300 ease-out will-change-transform
                [transform-style:preserve-3d]
              "
              style={{
                transform: "translateX(140px) rotateZ(0deg) scale(1)",
                opacity: 0.8,
              }}
            >
              {/* Flipper controlado por .is-centered en el <article> */}
              <div
                className="
                  relative h-full w-full transform-gpu
                  transition-transform duration-600
                  [transform-style:preserve-3d]
                  group-[.is-centered]:[transform:rotateY(180deg)]
                "
              >
                {/* Frente */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="block h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                {/* Reverso */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={c.imgBack ?? c.img}
                    alt={`${c.title} reverso`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="relative z-10 h-full w-full flex flex-col">
                    {/* Texto abajo */}
                    <div className="px-5 py-5 mt-auto">
                      <h3
                        className={`text-base font-extrabold leading-snug whitespace-pre-line ${titleColorFor(
                          c.title
                        )}`}
                      >
                        {c.backTitle}
                      </h3>
                      <p
                        className={`mt-2 text-xs leading-normal whitespace-pre-line ${bodyColorFor(
                          c.title
                        )}`}
                      >
                        {c.backText}
                      </p>
                    </div>

                    {/* Botón */}
                    {c.href?.startsWith("/") ? (
                      <Link
                        to={c.href}
                        className="block px-5 py-3 text-center font-semibold text-white bg-white/12 backdrop-blur border-t border-white/25 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-b-2xl"
                        aria-label={`Conoce más sobre ${c.title}`}
                      >
                        {c.cta ?? "Conoce más"}
                      </Link>
                    ) : (
                      <a
                        href={c.href ?? "#"}
                        className="block px-5 py-3 text-center font-semibold text-white bg-white/12 backdrop-blur border-t border-white/25 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-b-2xl"
                        aria-label={`Conoce más sobre ${c.title}`}
                      >
                        {c.cta ?? "Conoce más"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="h-[28vh] min-h-[140px]" />
        </div>
      </div>
    </div>
  );
}














