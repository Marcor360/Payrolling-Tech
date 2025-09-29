export default function Footer() {
    return (
        <footer className="py-6 px-4" style={{ backgroundColor: 'var(--color-cardeno)' }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 text-[var(--color-mango)]">
                {/* Logo en el footer */}
                <div className="flex items-center gap-3 mb-4 md:mb-0 md:w-1/3 justify-center md:justify-start">
                    <a href="/">
                        <img
                            src="/img/logos/Logo Blanco.png"
                            alt="Payrolling Tech Logo"
                            className="h-12 md:h-14 lg:h-16 w-auto"
                            loading="lazy"
                        />
                    </a>
                </div>

                {/* Dirección y derechos */}
                <div className="text-center text-sm md:flex-1 md:flex md:flex-col md:justify-center text-[var(--color-blanco)]">
                    <div className="mb-1">&copy; 2025 Payrolling Tech México</div>
                    <div>
                        Blvd. Palmas Hills 1 Valle de las Palmas<br />
                        52787 Naucalpan de Juárez, Méx.
                    </div>
                </div>

                {/* Iconos sociales */}
                <div className="flex items-center gap-3 mt-4 md:mt-0 md:w-1/3 justify-center md:justify-end">
                    <div className="hidden md:block h-9 border-l-2 mx-3" style={{ borderColor: 'var(--color-blanco)' }}></div>
                    <div className="flex gap-2">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61577114701092"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                            style={{ backgroundColor: 'var(--color-blanco)', color: 'var(--color-cardeno)' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </a>
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/528138646238?text=%C2%A1Hola%21%20Quiero%20m%C3%A1s%20info%20del%20servicio%20de%20%2APayrolling%20Tech%2A"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                            style={{ backgroundColor: 'var(--color-blanco)', color: 'var(--color-cardeno)' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/payrollingtech?igsh=MXhtaWFvYWpwZWZwcg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                            style={{ backgroundColor: 'var(--color-blanco)', color: 'var(--color-cardeno)' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <circle cx="16.5" cy="7.5" r="0.5" />
                            </svg>
                        </a>
                        {/* Correo */}
                        <a
                            href="mailto:contacto@payrollingtech.mx"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Correo electrónico"
                            className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                            style={{ backgroundColor: 'var(--color-blanco)', color: 'var(--color-cardeno)' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="7" width="18" height="10" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
