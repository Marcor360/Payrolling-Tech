import { useEffect, useState } from "react";
import logoUrl from "/img/logos/1.png?url";

type HeaderVariant = "default" | "darkTransparent" | "dark";

type MenuNode = {
    label: string;
    href?: string;
    children?: MenuNode[];
};

export default function Navbar({ variant = "default" }: { variant?: HeaderVariant }) {
    const [open, setOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    // --- Desktop: mantener abierto al bajar el mouse (delay al cerrar) ---
    const [openDesktopLabel, setOpenDesktopLabel] = useState<string | null>(null);
    const [closeTimer, setCloseTimer] = useState<number | null>(null);
    const [openFlyoutLabel, setOpenFlyoutLabel] = useState<string | null>(null);
    const [flyoutCloseTimer, setFlyoutCloseTimer] = useState<number | null>(null);
    const openMenu = (label: string) => {
        if (closeTimer) window.clearTimeout(closeTimer);
        setOpenDesktopLabel(label);
        setOpenFlyoutLabel(null);
    };
    const scheduleClose = () => {
        if (closeTimer) window.clearTimeout(closeTimer);
        const id = window.setTimeout(() => {
            setOpenDesktopLabel(null);
            setOpenFlyoutLabel(null);
        }, 180);
        setCloseTimer(id);
    };
    const openFlyout = (label: string) => {
        if (flyoutCloseTimer) window.clearTimeout(flyoutCloseTimer);
        setOpenFlyoutLabel(label);
    };
    const scheduleFlyoutClose = () => {
        if (flyoutCloseTimer) window.clearTimeout(flyoutCloseTimer);
        const id = window.setTimeout(() => setOpenFlyoutLabel(null), 160);
        setFlyoutCloseTimer(id);
    };

    // Mobile: acordeones
    const [openServicios, setOpenServicios] = useState(false);
    const [openServiciosVales, setOpenServiciosVales] = useState(false);

    // Lock scroll y Escape para drawer
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
        return () => {
            if (closeTimer) window.clearTimeout(closeTimer);
        };
    }, [closeTimer]);
    useEffect(() => {
        return () => {
            if (flyoutCloseTimer) window.clearTimeout(flyoutCloseTimer);
        };
    }, [flyoutCloseTimer]);

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
    const headerBackground =
        effectiveVariant === "dark"
            ? "bg-noche/90"
            : effectiveVariant === "darkTransparent"
                ? "bg-transparent"
                : "bg-white/20";

    // ---------- MENÚ ----------
    // Rutas planas (sin prefijo /servicios)
    const menu: MenuNode[] = [
        {
            label: "Servicios",
            href: "/#servicios",
            children: [
                { href: "/nominas", label: "Nóminas" },
                { href: "/reclutamiento", label: "Reclutamiento" },
                { href: "/beneficios", label: "Beneficios" },
                { href: "/nom35", label: "NOM-035" },
                {
                    label: "Vales",
                    href: "/vales",
                    children: [
                        { href: "/vales-despensa", label: "Despensa" },
                        { href: "/vales-gasolina", label: "Gasolina" },
                        { href: "/vales-gastos", label: "Gastos" },
                        { href: "/vales-incentivos", label: "Incentivos" },
                    ],
                },
            ],
        },
        { href: "/#contacto", label: "Contacto" },
        /*{ href: "/blog", label: "Blog" },*/
        { href: "/Login", label: "Login" },
    ];

    const desktopLinkClasses = `text-base md:text-lg lg:text-xl font-semibold transition-colors ${isDarkVariant ? "text-white hover:text-mango" : "text-black hover:text-mango"
        }`;
    const mobileLinkClasses =
        "text-lg font-semibold text-white/95 hover:text-mango tracking-wide drop-shadow-sm transition-colors";

    const dropdownPanel = `min-w-[220px] rounded-xl border shadow-xl backdrop-blur-md ${isDarkVariant ? "bg-noche/95 border-white/10" : "bg-white/95 border-black/10"
        }`;
    const dropdownItemBase =
        "block px-4 py-2 text-sm md:text-base whitespace-nowrap transition-colors hover:bg-black/5";

    return (
        <header className={`sticky top-0 z-50 ${headerBackground} backdrop-blur`}>
            <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-2 flex items-center justify-between">
                <a href="/" className="block">
                    <img src={logoUrl} alt="Logo" className="h-10 md:h-14 lg:h-16 w-auto block" />
                </a>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setOpen((p) => !p)}
                    className={`lg:hidden ${isDarkVariant ? "text-white" : "text-cardeno"} ${open ? "opacity-0 pointer-events-none" : ""
                        }`} // ✱ antes era md:hidden
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                >
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10" aria-label="primary"> {/* ✱ antes md:flex */}
                    <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
                        {menu.map((item) =>
                            item.children ? (
                                <li
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => openMenu(item.label)}
                                    onMouseLeave={scheduleClose}
                                >
                                    {/* Trigger como <a> clickeable */}
                                    <a
                                        href={item.href ?? "#"}
                                        className={`${desktopLinkClasses} inline-flex items-center gap-2`}
                                        aria-haspopup="true"
                                        aria-expanded={openDesktopLabel === item.label}
                                    >
                                        {item.label}
                                        <svg
                                            className={`h-4 w-4 transition-transform ${openDesktopLabel === item.label ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>

                                    {/* Dropdown 1er nivel */}
                                    <div
                                        className={`absolute left-1/2 top-full -translate-x-1/2 mt-2 z-[70] ${openDesktopLabel === item.label ? "block" : "hidden"
                                            }`}
                                        onMouseEnter={() => openMenu(item.label)}
                                        onMouseLeave={scheduleClose}
                                    >
                                        {/* puente invisible para evitar "gap" al bajar el mouse */}
                                        <div className="absolute -top-2 left-0 right-0 h-2" />
                                        <div className={dropdownPanel}>
                                            <ul className="py-2">
                                                {item.children.map((c) =>
                                                    c.children ? (
                                                        // --- Fila "Vales" con mini-menú que SOLO se muestra al pasar el mouse por esta fila ---
                                                        <li
                                                            key={c.label}
                                                            className="relative"
                                                            onMouseEnter={() => openFlyout(c.label)}
                                                            onMouseLeave={scheduleFlyoutClose}
                                                        >
                                                            <a
                                                                href={c.href ?? "#"}
                                                                className={`${dropdownItemBase} ${isDarkVariant ? "text-white/95" : "text-black/90"
                                                                    } inline-flex items-center justify-between gap-4 w-full pr-6`}
                                                            >
                                                                <span>{c.label}</span>
                                                                <svg
                                                                    className="h-4 w-4"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </a>

                                                            {/* Flyout 2º nivel: HIDDEN por defecto, aparece SOLO en hover de esta fila */}
                                                            <div
                                                                className={`absolute left-full top-0 ml-2 z-[80] ${openFlyoutLabel === c.label ? "block" : "hidden"
                                                                    }`}
                                                                onMouseEnter={() => openFlyout(c.label)}
                                                                onMouseLeave={scheduleFlyoutClose}
                                                            >
                                                                <div className="absolute -left-2 top-0 bottom-0 w-2" />
                                                                <div className={dropdownPanel}>
                                                                    <ul className="py-2">
                                                                        {c.children.map((gc) => (
                                                                            <li key={gc.href}>
                                                                                <a
                                                                                    className={`${dropdownItemBase} ${isDarkVariant ? "text-white/95" : "text-black/90"
                                                                                        }`}
                                                                                    href={gc.href!}
                                                                                >
                                                                                    {gc.label}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ) : (
                                                        <li key={c.href}>
                                                            <a
                                                                className={`${dropdownItemBase} ${isDarkVariant ? "text-white/95" : "text-black/90"
                                                                    }`}
                                                                href={c.href!}
                                                            >
                                                                {c.label}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ) : (
                                <li key={item.href}>
                                    <a className={desktopLinkClasses} href={item.href!}>
                                        {item.label}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
            </div>

            {/* Mobile/Tablet drawer */}
            <nav
                className={`fixed top-0 left-0 z-[60] h-screen 
                w-[85vw] sm:w-[70vw] md:w-[60vw]  /* ✱ ancho adaptativo */
                ${open ? "translate-x-0" : "-translate-x-full"}
                transform transition-transform duration-300 
                bg-cardeno/70 backdrop-blur-xl border-r border-mango/80 shadow-2xl p-6 
                lg:hidden rounded-r-2xl flex flex-col`} /* ✱ antes md:hidden */
                aria-label="mobile"
            >
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-white">Menú</span>
                    <button
                        className="text-white hover:text-mango transition-colors"
                        onClick={() => setOpen(false)}
                        aria-label="Close navigation"
                    >
                        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-start mt-14 gap-2">
                    {/* Servicios: link + chevron (acordeón) */}
                    <div className="flex items-center justify-between">
                        <a
                            href="/#servicios"
                            className={`${mobileLinkClasses} py-2`}
                            onClick={() => setOpen(false)}
                        >
                            Servicios
                        </a>
                        <button
                            className="p-2 text-white/90 hover:text-mango"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpenServicios((p) => !p);
                            }}
                            aria-expanded={openServicios}
                            aria-controls="mobile-servicios"
                        >
                            <svg
                                className={`h-5 w-5 transition-transform ${openServicios ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {openServicios && (
                        <div id="mobile-servicios" className="ml-3 mt-1 flex flex-col gap-1">
                            {menu
                                .find((m) => m.label === "Servicios")
                                ?.children?.map((c) =>
                                    c.children ? (
                                        // Mini-menú "Vales" dentro de Servicios
                                        <div key={c.label} className="mt-1">
                                            <div className="flex items-center justify-between">
                                                <a
                                                    href={c.href ?? "#"}
                                                    className="text-base text-white/90 hover:text-mango pl-2 py-1"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {c.label}
                                                </a>
                                                <button
                                                    className="p-1.5 text-white/90 hover:text-mango"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setOpenServiciosVales((p) => !p);
                                                    }}
                                                    aria-expanded={openServiciosVales}
                                                    aria-controls="mobile-servicios-vales"
                                                >
                                                    <svg
                                                        className={`h-4 w-4 transition-transform ${openServiciosVales ? "rotate-180" : ""}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openServiciosVales && (
                                                <div id="mobile-servicios-vales" className="ml-4 mt-1 flex flex-col">
                                                    {c.children.map((gc) => (
                                                        <a
                                                            key={gc.href}
                                                            className="text-[0.95rem] text-white/85 hover:text-mango pl-3 py-1"
                                                            href={gc.href!}
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            {gc.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            key={c.href}
                                            className="text-base text-white/90 hover:text-mango pl-2 py-1"
                                            href={c.href!}
                                            onClick={() => setOpen(false)}
                                        >
                                            {c.label}
                                        </a>
                                    )
                                )}
                        </div>
                    )}

                    {/* Resto: Contacto, Login */}
                    {menu
                        .filter((m) => !m.children)
                        .map((l) => (
                            <a
                                key={l.href}
                                className={`${mobileLinkClasses} py-2 mt-2`}
                                href={l.href!}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </a>
                        ))}
                </div>
            </nav>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden" // ✱ antes md:hidden
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}
