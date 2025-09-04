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

    const links = [
        { href: "#servicios", label: "Servicios" },
        { href: "#contacto", label: "Contacto" },
        { href: "#login", label: "Login" },
    ];

    const desktopLinkClasses = `text-lg md:text-xl lg:text-2xl font-bold transition-colors ${isDarkTransparent ? "text-white hover:text-mango" : "text-black hover:text-mango"}`;
    const mobileLinkClasses = "text-lg font-bold text-black hover:text-mango";

    return (
        <header className={`sticky top-0 z-50 ${isDarkTransparent ? "bg-transparent" : "bg-white/20"} backdrop-blur`}>
            <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-3 flex items-center justify-between">
                <a href="/" className="block">
                    <img src={logoUrl} alt="Logo" className="h-18 md:h-30 w-auto block" />
                </a>

                {/* Hamburger button */}
                <button
                    onClick={() => setOpen((p) => !p)}
                    className={`md:hidden ${isDarkTransparent ? "text-white" : "text-black"}`}
                    aria-label="Toggle navigation"
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
                <nav className="hidden md:flex gap-8 md:gap-12 xl:gap-16" aria-label="primary">
                    {links.map((l) => (
                        <a key={l.href} className={desktopLinkClasses} href={l.href}>
                            {l.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile nav */}
            <nav
                className={`fixed top-0 left-0 z-50 h-full w-64 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-white p-8 md:hidden`}
                aria-label="mobile"
            >
                <button
                    className="mb-8 text-black"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation"
                >
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col gap-6">
                    {links.map((l) => (
                        <a key={l.href} className={mobileLinkClasses} href={l.href} onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Overlay */}
            {open && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}
        </header>
    );
}