import { useEffect, useState } from "react";
import logoUrl from "/img/logos/1.png?url";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Lock scroll and close on Escape when the drawer is open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev;
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 bg-white/20 backdrop-blur">
            <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-3 flex items-center justify-between">
                <a href="/" className="block">
                    <img src={logoUrl} alt="Logo" className="h-18 md:h-30 w-auto block" />
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 md:gap-12 xl:gap-16" aria-label="primary">
                    <a className="text-lg md:text-xl lg:text-2xl font-bold text-black hover:text-mango transition-colors" href="#servicios">Servicios</a>
                    <a className="text-lg md:text-xl lg:text-2xl font-bold text-black hover:text-mango transition-colors" href="#contacto">Contacto</a>
                    <a className="text-lg md:text-xl lg:text-2xl font-bold text-black hover:text-mango transition-colors" href="#login">Login</a>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    className={`md:hidden inline-flex items-center justify-center p-2 rounded-md text-cardeno hover:text-mango hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-mango ${open ? 'opacity-0 pointer-events-none' : ''}`}
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    aria-label={open ? "Cerrar menu" : "Abrir menu"}
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        // X icon
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>

                {/* Mobile overlay + left drawer */}
                {/* Backdrop (tinted morado + blur) */}
                {open && (
                    <div
                        className="md:hidden fixed inset-0 z-[60] bg-cardeno/40 backdrop-blur-md transition-opacity"
                        onClick={() => setOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Drawer panel: ocupa la mitad izquierda, morado + blur */}
                <aside
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu"
                    className={`md:hidden fixed left-0 top-0 bottom-0 z-[70] w-1/2 min-w-[50vw] bg-cardeno/90 text-white backdrop-blur-2xl border-r border-white/20 shadow-2xl ring-1 ring-white/20 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* Decoración: gradiente sutil */}
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cardeno/80 via-cereza/50 to-nevado/50 opacity-90" />

                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between px-4 py-3">
                            <a href="/" onClick={() => setOpen(false)} className="block">
                                <img src={logoUrl} alt="Logo" className="h-12 w-auto" />
                            </a>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mango hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-mango"
                                aria-label="Cerrar menu"
                                onClick={() => setOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        <div className="px-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-mango/70 to-transparent" />
                        </div>

                        <nav className="px-4 py-5 flex flex-col gap-4" aria-label="mobile">
                            <a onClick={() => setOpen(false)} className="text-lg font-semibold text-white hover:text-mango transition-colors" href="#servicios">Servicios</a>
                            <a onClick={() => setOpen(false)} className="text-lg font-semibold text-white hover:text-mango transition-colors" href="#contacto">Contacto</a>
                            <a onClick={() => setOpen(false)} className="text-lg font-semibold text-white hover:text-mango transition-colors" href="#login">Login</a>
                        </nav>
                    </div>
                </aside>
            </div>
        </header>
    );
}
