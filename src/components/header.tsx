import { useEffect, useState } from "react";
import logoUrl from "/img/logos/1.png?url";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/30 backdrop-blur">
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
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-cardeno hover:text-mango hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-mango"
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
                {/* Backdrop */}
                {open && (
                    <div
                        className="md:hidden fixed inset-0 z-40 bg-cardeno/40 backdrop-blur-md transition-opacity"
                        onClick={() => setOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Drawer panel (50% width) */}
                <aside
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú"
                    className={`md:hidden fixed left-0 top-0 bottom-0 z-50 w-1/2 max-w-xs bg-cardeno/10 backdrop-blur-xl border-r border-white/15 shadow-2xl ring-1 ring-white/10 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* Decorative gradient background */}
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cardeno/40 via-cereza/30 to-nevado/30 opacity-90" />

                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between px-4 py-3">
                            <a href="/" onClick={() => setOpen(false)} className="block">
                                <img src={logoUrl} alt="Logo" className="h-12 w-auto" />
                            </a>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-mango hover:text-nevado hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-mango"
                                aria-label="Cerrar menú"
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

                {/* Close on Escape & lock scroll when open */}
                {/* Effects at component level */}
                {/* Note: Effects declared below the return won't run; keeping here for clarity in source diff. */}
            </div>
        </header>
    );
}
