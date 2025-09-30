// ==============================================
// Página: Nóminas
// Descripción general:
//  - Hero con frase principal y palabra rotatoria (sinónimos de "errores")
//  - Slider / grilla de servicios (horizontal en móvil, grid en desktop)
//  - Video demostrativo
//  - CTA final
// Principios adoptados:
//  - Mantener animaciones simples (timers + transiciones CSS) para evitar jank.
//  - Evitar recálculos costosos del layout (no escalado dinámico de fuente).
//  - Separar responsabilidades: TextoAnimado sólo controla rotación de palabra.
//  - Accesibilidad: se usan etiquetas aria y texto oculto (sr-only) para lectores.
//  - Responsivo: salto de línea antes del último chip sólo en <= 1023px.
// NOTA: Si agregas más palabras largas, la lógica actual sigue funcionando; sólo revisar que no rompa el ancho en desktop.
// ==============================================
import { useEffect, useRef, useState, useLayoutEffect, useCallback } from "react";
import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import FondoHeadBubles from "/img/tarjetas/Fondo-tarjetas/FondoNomina.webp";

// Palabras rotatorias del hero. Mantener relativamente homogéneas en longitud para transiciones fluidas.
const palabrasAnimadas = ["errores","fallos","frenos","deslices"]; // puedes agregar más: ej. "inexactitudes"

