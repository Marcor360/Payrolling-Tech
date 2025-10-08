import { useRef, useEffect, } from "react";
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
    href: "/nom35",
  },
];

// ⬇️ Ahora acepta showCTA para poder ocultarlo en desktop
const BackBodyCTA = ({ c, showCTA = true }: { c: Card; showCTA?: boolean }) => (
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

    {showCTA ? (
      c.href?.startsWith("/") ? (
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
      )
    ) : null}
  </div>
);

export default function ServicesSlider() {
  const hScroller = useRef<HTMLDivElement>(null); // desktop
  const cfWrapRef = useRef<HTMLDivElement>(null); // coverflow mobile/tablet

  // Coverflow + autoplay + flip en centrado + press&hold pause
  useEffect(() => {
    const wrap = cfWrapRef.current;
    if (!wrap) return;

    const items = Array.from(
      wrap.querySelectorAll<HTMLDivElement>("[data-cfcard]")
    );
    if (!items.length) return;

    let ticking = false;
    let centeredIdx = 0;

    const setCentered = (idx: number) => {
      items.forEach((el, i) => {
        const isC = i === idx;

        // marcar el <article> (por si quieres estilos)
        el.classList.toggle("is-centered", isC);
        if (isC) el.setAttribute("data-centered", "true");
        else el.removeAttribute("data-centered");

        // swap por opacidad (fiable en móviles)
        const front = el.querySelector<HTMLElement>("[data-front]");
        const back = el.querySelector<HTMLElement>("[data-back]");
        if (front && back) {
          front.style.opacity = isC ? "0" : "1";
          back.style.opacity = isC ? "1" : "0";
          back.style.pointerEvents = isC ? "auto" : "none";
          front.style.pointerEvents = isC ? "none" : "auto";
        }
      });
    };

    const updateCentered = () => {
      // Centro del viewport del carrusel en coords de pantalla
      const wrapRect = wrap.getBoundingClientRect();
      const midX = wrapRect.left + wrap.clientWidth / 2;

      let best = 0;
      let bestDist = Infinity;

      items.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - midX);

        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      centeredIdx = best;
      setCentered(best);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateCentered();
        ticking = false;
      });
    };

    wrap.addEventListener("scroll", onScroll, { passive: true });
    updateCentered();

    // Autoplay (bucle)
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let timer: number | null = null;
    const STEPS_MS = 3600;

    const stopAuto = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const startAuto = () => {
      if (prefersReduced) return;
      stopAuto();
      timer = window.setInterval(() => {
        const next = (centeredIdx + 1) % items.length;
        items[next].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }, STEPS_MS);
    };

    startAuto();

    // Press & Hold → pausa autoplay y desactiva snap
    let holding = false;
    const holdStart = () => {
      holding = true;
      stopAuto();
      (wrap as HTMLDivElement).style.scrollSnapType = "none";
    };
    const holdEnd = () => {
      if (!holding) return;
      holding = false;
      (wrap as HTMLDivElement).style.scrollSnapType = "x mandatory";
      startAuto();
    };

    wrap.addEventListener("pointerdown", holdStart);
    wrap.addEventListener("pointerup", holdEnd);
    wrap.addEventListener("pointercancel", holdEnd);
    wrap.addEventListener("touchstart", holdStart, { passive: true });
    wrap.addEventListener("touchend", holdEnd, { passive: true });

    // Pausa también al interactuar con puntero
    wrap.addEventListener("pointerenter", stopAuto);
    wrap.addEventListener("pointerleave", startAuto);

    return () => {
      wrap.removeEventListener("scroll", onScroll as any);
      wrap.removeEventListener("pointerdown", holdStart as any);
      wrap.removeEventListener("pointerup", holdEnd as any);
      wrap.removeEventListener("pointercancel", holdEnd as any);
      wrap.removeEventListener("touchstart", holdStart as any);
      wrap.removeEventListener("touchend", holdEnd as any);
      wrap.removeEventListener("pointerenter", stopAuto as any);
      wrap.removeEventListener("pointerleave", startAuto as any);
      stopAuto();
    };
  }, []);

  const desktopTrackWidth =
    "calc(var(--stack-offset, 0px) + var(--card-w) + 4 * var(--overlap) + var(--safe-w, 0px))";

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
            xl:[--card-w:240px] xl:[--overlap:165px] xl:[--card-h:325px] xl:[--safe-w:24px] xl:[--stack-offset:0px]
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
                {/* Frente (SOLO imagen) */}
                <div className="absolute inset-0 rounded-2xl border border-black/5 shadow-xl overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="block h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                {/* Reverso (contenido unificado) — CTA oculto en desktop */}
                <div className="absolute inset-0 rounded-2xl border border-black/5 shadow-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={c.imgBack ?? c.img}
                    alt={`${c.title} reverso`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <BackBodyCTA c={c} showCTA={false} />
                </div>
              </div>

              {/* ⬇️ Overlay: hace TODA la card clicable en desktop */}
              {c.href?.startsWith("/") ? (
                <Link
                  to={c.href}
                  className="absolute inset-0 rounded-2xl z-[200] focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label={`Ir a ${c.title}`}
                >
                  <span className="sr-only">{`Ir a ${c.title}`}</span>
                </Link>
              ) : (
                <a
                  href={c.href ?? "#"}
                  className="absolute inset-0 rounded-2xl z-[200] focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label={`Ir a ${c.title}`}
                >
                  <span className="sr-only">{`Ir a ${c.title}`}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mobile/Tablet: Coverflow con swap por opacidad en centrado ===== */}
      <div className="lg:hidden relative py-6">
        <div
          ref={cfWrapRef}
          className="
      relative w-full overflow-x-auto overflow-y-visible
      snap-x snap-mandatory px-6
      [-ms-overflow-style:none] [scrollbar-width:none]
    "
          aria-label="Servicios"
        >
          <div className="flex items-stretch gap-6 min-w-max">
            {/* separador para centrar la 1ª */}
            <span className="shrink-0 w-[7vw] sm:w-[10vw]" aria-hidden />

            {CARDS.map((c) => (
              <article
                key={c.title}
                data-cfcard
                className="
    group relative shrink-0 snap-center
    w-[78vw] max-w-[360px] h-[440px]
    sm:w-[64vw] sm:max-w-[420px] sm:h-[460px]
    md:w-[56vw] md:max-w-[460px] md:h-[480px]
    transition-transform duration-300 will-change-transform
  "
              >
                {/* Capa FRONT */}
                <div
                  data-front
                  className="absolute inset-0 rounded-2xl border border-black/5 shadow-xl overflow-hidden
               transition-opacity duration-500"
                  style={{ opacity: 1 }}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="block h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                {/* Capa BACK (idéntica a desktop), inicia oculta — CTA visible en mobile */}
                <div
                  data-back
                  className="absolute inset-0 rounded-2xl border border-black/5 shadow-xl overflow-hidden
               transition-opacity duration-500 opacity-0 pointer-events-none"
                >
                  <img
                    src={c.imgBack ?? c.img}
                    alt={`${c.title} reverso`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <BackBodyCTA c={c} />
                </div>
              </article>
            ))}

            {/* separador final para centrar la última */}
            <span className="shrink-0 w-[7vw] sm:w-[10vw]" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
