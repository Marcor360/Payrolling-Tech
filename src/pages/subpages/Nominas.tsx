import { useEffect, useRef, useState, useLayoutEffect, useCallback } from "react";
import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import FondoHeadBubles from "/img/tarjetas/Fondo-tarjetas/FondoNomina.webp";

// Texto animado rotando sinónimos de "errores" 
const palabrasAnimadas = ["errores","fallos","frenos","deslices","desaciertos"]; // versión estable corta

function TextoAnimado({ className = "", onWordChange }: { className?: string; onWordChange?: () => void }) {
  const [indice, setIndice] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  // Notify parent as soon as we render the first word.
  useEffect(() => { onWordChange?.(); }, [onWordChange]);

  useEffect(() => {
    let mounted = true;
    // Loop that fades out, swaps the word and fades in again.
    const ciclo = () => {
      timeoutRef.current = window.setTimeout(() => {
        setFadeIn(false);
        timeoutRef.current = window.setTimeout(() => {
          if (!mounted) return;
          setIndice(p => (p + 1) % palabrasAnimadas.length);
          setFadeIn(true);
          // Double rAF to ensure layout is ready before recalculating hero width.
          requestAnimationFrame(() => requestAnimationFrame(() => onWordChange?.()));
          ciclo();
        }, 500);
      }, 2200);
    };
    ciclo();
    return () => { mounted = false; if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [onWordChange]);

        return <span className={`inline-block transition-opacity duration-500 ${fadeIn ? 'opacity-100':'opacity-0'} font-extrabold ${className}`}>{palabrasAnimadas[indice]}</span>
}

// Componente reutilizable para el slider de servicios en móvil
function SliderServicios() {
    // Data centralizada: fácil de editar / reordenar / agregar
    const servicios: { texto: string; fondo: 'Mango' | 'Blanco' | 'Cardeno' }[] = [
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

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<HTMLElement[]>([]);
    const [activo, setActivo] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const supportsSmooth = typeof document !== 'undefined' && 'scrollBehavior' in document.documentElement.style;

    // Detecta si está en móvil (<= 640px) y escucha cambios de tamaño
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        const set = () => setIsMobile(mq.matches);
        set();
        mq.addEventListener('change', set);
        return () => mq.removeEventListener('change', set);
    }, []);

    // Sincroniza índice usando IntersectionObserver para mayor precisión
    useEffect(() => {
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
            // Track the card that is most visible so the dots and text stay in sync.
            // Filtrar solo visibles
            const visibles = entries.filter(e => e.isIntersecting);
            if (!visibles.length) return;
            // Elegir la card con mayor ratio; si empate, la más cercana al centro
            const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
            let bestIdx = activosRef.current; // fallback al actual
            let bestScore = -1;
            visibles.forEach(e => {
                // Score combines visibility ratio with distance to center for stability.
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

    const irA = (idx: number) => {
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
                    const color = s.fondo === 'Blanco' ? 'var(--color-noche)' : 'var(--color-blanco)';
                    return (
                        <div
                            key={i}
                            ref={el => { if (el) cardRefs.current[i] = el; }}
                            className="relative shrink-0 snap-start rounded-2xl shadow-lg flex items-center justify-center aspect-[4/3] min-h-[120px] w-[90vw] min-w-[90vw] sm:w-full sm:min-w-0 md:min-h-[140px] lg:min-h-[160px] px-3 sm:px-4 md:px-5 text-center bg-cover bg-right-bottom transform-gpu md:transition md:duration-300 md:ease-out md:hover:-translate-y-2 md:hover:shadow-xl md:hover:scale-[1.03]"
                            style={{ backgroundImage: `url(/img/tarjetas/Botones/${s.fondo}.png)` }}
                        >
                            <span className="font-bold text-xs sm:text-sm md:text-base drop-shadow leading-snug break-words" style={{ color }}>
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

export default function Nominas() {
    // Calcular altura del header para centrar verticalmente sin que lo tape
    const [headerH, setHeaderH] = useState(0);
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
    const heroLineRef = useRef<HTMLDivElement | null>(null);
    const heroWrapperRef = useRef<HTMLDivElement | null>(null);
    const originalFontSizeRef = useRef<string | null>(null);
    const rafRef = useRef<number | null>(null);

    const recalcularHero = useCallback(() => {
        const line = heroLineRef.current;
        const wrap = heroWrapperRef.current;
        if (!line || !wrap) return;

    // Reset transform y letter-spacing para medir correctamente
        line.style.transform = 'none';
    line.style.letterSpacing = '';

        // Guardar font-size original sólo una vez
        if (!originalFontSizeRef.current) {
            originalFontSizeRef.current = getComputedStyle(line).fontSize; // ej: "54.4px"
        }
        // Reiniciar font-size a original antes de cálculos
        if (originalFontSizeRef.current) {
            line.style.fontSize = originalFontSizeRef.current;
        }

        const available = wrap.clientWidth;

        // Paso 1: intentar reducir font-size (sin transform) hasta cierto límite
        let needed = line.scrollWidth;
        // minPx dinámico: teléfonos muy pequeños permiten bajar un poco más
        const viewportW = window.innerWidth || available;
        const minPx = viewportW < 350 ? 20 : viewportW < 400 ? 22 : 26; // nunca menos de 20px
        let loops = 0;
        while (needed > available && loops < 12) {
            const currentSizePx = parseFloat(getComputedStyle(line).fontSize);
            if (currentSizePx <= minPx) break; // no reduzcas más
            const nextSize = Math.max(minPx, currentSizePx * 0.94); // reduce ~6%
            line.style.fontSize = nextSize + 'px';
            needed = line.scrollWidth;
            loops++;
        }

        // Paso 2: si todavía no cabe, aplicar scale como último recurso
        needed = line.scrollWidth;
        if (needed > available) {
            // Paso 2.1 micro-compresión de letter-spacing antes de escalar
            let lsSteps = 0;
            while (needed > available && lsSteps < 4) { // hasta -2px total (4 * -0.5)
                line.style.letterSpacing = `${-(lsSteps + 1) * 0.5}px`;
                needed = line.scrollWidth;
                lsSteps++;
            }
            // Paso 2.2 si aún no cabe -> scale final
            if (needed > available) {
                const safety = 1;
                const scale = Math.max((available - safety) / needed, 0.45);
                line.style.transformOrigin = 'left center';
                line.style.transform = `scale(${scale})`;
            } else {
                // Mantén compresión aplicada
                line.style.transform = 'none';
            }
        } else {
            line.style.transform = 'none';
        }

        // Ajustar wrapper height para evitar saltos
        wrap.style.height = line.getBoundingClientRect().height + 'px';
    }, []);

    // Throttle / schedule recalculation to evitar múltiples cálculos en el mismo frame
    // Prevent thrashing by cancelling previous recalculations when the word updates.
    const programarRecalc = useCallback(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => { rafRef.current = null; recalcularHero(); });
    }, [recalcularHero]);

    useLayoutEffect(() => { recalcularHero(); }, [recalcularHero]);

    useEffect(() => {
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
                                <div ref={heroLineRef} id="heroLine" className="hero-line justify-center md:justify-start font-extrabold leading-tight tracking-tight select-none text-white">
                                    <span className="hero-rot-word">Tu</span>
                                    <span className="hero-chip hero-chip--rect hero-chip--tight" style={{ ['--chip-bg' as any]:'#6f00ff' }}>
                                        <span className="hero-chip__inner hero-rot-word text-white">nómina</span>
                                    </span>
                                    <span className="hero-chip hero-chip--rect hero-chip--tight" style={{ ['--chip-bg' as any]:'#6f00ff' }}>
                                        <span className="hero-chip__inner hero-rot-word text-white">rápido</span>
                                    </span>
                                    <span className="hero-rot-word">y</span>
                                    <span className="hero-chip hero-chip--rect hero-chip--tight hero-chip--break-mobile" style={{ ['--chip-bg' as any]:'#6f00ff' }}>
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
                    {/* Imagen original opcional debajo (descomenta si quieres mostrarla) */}
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



