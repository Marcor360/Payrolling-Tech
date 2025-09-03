import { useRef } from "react";

type Card = {
  title: string;
  color: string; // tailwind bg- token
  img: string;   // absolute path from public
};

const CARDS: Card[] = [
  {
    title: "Reclutamiento",
    color: "bg-cardeno",
    img: "/img/img-tarjetas/Tarjeta reclutamiento_frente.webp",
  },
  {
    title: "Nómina",
    color: "bg-mango",
    img: "/img/img-tarjetas/Tarjeta Nomina_frente.webp",
  },
  {
    title: "Vales",
    color: "bg-cereza",
    img: "/img/img-tarjetas/Tarjeta vales_frente.webp",
  },
  {
    title: "Adelantos Nómina",
    color: "bg-nevado",
    img: "/img/img-tarjetas/Tarjeta adelantos nomina_frente.webp",
  },
  {
    title: "Seguros de vida",
    color: "bg-futura",
    img: "/img/img-tarjetas/Tarjeta_Seguros de vida_frente.webp",
  },
];

export default function ServicesSlider() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const step = card ? card.clientWidth + 16 /* gap */ : 280;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Desktop: stack/overlap */}
      <div className="hidden md:block">
        <div className="relative w-full max-w-xl">
          <div className="flex items-end">
            {CARDS.map((c, i) => (
              <div
                key={c.title}
                className={
                  // base card styles
                  "group relative rounded-2xl shadow-xl border border-white/50 backdrop-blur bg-white/30 overflow-hidden transition-transform duration-300 " +
                  // stacked overlap effect
                  (i === 0 ? "" : " -ml-24") +
                  // raise on hover
                  " hover:-translate-y-1"
                }
                style={{ zIndex: 10 + i }}
              >
                {/* image */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-80 w-56 object-contain select-none pointer-events-none"
                  draggable={false}
                />
                {/* side ribbon */}
                <div className={`absolute left-2 top-4 ${c.color} text-white px-3 py-2 rounded-md rotate-[-90deg] origin-left text-sm font-bold shadow`}
                    style={{ transform: "rotate(-90deg) translateX(-100%)", transformOrigin: "left top" }}
                >
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll-snap, 1 card a la vez */}
      <div className="md:hidden relative">
        <div className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory px-1" ref={scroller}>
          {CARDS.map((c) => (
            <div
              key={c.title}
              data-card
              className="snap-center shrink-0 rounded-2xl shadow-xl border border-white/50 backdrop-blur bg-white/30 overflow-hidden"
              style={{ width: 280 }}
            >
              <div className="relative">
                <img src={c.img} alt={c.title} className="h-80 w-72 object-contain" />
                <div className={`absolute left-3 top-3 ${c.color} text-white px-3 py-1.5 rounded-md text-xs font-bold shadow`}>
                  {c.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Nav arrows (ocultas en muy pequeños si lo deseas) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-cardeno/80 text-white shadow hover:bg-cardeno"
            aria-label="Anterior"
            onClick={() => scrollByCard(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-cardeno/80 text-white shadow hover:bg-cardeno"
            aria-label="Siguiente"
            onClick={() => scrollByCard(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

