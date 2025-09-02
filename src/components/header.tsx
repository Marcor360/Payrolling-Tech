// Navbar.tsx
import Logo from "/img/logos/1.png";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-center gap-8 py-3">
                    {/* Logo (link al home) */}
                    <a href="/" className="flex items-center gap-3 shrink-0">
                        <img
                            src={Logo as unknown as string}
                            alt="Logo"
                            className="h-3 md:h-4 w-auto block"

                        />
                    </a>

                    {/* Nav: enlaces con espacio entre ellos */}
                    <nav aria-label="Principal" className="flex-1 ">
                        <a href="#">Servicios</a>
                        <a href="#">Contacto</a>
                        <a href="#">Login</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
