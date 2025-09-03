import logoUrl from "/img/logos/1.png?url";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-3 flex items-center justify-between">
                <a href="/" className="block">
                    <img src={logoUrl} alt="Logo" className="h-18 md:h-30 w-auto block" />
                </a>
                <nav className="flex gap-8 md:gap-12 xl:gap-16" aria-label="primary">
                    <a className="text-lg md:text-xl lg:text-2xl font-bold text:hover" href="#servicios">Servicios</a>
                    <a className="text-lg md:text-xl lg:text-2xl font-bold" href="#contacto">Contacto</a>
                    <a className="text-lg md:text-xl lg:text-2xl font-bold" href="#login">Login</a>
                </nav>
            </div>
        </header>
    );
}
