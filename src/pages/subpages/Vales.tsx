import { useEffect, useRef } from "react";
import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import ComoFunciona from "/img/Contenido/ComoFunciona.webp";

// importar svg
import beneficiosFiscalesSvg from "/img/svg/svg-vales/Beneficios fiscales.svg";
import coberturaNacionalSvg from "/img/svg/svg-vales/cobertura nacional.svg";
import eficienciaCorporativaSvg from "/img/svg/svg-vales/eficiencia corporativa.svg";
import flexibilidadSvg from "/img/svg/svg-vales/flexibilidad.svg";
import seguridadSvg from "/img/svg/svg-vales/seguridad.svg";

import ValesRecomp from "../../components/TarjetaVales.tsx";

const controlFinancieroTotalSvg = "/img/svg/svg-vales/control financiero total.svg";

export default function Vales() {
    const pageRef = useRef<HTMLDivElement>(null);

    // Scroll reveal (sutil, lento, una sola vez)
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;

        const els = root.querySelectorAll<HTMLElement>("[data-ani]");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target as HTMLElement;
                        el.classList.add("opacity-100", "translate-y-0");
                        io.unobserve(el);
                    }
                });
            },
            { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <div className="min-h-screen text-noche" ref={pageRef}>
            <Headers variant="dark" />

            <main className="flex flex-col gap-10 md:gap-14 pb-0">
                {/* === HERO / VALOR === */}
                <section id="valor" className="pt-16 md:pt-20 pb-6 md:pb-8">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
                        <h1
                            data-ani
                            style={{ transitionDelay: "60ms" }}
                            className="opacity-0 translate-y-4 transition-all duration-[1200ms]
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95]
                         tracking-tight font-extrabold text-cardeno"
                        >
                            Vales para tu empresa
                        </h1>

                        <p
                            data-ani
                            style={{ transitionDelay: "180ms" }}
                            className="opacity-0 translate-y-4 transition-all duration-[1200ms]
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         mt-5 text-[1.05rem] sm:text-lg md:text-xl"
                        >
                            <strong>Optimiza y controla</strong> los gastos de tu empresa con
                            nuestras <strong>tarjetas y vales</strong> corporativos.
                        </p>

                        <p
                            data-ani
                            style={{ transitionDelay: "300ms" }}
                            className="opacity-0 translate-y-4 transition-all duration-[1200ms]
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         mt-5 max-w-3xl mx-auto text-base sm:text-[1.05rem]"
                        >
                            Desde combustible, gastos de oficina, despensa y viáticos, hasta
                            incentivos, recompensas y regalos, nuestras soluciones te permiten
                            simplificar la gestión, motivar a tu equipo y maximizar beneficios
                            fiscales.
                        </p>

                        {/* CTAs */}
                        <div
                            data-ani
                            style={{ transitionDelay: "420ms" }}
                            className="opacity-0 translate-y-4 transition-all duration-[1200ms]
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a
                                href={`https://wa.me/528138646238?text=${encodeURIComponent(
                                    "Hola, me gustaría solicitar una demo de Vales para tu empresa. ¿Podemos agendar una llamada?"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Solicitar demo por WhatsApp"
                                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold
                           bg-mango text-noche shadow hover:brightness-95 focus:outline-none
                           focus:ring-2 focus:ring-mango/50"
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
                                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold
                           bg-white text-noche border border-slate-300 shadow-sm hover:bg-slate-50
                           focus:outline-none focus:ring-2 focus:ring-slate-300/50"
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
                            data-ani
                            className="opacity-0 translate-y-3 transition-all duration-[1200ms]
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         text-center text-3xl sm:text-4xl md:text-5xl font-black text-mango"
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
                                    desc: "Aceptadas en todo México gracias al sello CARNET.",
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
                            ].map(({ icon, title, desc }, i) => (
                                <li
                                    key={title}
                                    data-ani
                                    style={{ transitionDelay: `${140 + i * 120}ms` }}
                                    className="opacity-0 translate-y-6 transition-all duration-[1400ms]
                             ease-[cubic-bezier(0.22,1,0.36,1)]
                             flex items-start gap-5 rounded-2xl p-2"
                                >
                                    {/* ICONO MÁS GRANDE */}
                                    <div className="grid h-16 w-16 md:h-20 md:w-20 shrink-0 place-items-center rounded-2xl bg-cardeno/15 ring-1 ring-cardeno/30">
                                        <img
                                            src={icon}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className="h-10 w-10 md:h-14 md:w-14"
                                            width={56}
                                            height={56}
                                        />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white">
                                            <span className="font-bold">{title}:</span>
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/80">
                                            {desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Seccion ¿Como funciona? */}
                <section id="como-funciona" aria-labelledby="cf-title">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        {/* Imagen centrada y responsive */}
                        <figure
                            data-ani
                            className="opacity-0 translate-y-6 transition-all duration-[1400ms]
                         ease-[cubic-bezier(0.22,1,0.36,1)] mx-auto w-full"
                        >
                            <img
                                src={ComoFunciona}
                                alt="Diagrama de pasos: ¿Cómo funciona? 1) Elige la tarjeta o vale. 2) Asigna el monto desde la plataforma. 3) Distribuye y úsala de inmediato. 4) Monitorea y genera reportes."
                                loading="lazy"
                                decoding="async"
                                className="mx-auto block h-auto w-full max-w-[920px] select-none pointer-events-none"
                            />
                        </figure>
                    </div>
                </section>

                {/* Formulario de contacto */}
                <section className="bg-noche py-16">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid gap-12 lg:[grid-template-columns:1.25fr_0.75fr] lg:items-center lg:gap-16 xl:[grid-template-columns:1.2fr_0.8fr]">
                            <div
                                data-ani
                                className="opacity-0 translate-y-4 transition-all duration-[1400ms]
                           ease-[cubic-bezier(0.22,1,0.36,1)]
                           max-w-3xl text-center text-mango lg:order-2 lg:mx-auto xl:pr-6"
                            >
                                <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                                    Agenda una cita para conocer mas sobre nuestros vales.
                                </h2>
                            </div>

                            <form
                                data-ani
                                style={{ transitionDelay: "160ms" }}
                                className="opacity-0 translate-y-6 transition-all duration-[1400ms]
                           ease-[cubic-bezier(0.22,1,0.36,1)]
                           w-full space-y-8 rounded-[2rem] bg-white px-6 py-10
                           shadow-[0_32px_70px_rgba(0,0,0,0.22)] lg:order-1 lg:max-w-[58rem]
                           lg:px-16 lg:justify-self-end xl:max-w-[64rem]"
                                noValidate
                            >
                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        Cuentanos mas de ti
                                    </legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Nombre"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Apellido"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="Tu cargo es"
                                        className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                    />
                                </fieldset>

                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        Como podemos comunicarnos contigo?
                                    </legend>
                                    <div className="grid gap-4 sm:grid-cols-[0.8fr,1.2fr]">
                                        <div className="flex items-center gap-2 rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus-within:border-cardeno focus-within:ring-2 focus-within:ring-cardeno/30">
                                            <span className="font-semibold text-noche/80">+52</span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Numero de celular"
                                                className="w-full border-none bg-transparent text-sm text-noche placeholder:text-noche/40 focus:outline-none"
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email empresarial"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                    </div>
                                </fieldset>

                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        Cuentanos mas sobre tu empresa
                                    </legend>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Nombre de empresa"
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche placeholder:text-noche/40 focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        />
                                        <select
                                            name="employees"
                                            defaultValue=""
                                            className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                        >
                                            <option value="" disabled>
                                                Numero de colaboradores
                                            </option>
                                            <option value="1-10">1 - 10</option>
                                            <option value="10-20">10 - 20</option>
                                            <option value="20-100">20 - 100</option>
                                            <option value="100+">Mas de 100</option>
                                        </select>
                                    </div>
                                    <select
                                        name="location"
                                        defaultValue=""
                                        className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                    >
                                        <option value="" disabled>
                                            Donde se encuentra tu empresa?
                                        </option>
                                        <option value="cdmx">CDMX</option>
                                        <option value="guadalajara">Guadalajara</option>
                                        <option value="monterrey">Monterrey</option>
                                        <option value="otro">Otra ciudad</option>
                                    </select>
                                </fieldset>

                                <fieldset className="space-y-4">
                                    <legend className="text-base font-semibold text-noche">
                                        Como conociste a Payrolling-Tech?
                                    </legend>
                                    <select
                                        name="source"
                                        defaultValue=""
                                        className="w-full rounded-xl border border-noche/15 bg-white px-4 py-3 text-sm text-noche focus:border-cardeno focus:outline-none focus:ring-2 focus:ring-cardeno/30"
                                    >
                                        <option value="" disabled>
                                            Como conociste a Payrolling-Tech?
                                        </option>
                                        <option value="referido">Referido</option>
                                        <option value="eventos">Eventos</option>
                                        <option value="redes">Redes sociales</option>
                                        <option value="busqueda">Busqueda en internet</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </fieldset>

                                <label className="flex items-start gap-3 text-xs text-noche/70">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        className="mt-1 h-4 w-4 rounded border border-noche/20 accent-cardeno focus:ring-cardeno"
                                    />
                                    <span>
                                        Al hacer clic en el boton "Agendar una cita", aceptaras
                                        nuestros Terminos, Condiciones y Politica de Privacidad.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-full bg-[#ffbf2b] px-6 py-3 text-base font-semibold text-noche shadow-[0_16px_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffc947]"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
