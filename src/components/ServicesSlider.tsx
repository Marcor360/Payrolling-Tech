import { useRef, useCallback } from "react";

type Card = {
  title: string;
  color: string;   // reservado por si lo usas después
  img: string;     // frente
  imgBack?: string;// reverso (opcional)
};

const CARDS: Card[] = [
  {
    title: "Reclutamiento",
    color: "bg-cardeno",
    img: "/img/img-tarjetas/Tarjeta_reclutamiento_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-1.webp",
  },
  {
    title: "Nómina",
    color: "bg-mango",
    img: "/img/img-tarjetas/Tarjeta_Nomina_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-2.webp",
  },
  {
    title: "Vales",
    color: "bg-cereza",
    img: "/img/img-tarjetas/Tarjeta_vales_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-3.webp",
  },
  {
    title: "Adelantos Nómina",
    color: "bg-nevado",
    img: "/img/img-tarjetas/Tarjeta_adelantos nomina_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-1.webp",
  },
  {
    title: "Seguros de vida",
    color: "bg-futura",
    img: "/img/img-tarjetas/Tarjeta_Seguros de vida_frente.webp",
    imgBack: "/img/tarjetas/Fondo-tarjetas/tarjeta-2.webp",
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
            relative w-full max-w-full mx-auto overflow-hidden
            md:[--card-w:260px] md:[--overlap:85px]  md:[--card-h:360px]
            lg:[--card-w:280px] lg:[--overlap:120px] lg:[--card-h:380px]
            xl:[--card-w:300px] xl:[--overlap:130px] xl:[--card-h:400px]
            2xl:[--card-w:320px] 2xl:[--overlap:135px] 2xl:[--card-h:420px]
          "
          style={{
            // ancho total = card-w + 4*overlap (5 cartas)
            width: "calc(var(--card-w) + calc(4 * var(--overlap)))",
            // +24px para que el scale no provoque overflow vertical
            height: "calc(var(--card-h) + 24px)",
          }}
        >
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="
                absolute bottom-0 group origin-bottom
                transition-transform duration-300 will-change-transform
                hover:scale-105 hover:-translate-y-1 hover:!z-[100]
                [perspective:1200px]
              "
              style={{
                width: "var(--card-w)",
                height: "var(--card-h)",
                left: `calc(${i} * var(--overlap))`,
                // === Opción B: solo invertimos quién queda arriba ===
                zIndex: 10 + (CARDS.length - i),
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
                    className="block h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mobile: sin títulos e imagen al 100% ===== */}
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

        {/* Flechas */}
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
