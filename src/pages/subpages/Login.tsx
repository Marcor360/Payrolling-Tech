import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import Text2 from "/img/textos/IngresaYfasilitaTusProcesos.webp";

function Card({ label, href = "" }: { label: string; href?: string }) {
    const isClientes = label === 'Clientes';
    const palette = isClientes
        ? {
                accent: 'var(--color-mango)',
                baseFrom: '#6f00ff',
                baseTo: '#9a41ff',
                ring: 'focus:ring-[var(--color-mango)]'
            }
        : {
                accent: 'var(--color-cardeno)',
                baseFrom: '#ffcc1d',
                baseTo: '#ffae00',
                ring: 'focus:ring-cardeno'
            };

    return (
        <div
            className="group relative mx-auto w-full max-w-[300px] h-[430px] rounded-[2rem] flex flex-col items-center shadow-xl overflow-hidden backdrop-blur-sm ring-1 ring-white/10 transition-transform md:hover:-translate-y-2 md:hover:shadow-2xl bg-gradient-to-br"
            style={{
                background: `linear-gradient(145deg, ${palette.baseFrom} 0%, ${palette.baseTo} 55%, rgba(255,255,255,0.06) 100%)`,
            }}
            aria-label={`Acceso para ${label}`}
        >
            {/* Glow / aura */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: `radial-gradient(circle at 65% 35%, rgba(255,255,255,0.35), transparent 60%)`
            }} />
            {/* Label pill */}
            <div className="absolute top-6 flex justify-center w-full">
                <span
                    className="rounded-2xl px-7 py-2 font-bold text-base tracking-wide shadow-md border border-white/20 bg-white/90 text-noche backdrop-blur-sm"
                >
                    {label}
                </span>
            </div>
                        {/* Icon / placeholder zone (sin imágenes) */}
                        <div className="flex-1 w-full flex items-center justify-center pt-24 px-6">
                                <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full bg-white/15 blur-xl scale-110" />
                                        <div className="relative w-full h-full flex items-center justify-center">
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    className="w-20 h-20 text-white/85 drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-105"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    aria-hidden="true"
                                                >
                                                    {label === 'Clientes' ? (
                                                        <>
                                                            <rect x="6" y="14" width="36" height="24" rx="4" />
                                                            <path d="M12 14v-4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v4" />
                                                            <path d="M18 24h12" />
                                                            <path d="M18 30h8" />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <circle cx="24" cy="16" r="8" />
                                                            <path d="M8 40c2.5-7 8.5-11 16-11s13.5 4 16 11" />
                                                        </>
                                                    )}
                                                </svg>
                                        </div>
                                </div>
                        </div>
            {/* Action button */}
            <div className="w-full flex justify-center pb-7 px-6">
                <a
                    href={href}
                    className={`w-full max-w-[210px] py-3 rounded-xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 bg-black/40 text-white backdrop-blur-sm border border-white/25 shadow-inner shadow-black/20 transition-all hover:bg-black/55 focus:outline-none ${palette.ring}`}
                >
                    <span>Ingresar</span>
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
            </div>
            {/* Bottom subtle gradient overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
    );
}


export default function Login() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-fondo-cremita)]">
            <Headers />
            <main id="login" aria-label="Ingresar y facilitar procesos" className="flex-1 relative overflow-hidden py-6 md:py-10">
                {/* Decorative soft radial background */}
                <div className="pointer-events-none absolute inset-0 opacity-70" style={{
                    background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.7), rgba(255,255,255,0) 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.5), rgba(255,255,255,0) 65%)'
                }} />
                <div className="relative flex justify-center mb-6 md:mb-10 px-4">
                    <img
                        src={Text2}
                        alt="¡Ingresa y facilita tus procesos!"
                        className="w-[70%] max-w-2xl h-auto drop-shadow-sm select-none"
                        draggable={false}
                        loading="lazy"
                    />
                </div>
                <div className="relative z-10 mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-stretch place-items-center">
                    <Card
                        label="Colaboradores"
                        href="http://payrolling-tech.webhop.org:9362/mn/sirele/index"
                    />
                    <Card
                        label="Clientes"
                        href="http://payrolling-tech.webhop.org:9362/mn/index"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}