// --------------------------------------------------
// Componente: TextoAnimado
// - Rota la palabra mostrada usando fade in/out.
// - El hero recalcula altura tras cada cambio (onWordChange) para evitar saltos.
// - Cambios temporales controlados por setTimeout.
// - Si se necesita pausar (ej: en hover) se puede añadir lógica futura.
// --------------------------------------------------
function TextoAnimado({ className = "", onWordChange }: { className?: string; onWordChange?: () => void }) {
    const [indice, setIndice] = useState(0);      // índice actual
    const [fadeIn, setFadeIn] = useState(true);   // estado de opacidad (fade control)
  const timeoutRef = useRef<number | null>(null);

    useEffect(() => { onWordChange?.(); }, [onWordChange]); // notifica al hero que puede recalcular altura

  useEffect(() => {
    let mounted = true; // bandera para evitar setState tras unmount
    const ciclo = () => { // bucle recursivo de cambios
      timeoutRef.current = window.setTimeout(() => {
    setFadeIn(false); // iniciar fade out
        timeoutRef.current = window.setTimeout(() => {
          if (!mounted) return;
          setIndice(p => (p + 1) % palabrasAnimadas.length); // siguiente palabra
          setFadeIn(true); // fade in nueva palabra
          requestAnimationFrame(() => requestAnimationFrame(() => onWordChange?.()));
          ciclo();
        }, 500);
      }, 2200);
    };
    ciclo();
    // Limpieza al desmontar: evita memory leaks de timeouts
    return () => { mounted = false; if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [onWordChange]);

                return (
                    <span
                        className={`inline-block transition-opacity duration-500 ${fadeIn ? 'opacity-100':'opacity-0'} font-extrabold ${className}`}
                    >
                        {palabrasAnimadas[indice]}
                    </span>
                );
}

// Componente reutilizable para el slider de servicios en móvil
// --------------------------------------------------
// Componente: SliderServicios
// - Lista centralizada de servicios.
// - Mobile: scroll horizontal con snap + dots.
// - Desktop: grilla (CSS grid) sin scroll horizontal.
// - IntersectionObserver: sólo activo en mobile para indicar card activa.
// --------------------------------------------------
function SliderServicios() {
    // Data centralizada: fácil de editar / reordenar / agregar
    const servicios: { texto: string; fondo: 'Mango' | 'Blanco' | 'Cardeno' }[] = [ // Ajustar orden / textos libremente
        { texto: 'Cálculo de nómina y timbrado de recibos mensual, quincenal o semanal.', fondo: 'Mango' },
        { texto: 'Control de asistencias, vacaciones, aguinaldo, finiquitos y liquidaciones.', fondo: 'Blanco' },
        { texto: 'Determinación de impuestos y retenciones (ISR, IMSS, INFONAVIT).', fondo: 'Cardeno' },
        { texto: 'Asesoría personalizada en materia Fiscal, Laboral y RR HH.', fondo: 'Mango' },
        { texto: 'Altas y bajas de empleados ante el IMSS y plataformas fiscales.', fondo: 'Blanco' },
        { texto: 'Atención y soporte personalizado de nuestra plataforma.', fondo: 'Cardeno' },
        { texto: 'Alertas y notificaciones.', fondo: 'Mango' },
        { texto: 'App para colaboradores (portal del colaborador).', fondo: 'Blanco' },
        { texto: 'Reportes personalizados.', fondo: 'Cardeno' },
        { texto: 'Integraciones STP para dispersión (ERP, SAP, Oracle).', fondo: 'Mango' },
    ];

    const sliderRef = useRef<HTMLDivElement | null>(null); // contenedor scrollable
    const cardRefs = useRef<HTMLElement[]>([]);            // refs a cada card (observación)
    const [activo, setActivo] = useState(0);               // índice activo (para dots)
    const [isMobile, setIsMobile] = useState(false);       // flag responsive
    const supportsSmooth = typeof document !== 'undefined' && 'scrollBehavior' in document.documentElement.style; // feature detection

    // Detecta si está en móvil (<= 640px) y escucha cambios de tamaño
    useEffect(() => { // escucha cambios de ancho para activar/desactivar modo slider
        const mq = window.matchMedia('(max-width: 639px)');
        const set = () => setIsMobile(mq.matches);
        set();
        mq.addEventListener('change', set);
        return () => mq.removeEventListener('change', set);
    }, []);

    // Sincroniza índice usando IntersectionObserver para mayor precisión
    useEffect(() => { // observa visibilidad de tarjetas sólo en mobile
        const slider = sliderRef.current;
        if (!slider) return;
        if (!isMobile) { // en desktop simplemente fija el primero
            setActivo(0);
            return;
        }
        const options: IntersectionObserverInit = {
            root: slider,
            rootMargin: '0px',
            threshold: Array.from({ length: 11 }, (_, i) => i / 10) // 0.0 ... 1.0
        };
        let frame: number | null = null;
        const observer = new IntersectionObserver(entries => {
            // Filtrar solo visibles
            const visibles = entries.filter(e => e.isIntersecting);
            if (!visibles.length) return;
            // Elegir la card con mayor ratio; si empate, la más cercana al centro
            const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
            let bestIdx = activosRef.current; // fallback al actual
            let bestScore = -1;
            visibles.forEach(e => {
                const el = e.target as HTMLElement;
                const idx = cardRefs.current.indexOf(el);
                if (idx === -1) return;
                const center = el.offsetLeft + el.offsetWidth / 2;
                const centerDist = Math.abs(center - sliderCenter);
                // Score: ratio principal, penalización ligera por distancia al centro
                const score = e.intersectionRatio - (centerDist / slider.clientWidth) * 0.1;
                if (score > bestScore) { bestScore = score; bestIdx = idx; }
            });
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                if (activosRef.current !== bestIdx) {
                    setActivo(bestIdx);
                    activosRef.current = bestIdx;
                }
            });
        }, options);

        // Ref para evitar setState redundante
        const activosRef = { current: activo } as { current: number };
        activosRef.current = activo;
        cardRefs.current.forEach(el => el && observer.observe(el));
        return () => {
            if (frame) cancelAnimationFrame(frame);
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile, servicios.length]);

    const irA = (idx: number) => { // scroll programado a card
        const slider = sliderRef.current; if (!slider) return;
        const target = slider.children[idx] as HTMLElement | undefined; if (!target) return;
        setActivo(idx);
        if (supportsSmooth) {
            slider.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
        } else {
            slider.scrollLeft = target.offsetLeft;
        }
    };

    // Auto avance cada 3s (loop) solo en móvil y si usuario no arrastra
    // Auto-scroll eliminado

    useEffect(() => {
    // Sin auto-scroll
    }, [isMobile]);

    return (
        <div className="mt-6 flex flex-col items-center w-full">
            <div
                id="slider-servicios"
                ref={sliderRef}
                className="flex w-full overflow-x-auto pb-3 pl-4 pr-4 gap-4 snap-x snap-mandatory scroll-smooth sm:grid sm:pl-0 sm:pr-0 sm:overflow-visible sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6"
            >
                {servicios.map((s, i) => {
                    // Color de texto según fondo (contraste)
                    const color = s.fondo === 'Blanco'
                        ? 'var(--color-noche)'
                        : s.fondo === 'Mango'
                            ? 'var(--color-noche)'
                            : 'var(--color-blanco)';
                    return (
                        <div
                            key={i}
                            ref={el => { if (el) cardRefs.current[i] = el; }}
                            className="relative shrink-0 snap-start rounded-2xl shadow-lg flex items-center justify-center aspect-[4/3] min-h-[120px] w-[90vw] min-w-[90vw] sm:w-full sm:min-w-0 md:min-h-[140px] lg:min-h-[160px] px-3 sm:px-4 md:px-5 text-center bg-cover bg-right-bottom transform-gpu md:transition md:duration-300 md:ease-out md:hover:-translate-y-2 md:hover:shadow-xl md:hover:scale-[1.03]"
                            style={{ backgroundImage: `url(/img/tarjetas/Botones/${s.fondo}.png)` }}
                        >
                            <span className="font-semibold text-xs sm:text-sm md:text-base leading-snug break-words" style={{ color }}>
                                {s.texto}
                            </span>
                        </div>
                    );
                })}
            </div>
            {/* Dots solo móvil */}
            <div className="flex justify-center items-center gap-2 mt-3 sm:hidden z-10">
                {servicios.map((_, idx) => (
                    <button
                        key={idx}
                        aria-label={`Ver servicio ${idx + 1}`}
                        onClick={() => irA(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            idx === activo ? 'bg-cardeno scale-110' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

// --------------------------------------------------
// Página principal: Nominas
// --------------------------------------------------
export default function Nominas() {
    // Calcular altura del header para centrar verticalmente sin que lo tape
    const [headerH, setHeaderH] = useState(0); // altura dinámica del header para centrar el hero
    useEffect(() => {
        const actualizar = () => {
            const h = document.querySelector('header')?.offsetHeight || 0;
            setHeaderH(h);
        };
        actualizar();
        window.addEventListener('resize', actualizar);
        return () => window.removeEventListener('resize', actualizar);
    }, []);

    // Nueva lógica responsiva: font-size fluido + escala si no cabe (mantener una sola línea en móviles pequeños)
    const heroLineRef = useRef<HTMLDivElement | null>(null);   // línea completa del hero
    const heroWrapperRef = useRef<HTMLDivElement | null>(null); // wrapper para medir altura
    // Eliminado manejo dinámico de salto: se controla sólo por CSS responsivo
    const originalFontSizeRef = useRef<string | null>(null); // almacena font-size inicial
    const rafRef = useRef<number | null>(null);              // id de requestAnimationFrame para throttling

    const recalcularHero = useCallback(() => { // asegura altura estable del hero
        const line = heroLineRef.current;
        const wrap = heroWrapperRef.current;
        if (!line || !wrap) return;
        if (!originalFontSizeRef.current) {
            originalFontSizeRef.current = getComputedStyle(line).fontSize;
        }
        if (originalFontSizeRef.current) line.style.fontSize = originalFontSizeRef.current;
        line.style.transform = 'none';
        line.style.letterSpacing = '';
        // Altura estable (aunque podríamos permitir flujo natural, se conserva para evitar micro-jumps)
        wrap.style.height = line.getBoundingClientRect().height + 'px';
    }, []);

    // Throttle / schedule recalculation to evitar múltiples cálculos en el mismo frame
    const programarRecalc = useCallback(() => { // throttle de recalculo
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => { rafRef.current = null; recalcularHero(); });
    }, [recalcularHero]);

    useLayoutEffect(() => { recalcularHero(); }, [recalcularHero]); // primera medición al montar

    useEffect(() => { // observa cambios de tamaño y orientación
        const r = new ResizeObserver(() => programarRecalc());
        if (heroWrapperRef.current) r.observe(heroWrapperRef.current);
        window.addEventListener('resize', programarRecalc);
        window.addEventListener('orientationchange', programarRecalc);
        return () => {
            r.disconnect();
            window.removeEventListener('resize', programarRecalc);
            window.removeEventListener('orientationchange', programarRecalc);
        };
    }, [programarRecalc]);

        return (
                                <div className="flex flex-col min-h-screen">
                                        {/* Estilos en-línea: controlan salto condicional y tamaño del chip final sin alterar CSS global */}
                                                                                                                        <style>{`
                                                                                                                            /* Desktop: una sola línea */
                                                                                                                            #heroLine.hero-line--force-break { flex-wrap: nowrap; }
                                                                                                                            /* Móviles y tablets: wrap + salto limpio + chip final centrado */
                                                                                                                            @media (max-width:1023px){
                                                                                                                                #heroLine.hero-line--force-break { flex-wrap: wrap; }
                                                                                                                                #heroLine.hero-line--force-break .hero-break { flex-basis:100%; height:0; width:0; padding:0; margin:0; }
                                                                                                                                #heroLine.hero-line--force-break .hero-chip--break-mobile { flex-basis:auto !important; margin-top:.30rem; }
                                                                                                                                #heroLine.hero-line--force-break .hero-chip--short { margin-left:auto; margin-right:auto; }
                                                                                                                            }
                                                                                                                            /* Chip final compacto (diagonales por default al quitar --rect) */
                                                                                                                            #heroLine.hero-line--force-break .hero-chip--short.hero-chip--tight .hero-chip__inner {
                                                                                                                                padding:.14em .48em .20em .50em;
                                                                                                                                letter-spacing:-0.35px;
                                                                                                                            }
                                                                                                                        `}</style>
            <section
                aria-label="Hero Nóminas"
                className="hero-section relative overflow-hidden text-white bg-cover bg-bottom"
                style={{ backgroundImage: `url(${FondoHeadBubles})` }}
            >
                <Headers variant="darkTransparent" />
                    <div
                        className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center text-center gap-6 py-10 md:py-14"
                        style={{ minHeight: `calc(100vh - ${headerH}px)` }}
                    >
                    {/* Hero textual recreado (sin imagen) para responsividad completa */}
                    <div className="w-full max-w-5xl flex flex-col items-center md:items-start">
                        <div className="relative w-full">
                            <h1 aria-label="Tu nómina rápido y sin errores" className="sr-only">Tu nómina rápido y sin errores</h1>
                            <div ref={heroWrapperRef} className="w-full overflow-visible hero-line-wrapper">
                                <div ref={heroLineRef} id="heroLine" className="hero-line hero-line--force-break justify-center md:justify-start font-extrabold leading-tight tracking-tight select-none text-white">
                                    <span className="hero-rot-word">Tu</span>
                                    <span className="hero-chip hero-chip--rect hero-chip--tight" style={{ ['--chip-bg' as any]:'#6f00ff' }}>
                                        <span className="hero-chip__inner hero-rot-word text-white">nómina</span>
                                    </span>
                                    <span className="hero-chip hero-chip--rect hero-chip--tight" style={{ ['--chip-bg' as any]:'#6f00ff' }}>
                                        <span className="hero-chip__inner hero-rot-word text-white">rápido</span>
                                    </span>
                                    <span className="hero-rot-word">y</span>
                                    {/* Separador que sólo fuerza el salto en <=1023px sin ensanchar el chip final */}
                                    <span className="hero-break" aria-hidden="true"></span>
                                    <span className="hero-chip hero-chip--tight hero-chip--break-mobile hero-chip--short" style={{ ['--chip-bg' as any]:'#6f00ff' }}>
                                        <span className="hero-chip__inner hero-rot-word text-white">sin <TextoAnimado className="rot-mango ml-2" onWordChange={programarRecalc} /></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Heading accesible oculto adicional con variantes semánticas */}
                    <h2 className="sr-only">Tu nómina rápido y sin errores, fallos y frenos</h2>
                    <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-snug">
                        tu <span className="font-bold text-white">activo</span> más importante para <span className="font-extrabold text-white">fortalecer tu negocio</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=528138646238&text=%C2%A1Hola%21+Quiero+m%C3%A1s+info+del+servicio+de+%2APayrolling+Tech%2A&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                        className="inline-block rounded-md bg-yellow-400 px-6 py-3 font-semibold text-noche shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 transition-colors"
                    >
                        Conoce nuestro servicio
                    </a>
                    {/* <img src={Text1} alt="Tu nómina rápido y sin errores" className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl h-auto opacity-70" /> */}
                </div>
            </section>
            <section className="grow">
                <div className="mx-auto w-full max-w-5xl px-4 pt-16">
                    {/* aqui va el video */}
                    <video
                        className="w-full h-auto rounded-md shadow-sm"
                        controls
                        playsInline
                        preload="metadata"
                        src="/video/vid-1.mp4"
                    >
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </section>
            <section className="py-10 pt-20">
                <div className="mx-auto w-full max-w-6xl px-4">
                    <h2 className="text-cardeno font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
                        ¿QUE INCLUYE NUESTRO SERVICIO?
                    </h2>
                    <SliderServicios />
                </div>
            </section>
            <section className="bg-cardeno py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="flex justify-center md:justify-start">
                            <a
                                href="https://api.whatsapp.com/send/?phone=528138646238&text=%C2%A1Hola%21+Quiero+m%C3%A1s+info+del+servicio+de+%2APayrolling+Tech%2A&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 md:px-10 md:py-5 text-noche font-extrabold text-lg md:text-2xl shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                                aria-label="Solicitar una demo por WhatsApp"
                            >
                                Solicitar una demo
                            </a>
                        </div>
                        <h2 className="text-white text-center md:text-right leading-tight">
                            <span className="text-2xl sm:text-3xl md:text-4xl text-white/90">¿Te gustaría automatizar</span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold">tu nómina?</span>
                        </h2>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}



