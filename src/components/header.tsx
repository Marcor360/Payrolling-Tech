import { useEffect, useState } from "react";
import logoUrl from "/img/logos/1.png?url";

type HeaderVariant = "default" | "darkTransparent";

export default function Navbar({ variant = "default" }: { variant?: HeaderVariant }) {
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

    const isDarkTransparent = variant === "darkTransparent";

    return (
        <header className={`sticky top-0 z-50 ${isDarkTransparent ? "bg-transparent" : "bg-white/20"} backdrop-blur`}>
            <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-3 flex items-center justify-between">
                <a href="/" className="block">
                    <img src={logoUrl} alt="Logo" className="h-18 md:h-30 w-auto block" />
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 md:gap-12 xl:gap-16" aria-label="primary">
                    <a className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors ${isDarkTransparent ? "text-white hover:text-mango" : "text-black hover:text-mango"}`} href="#servicios">Servicios</a>
                    <a className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors ${isDarkTransparent ? "text-white hover:text-mango" : "text-black hover:text-mango"}`} href="#contacto">Contacto</a>
                    <a className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors ${isDarkTransparent ? "text-white hover:text-mango" : "text-black hover:text-mango"}`} href="#login">Login</a>
                </nav>
            </div>
        </header>
    );
}
