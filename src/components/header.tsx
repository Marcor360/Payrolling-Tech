import { useEffect, useState } from "react";
import logoUrl from "/img/logos/1.png?url";

type HeaderVariant = "default" | "darkTransparent" | "dark";

export default function Navbar({ variant = "default" }: { variant?: HeaderVariant }) {
    const [open, setOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

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

    useEffect(() => {
        if (variant !== "dark") return;

        const handleScroll = () => {
            const next = window.scrollY > 12;
            setHasScrolled((prev) => (prev === next ? prev : next));
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [variant]);

    const effectiveVariant: HeaderVariant = variant === "dark" && hasScrolled ? "default" : variant;

    const isDarkVariant = effectiveVariant === "dark" || effectiveVariant === "darkTransparent";
    const headerBackground = effectiveVariant === "dark"
        ? "bg-noche/90"
        : effectiveVariant === "darkTransparent"
        ? "bg-transparent"
        : "bg-white/20";

    const links = [
        { href: "/#servicios", label: "Servicios" },
        { href: "/#contacto", label: "Contacto" },
        { href: "/Login", label: "Login" },
    ];

    const desktopLinkClasses = `text-base md:text-lg lg:text-xl font-semibold transition-colors ${isDarkVariant ? "text-white hover:text-mango" : "text-black hover:text-mango"}`;
    const mobileLinkClasses = "text-lg font-semibold text-white/95 hover:text-mango tracking-wide drop-shadow-sm transition-colors";

    return (
        <header className={`sticky top-0 z-50 ${headerBackground} backdrop-blur`}>
            <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-2 flex items-center justify-between">
                <a href="/" className="block">
                    <img src={logoUrl} alt="Logo" className="h-10 md:h-14 lg:h-16 w-auto block" />
                </a>

                {/* Hamburger button */}
                <button
                    onClick={() => setOpen((p) => !p)}
                    className={`md:hidden ${isDarkVariant ? "text-white" : "text-cardeno"} ${open ? "opacity-0 pointer-events-none" : ""}`}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                >
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 md:gap-8 xl:gap-10" aria-label="primary">
                    {links.map((l) => (
                        <a key={l.href} className={desktopLinkClasses} href={l.href}>
                            {l.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile nav */}
            <nav
                className={`fixed top-0 left-0 z-[60] h-screen w-[50vw] max-w-sm transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-cardeno/70 backdrop-blur-xl border-r border-mango/80 shadow-2xl p-6 md:hidden rounded-r-2xl flex flex-col`}
                aria-label="mobile"
            >
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-white">MenÃº</span>
                    <button
                        className="text-white hover:text-mango transition-colors"
                        onClick={() => setOpen(false)}
                        aria-label="Close navigation"
                    >
                        <svg
                            className="h-7 w-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex flex-col justify-start mt-14 gap-5">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            className={`${mobileLinkClasses} py-2`}
                            href={l.href}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Overlay (kept for safety if styles change) */}
            {open && (
                <div
                    className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}





