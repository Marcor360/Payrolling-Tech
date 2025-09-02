import Logo from "/img/logos/1.png";

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
            }}
        >
            <div
                style={{
                    maxWidth: "90%",
                    margin: "0 auto",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo (link al home) */}
                <a href="/">
                    <img
                        src={Logo as unknown as string}
                        alt="Logo"
                        style={{ height: "150px", width: "auto", display: "block" }}
                    />
                </a>

                {/* Nav: enlaces con espacio entre ellos */}
                <nav
                    style={{ marginLeft: "auto", display: "flex", gap: "10rem" }}
                >
                    <a className="text-base md:text-long" href="#">Servicios</a>
                    <a className="text-base md:text-long" href="#">Contacto</a>
                    <a className="text-base md:text-long" href="#">Login</a>
                </nav>
            </div>
        </header>
    );
}