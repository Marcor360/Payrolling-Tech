import { useEffect, useRef, useState } from "react";
import Headers from "../../components/header.tsx";
import Foter from "../../components/footer.tsx";
import FondoHeadBubles from "/img/tarjetas/Fondo-tarjetas/FondoNomina.webp";
import Text1 from "/img/textos/TuNominaRapidoySinErrores.webp";

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
                {servicios.map((s, i) => (
                    <div
                        key={i}
                        ref={el => { if (el) cardRefs.current[i] = el; }}
                        className="relative shrink-0 snap-start rounded-2xl shadow-lg flex items-center justify-center aspect-[4/3] min-h-[120px] w-[90vw] min-w-[90vw] sm:w-full sm:min-w-0 md:min-h-[140px] lg:min-h-[160px] px-3 sm:px-4 md:px-5 text-center bg-cover bg-right-bottom"
                        style={{ backgroundImage: `url(/img/tarjetas/Botones/${s.fondo}.png)` }}
                    >
                        <span className="font-bold text-xs sm:text-sm md:text-base text-noche drop-shadow leading-snug break-words">
                            {s.texto}
                        </span>
                    </div>
                ))}
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

    return (
        <>
            <section
                aria-label="Hero Nóminas"
                className="relative overflow-hidden text-white bg-cover bg-bottom min-h-[680px] md:min-h-[760px] lg:min-h-[840px]"
                style={{ backgroundImage: `url(${FondoHeadBubles})` }}
            >
                <Headers variant="darkTransparent" />
                <div className="mx-auto max-w-7xl px-4 pt-0 md:pt-1 lg:pt-2 pb-6 md:pb-6 text-center -mt-4 md:-mt-6 lg:-mt-8">
                    <img
                        src={Text1}
                        alt="Tu nómina rápido y sin errores"
                        className="mx-auto w-full max-w-3xl h-auto"
                        loading="eager"
                        decoding="async"
                    />
                    <p className="mt-1 md:mt-1 text-white/90 text-base sm:text-lg md:text-xl">
                        tu <span className="font-bold text-white">activo</span> más importante para <span className="font-extrabold text-white">fortalecer tu negocio</span>
                    </p>

                    <a
                        href="https://api.whatsapp.com/send/?phone=528138646238&text=%C2%A1Hola%21+Quiero+m%C3%A1s+info+del+servicio+de+%2APayrolling+Tech%2A&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                        className="mt-1 md:mt-2 inline-block rounded-md bg-yellow-400 px-6 py-3 font-semibold text-noche shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    >
                        Conoce nuestro servicio
                    </a>
                </div>
            </section>
            <section>
                <div className="mx-auto w-full max-w-5xl px-4 pt-15">
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
            <Foter />
        </>
    )
}



