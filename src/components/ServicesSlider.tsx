import { useRef, useCallback } from "react";

type Card = {
  title: string;
  color: string; // tailwind bg- token (custom)
  img: string;   // absolute path from public (frente)
  imgBack?: string; // ← opcional: reverso
};

const CARDS: Card[] = [
  {
    title: "Reclutamiento",
    color: "bg-cardeno",
    img: "/img/img-tarjetas/Tarjeta reclutamiento_frente.webp",
    // imgBack: "/img/img-tarjetas/Tarjeta reclutamiento_reverso.webp",
  },
  {
    title: "Nómina",
    color: "bg-mango",
    img: "/img/img-tarjetas/Tarjeta Nomina_frente.webp",
    // imgBack: "/img/img-tarjetas/Tarjeta Nomina_reverso.webp",
  },
  {
    title: "Vales",
    color: "bg-cereza",
    img: "/img/img-tarjetas/Tarjeta vales_frente.webp",
    // imgBack: "/img/img-tarjetas/Tarjeta vales_reverso.webp",
  },
  {
    title: "Adelantos Nómina",
    color: "bg-nevado",
    img: "/img/img-tarjetas/Tarjeta adelantos nomina_frente.webp",
    // imgBack: "/img/img-tarjetas/Tarjeta adelantos nomina_reverso.webp",
  },
  {
    title: "Seguros de vida",
    color: "bg-futura",
    img: "/img/img-tarjetas/Tarjeta_Seguros de vida_frente.webp",
    // imgBack: "/img/img-tarjetas/Tarjeta_Seguros de vida_reverso.webp",
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
      {/* ===== Desktop: stack/overlap con flip 3D y expansión ===== */}
      <div className="hidden md:block">
        <div
          className="
            relative w-full max-w-full mx-auto overflow-x-hidden
            md:[--card-w:260px] md:[--overlap:85px]  md:[--card-h:360px]
            lg:[--card-w:280px] lg:[--overlap:120px] lg:[--card-h:380px]
            xl:[--card-w:300px] xl:[--overlap:130px] xl:[--card-h:400px]
            2xl:[--card-w:320px] 2xl:[--overlap:135px] 2xl:[--card-h:420px]
          "
          style={{
            width: "calc(var(--card-w) + calc(4 * var(--overlap)))",
            height: "calc(var(--card-h) + 24px)", // margen para hover
          }}
        >
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="
                absolute bottom-0 group
                transition-transform duration-300 will-change-transform
                hover:scale-105 hover:-translate-y-1 hover:!z-[100]
                [perspective:1200px]
              "
              style={{
                width: "var(--card-w)",
                height: "var(--card-h)",
                left: `calc(${i} * var(--overlap))`,
                zIndex: 10 + i, // orden base del “stack”
              }}
            >
              {/* Contenedor que rota 180° con un pequeño delay para que se note la expansión primero */}
              <div
                className="
                  relative h-full w-full transform-gpu
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                  group-hover:[transition-delay:120ms]
                "
              >
                {/* Cara frontal */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl border border-black/5 shadow-xl
                    bg-white/90 backdrop-blur overflow-hidden
                    [backface-visibility:hidden]
                  "
                >
                  <div
                    className={`${c.color} text-white inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold shadow absolute left-3 top-3 z-10`}
                  >
                    {c.title}
                  </div>
                  <div className="h-full w-full flex items-center justify-center bg-neutral-50">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="max-h-[86%] w-auto object-contain select-none pointer-events-none"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Cara trasera (rota 180° para que se vea derecha al voltear) */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl border border-black/5 shadow-xl
                    bg-white/90 backdrop-blur overflow-hidden
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <div
                    className={`${c.color} text-white inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold shadow absolute left-3 top-3 z-10`}
                  >
                    {c.title}
                  </div>
                  <div className="h-full w-full flex items-center justify-center bg-neutral-50">
                    <img
                      src={c.imgBack ?? c.img}
                      alt={`${c.title} reverso`}
                      className="max-h-[86%] w-auto object-contain select-none pointer-events-none"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mobile sin cambios (carrusel) ===== */}
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
                bg-white/90 backdrop-blur overflow-hidden
              "
              style={{ width: 300, height: 380 }}
            >
              <div className="relative h-full w-full">
                <div
                  className={`${c.color} text-white inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold shadow absolute left-3 top-3 z-10`}
                >
                  {c.title}
                </div>
                <div className="h-full w-full flex items-center justify-center bg-neutral-50">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="max-h-[86%] w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
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
