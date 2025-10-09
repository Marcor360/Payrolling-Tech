import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
//importar svg
import beneficiosFiscalesSvg from "../../../public/img/svg/svg-vales/Beneficios fiscales.svg";
import coberturaNacionalSvg from "../../../public/img/svg/svg-vales/cobertura nacional.svg";
import controlFinancieroTotalSvg from "../../../public/img/svg/svg-vales/control financiero total.svg";
import eficienciaCorporativaSvg from "../../../public/img/svg/svg-vales/eficiencia corporativa.svg";
import flexibilidadSvg from "../../../public/img/svg/svg-vales/flexibilidad.svg";
import seguridadSvg from "../../../public/img/svg/svg-vales/seguridad.svg";

import ValesRecomp from "../../components/TarjetaVales.tsx";
export default function Vales() {
    return (
        <div className="min-h-screen text-noche">
            <Headers variant="dark" />
            <main className="flex flex-col gap-10 md:gap-14 pb-0">
                {/* === HERO / VALOR === */}
                <section id="valor" className="pt-16 md:pt-20 pb-6 md:pb-8">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
                        <h1
                            className="text-[clamp(2.75rem,6vw,4.5rem)]
                 leading-[0.95] tracking-tight font-extrabold
                 text-cardeno"
                        >
                            Vales para tu empresa
                        </h1>

                        <p className="mt-5 text-[1.05rem] sm:text-lg md:text-xl text-noche">
                            <strong>Optimiza y controla</strong> los gastos de tu empresa con
                            nuestras <strong>tarjetas y vales</strong> corporativos.
                        </p>

                        <p className="mt-5 max-w-3xl mx-auto text-base sm:text-[1.05rem] text-noche">
                            Desde combustible, gastos de oficina, despensa y viáticos, hasta incentivos,
                            recompensas y regalos, nuestras soluciones te permiten simplificar la
                            gestión, motivar a tu equipo y maximizar beneficios fiscales.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={`https://wa.me/528138646238?text=${encodeURIComponent(
                                    "Hola, me gustaría solicitar una demo de Vales para tu empresa. ¿Podemos agendar una llamada?"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Solicitar demo por WhatsApp"
                                className="inline-flex items-center justify-center
                   rounded-xl px-6 py-3 font-semibold
                   bg-mango text-noche shadow
                   hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-mango/50"
                            >
                                Solicita tu demo
                            </a>

                            <a
                                href={`https://wa.me/528138646238?text=${encodeURIComponent(
                                    "Hola, quiero cotizar un paquete de vales corporativos.\nEmpresa: ____\nNúmero de colaboradores: ____\nInterés: Gasolina / Despensa / Gastos corporativos / Recompensas.\nUbicación: ____"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Cotizar paquete por WhatsApp"
                                className="inline-flex items-center justify-center
                   rounded-xl px-6 py-3 font-semibold
                   bg-white text-noche border border-slate-300 shadow-sm
                   hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                            >
                                Cotiza tu paquete ahora
                            </a>
                        </div>
                    </div>
                </section>
                <div className="">
                    <ValesRecomp />
                </div>
                {/* Ventajas de nuestras soluciones */}
                <section
                    id="ventajas"
                    aria-labelledby="ventajas-title"
                    className="bg-noche py-16 sm:py-20 text-white"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <h2
                            id="ventajas-title"
                            className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-mango"
                        >
                            Ventajas de nuestras soluciones
                        </h2>

                        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: controlFinancieroTotalSvg,
                                    title: "Control financiero total",
                                    desc: "Supervisa gastos en tiempo real.",
                                },
                                {
                                    icon: flexibilidadSvg,
                                    title: "Flexibilidad",
                                    desc: "Asigna saldo en tiempo real a colaboradores o aliados.",
                                },
                                {
                                    icon: eficienciaCorporativaSvg,
                                    title: "Eficiencia operativa",
                                    desc: "Reduce tiempos de reembolsos, facturación y manejo de efectivo.",
                                },
                                {
                                    icon: coberturaNacionalSvg,
                                    title: "Cobertura nacional",
                                    desc: "Aceptadas en todo México gracias al sello CARNET."
                                },
                                {
                                    icon: seguridadSvg,
                                    title: "Seguridad",
                                    desc: "Minimiza riesgos operativos en efectivo, inventarios y logística.",
                                },
                                {
                                    icon: beneficiosFiscalesSvg,
                                    title: "Beneficios fiscales",
                                    desc: "Deducciones legales al 100% en la mayoría de los vales y tarjetas.",
                                },
                            ].map(({ icon, title, desc }) => (
                                <li key={title} className="flex items-start gap-4 rounded-2xl p-2">
                                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cardeno/15 ring-1 ring-cardeno/30">
                                        <img src={icon} alt="" width={40} height={40} loading="lazy" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">
                                            <span className="font-bold">{title}:</span>
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/80">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section
                    id="como-funciona"
                    aria-labelledby="cf-title"
                    className="bg-[rgb(245,243,236)] py-16 sm:py-20 text-noche"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        {/* Marco principal */}
                        <div className="relative md:min-h-[38rem] overflow-hidden">
                            {/* Líneas diagonales detrás (trazo fino y fijo) */}
                            <svg
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 z-0 text-cardeno/80"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <line x1="78" y1="6" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                <line x1="94" y1="64" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                <line x1="22" y1="94" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                <line x1="6" y1="36" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                            </svg>

                            {/* Círculo central */}
                            <div
                                className="absolute left-1/2 top-1/2 z-10 grid h-64 w-64 -translate-x-1/2 -translate-y-1/2
                   place-items-center rounded-full border-2 border-cardeno bg-white
                   sm:h-72 sm:w-72"
                            >
                                <h2 id="cf-title" className="text-center text-3xl sm:text-4xl font-black text-cardeno">
                                    ¿CÓMO<br />FUNCIONA?
                                </h2>
                            </div>

                            {/* Pasos: apilados en móvil; alrededor en desktop */}
                            <ol className="relative z-20 mt-10 grid gap-10 sm:mt-14 md:mt-0 md:absolute md:inset-0">
                                {/* 1 – arriba */}
                                <li className="flex items-start gap-3 md:absolute md:top-[8%] md:left-1/2 md:-translate-x-1/2 md:max-w-xs text-center">
                                    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-cardeno text-white font-bold">
                                        1
                                        <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-cardeno/60"></span>
                                    </span>
                                    <p className="text-sm sm:text-base">
                                        Elige la tarjeta o vale según la necesidad de tu empresa.
                                    </p>
                                </li>

                                {/* 2 – derecha */}
                                <li className="flex items-start gap-3 md:absolute md:top-1/2 md:right-[8%] md:-translate-y-1/2 md:max-w-xs text-left">
                                    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-cardeno text-white font-bold">
                                        2
                                        <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-cardeno/60"></span>
                                    </span>
                                    <p className="text-sm sm:text-base">
                                        Asigna el monto a tus colaboradores o aliados desde la plataforma.
                                    </p>
                                </li>

                                {/* 3 – abajo */}
                                <li className="flex items-start gap-3 md:absolute md:bottom-[8%] md:left-1/2 md:-translate-x-1/2 md:max-w-xs text-center">
                                    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-cardeno text-white font-bold">
                                        3
                                        <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-cardeno/60"></span>
                                    </span>
                                    <p className="text-sm sm:text-base">
                                        Distribuye las tarjetas y permite su uso inmediato en cualquier comercio autorizado.
                                    </p>
                                </li>

                                {/* 4 – izquierda */}
                                <li className="flex items-start gap-3 md:absolute md:top-1/2 md:left-[8%] md:-translate-y-1/2 md:max-w-xs text-right">
                                    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-cardeno text-white font-bold">
                                        4
                                        <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-cardeno/60"></span>
                                    </span>
                                    <p className="text-sm sm:text-base">
                                        Monitorea el uso y genera reportes fiscales desde la app o plataforma.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        {/* CTAs */}
                        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={`https://wa.me/528138646238?text=${encodeURIComponent("Hola, quiero cotizar vales corporativos.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold
                   bg-mango text-noche shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-mango/50"
                            >
                                Cotiza ahora
                            </a>
                            <a
                                href={`https://wa.me/528138646238?text=${encodeURIComponent("Hola, me gustaría hablar con ustedes sobre sus vales.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold
                   bg-white text-noche border border-slate-300 shadow-sm hover:bg-slate-50
                   focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                            >
                                Habla con nosotros
                            </a>
                        </div>
                    </div>
                </section>



                <section className="bg-noche py-16">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid gap-12 lg:[grid-template-columns:1.25fr_0.75fr] lg:items-center lg:gap-16 xl:[grid-template-columns:1.2fr_0.8fr]">
                            <div className="max-w-3xl text-center text-mango lg:order-2 lg:mx-auto xl:pr-6">
                                <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                                    Agenda una cita para conocer mas sobre nuestros vales.
                                </h2>
                            </div>
                            <form className="w-full space-y-8 rounded-[2rem] bg-white px-6 py-10 shadow-[0_32px_70px_rgba(0,0,0,0.22)] lg:order-1 lg:max-w-[58rem] lg:px-16 lg:justify-self-end xl:max-w-[64rem]" noValidate>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Cuentanos mas de ti</legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input type="text" name="firstName" placeholder="Nombre" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                        <input type="text" name="lastName" placeholder="Apellido" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                    </div>
                                    <input type="text" name="role" placeholder="Tu cargo es" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                </fieldset>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Como podemos comunicarnos contigo?</legend>
                                    <div className="grid gap-4 sm:grid-cols-[0.8fr,1.2fr]">
                                        <div className="flex items-center gap-2 rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus-within:border-cardeno focus-within:ring-2 focus-within:ring-cardeno/30">
                                            <span className="font-semibold text-noche/80">+52</span>
                                            <input type="tel" name="phone" placeholder="Numero de celular" className="w-full border-none bg-transparent text-sm text-noche placeholder:text-noche/40 focus:outline-none" />
                                        </div>
                                        <input type="email" name="email" placeholder="Email empresarial" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                    </div>
                                </fieldset>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Cuentanos mas sobre tu empresa</legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input type="text" name="company" placeholder="Nombre de empresa" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30" />
                                        <select name="employees" defaultValue="" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30">
                                            <option value="" disabled>Numero de colaboradores</option>
                                            <option value="1-10">1 - 10</option>
                                            <option value="10-20">10 - 20</option>
                                            <option value="20-100">20 - 100</option>
                                            <option value="100+">Mas de 100</option>
                                        </select>
                                    </div>
                                    <select name="location" defaultValue="" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30">
                                        <option value="" disabled>Donde se encuentra tu empresa?</option>
                                        <option value="cdmx">CDMX</option>
                                        <option value="guadalajara">Guadalajara</option>
                                        <option value="monterrey">Monterrey</option>
                                        <option value="otro">Otra ciudad</option>
                                    </select>
                                </fieldset>
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">Como conociste a Payrolling-Tech?</legend>
                                    <select name="source" defaultValue="" className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30">
                                        <option value="" disabled>Como conociste a Payrolling-Tech?</option>
                                        <option value="referido">Referido</option>
                                        <option value="eventos">Eventos</option>
                                        <option value="redes">Redes sociales</option>
                                        <option value="busqueda">Busqueda en internet</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </fieldset>
                                <label className="flex items-start gap-3 text-xs text-noche/70">
                                    <input type="checkbox" name="terms" className="mt-1 h-4 w-4 rounded border border-noche/20 accent-cardeno focus:ring-cardeno" />
                                    <span>Al hacer clic en el boton "Agendar una cita", aceptaras nuestros Terminos, Condiciones y Politica de Privacidad.</span>
                                </label>
                                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#ffbf2b] px-6 py-3 text-base font-semibold text-noche shadow-[0_16px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffc947]">Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}











































