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
      "Combinamos la experiencia \nde expertos locales, tecnologías \nde búsquedas y procesos \nestandarizados de selección \npara lograr contrataciones más rápidas \nde mayor calidad y con menor rotación.",
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
      "Maquila y autoservicio de nómina\nasegurando el cumplimiento de las normas fiscales y de seguridad. \nEliminando viejos errores \ny garantizando tranquilidad tanto para tus empleados \ncomo para tus colaboradores.",
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
  const hScroller = useRef<HTMLDivElement>(null); // desktop arrows (se conserva)
  const vWrapRef = useRef<HTMLDivElement>(null);  // mobile "atardecer"


  // MOBILE: efecto "atardecer" (entra de derecha→centro→izquierda) + flip al centrar
  useEffect(() => {
    const wrap = vWrapRef.current;
    if (!wrap) return;

    const items = Array.from(
      wrap.querySelectorAll<HTMLDivElement>("[data-vcard]")
    );

    // knobs (ajusta a tu gusto)
    const MAX_SHIFT = 140;   // px → cuánto se mueve de derecha a izquierda
    const MAX_FADE = 0.35;   // opacidad al alejarse del centro
    const THRESHOLD = 0.12;  // qué tan cerca del centro para voltear

    let ticking = false;

    const update = () => {
      const wRect = wrap.getBoundingClientRect();
      const centerY = wRect.top + wRect.height / 2;

      items.forEach((item) => {
        const r = item.getBoundingClientRect();
        const itemCenter = r.top + r.height / 2;

        // d ∈ [-1, 1] relativo al centro del contenedor
        let d = (itemCenter - centerY) / (wRect.height / 2);
        if (d > 1) d = 1;
        if (d < -1) d = -1;

        // Atardecer: entra desde la derecha (d=+1 => +MAX_SHIFT),
        // en el centro (d=0 => 0), sale a la izquierda (d=-1 => -MAX_SHIFT)
        const shiftX = d * MAX_SHIFT;
        const rotZ = d * -2;          // leve inclinación
        const scale = 1 - 0.08 * Math.abs(d);
        const opacity = 1 - MAX_FADE * Math.abs(d);

        item.style.transform = `
          translateX(${shiftX}px)
          rotateZ(${rotZ}deg)
          scale(${scale})
        `;
        item.style.opacity = `${opacity}`;

        // Flip cuando está centrada
        const centered = Math.abs(d) < THRESHOLD;
        if (centered) item.classList.add("is-centered");
        else item.classList.remove("is-centered");
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    wrap.addEventListener("scroll", onScroll, { passive: true });
    // inicial
    update();

    return () => {
      wrap.removeEventListener("scroll", onScroll as any);
    };
  }, []);

  const desktopTrackWidth = "calc(var(--stack-offset, 0px) + var(--card-w) + 4 * var(--overlap) + var(--safe-w, 0px))";

  return (
    <div className="w-full overflow-visible">
      {/* ===== Desktop: stack superpuesto ===== */}
      <div className="hidden lg:flex flex-col items-center">
        <div
          ref={hScroller}
          className="
            relative w-full max-w-none mx-auto md:mx-auto overflow-visible [contain:paint]
            md:[--card-w:220px] md:[--overlap:140px] md:[--card-h:340px] md:[--safe-w:16px] md:[--stack-offset:16px]
            lg:[--card-w:300px] lg:[--overlap:220px] lg:[--card-h:400px] lg:[--safe-w:28px] lg:[--stack-offset:28px]
            xl:[--card-w:280px] xl:[--overlap:200px] xl:[--card-h:400px] xl:[--safe-w:32px] xl:[--stack-offset:32px]
            2xl:[--card-w:340px] 2xl:[--overlap:260px] 2xl:[--card-h:460px] 2xl:[--safe-w:48px] 2xl:[--stack-offset:48px]
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
                transition-[transform,opacity] duration-150 will-change-transform
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
                        className={`text-base font-extrabold leading-tight whitespace-pre-line ${titleColorFor(
                          c.title
                        )}`}
                      >
                        {c.backTitle}
                      </h3>
                      <p
                        className={`mt-2 text-xs leading-relaxed whitespace-pre-line ${bodyColorFor(
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
