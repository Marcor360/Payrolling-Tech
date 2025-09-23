import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import ServicesSlider from "../components/ServicesSlider";
import type { FormEvent } from "react";

import HeaderFondoWeb from "/img/tarjetas/web/Header fondo.webp?url";
import HeaderFondoMovil from "/img/tarjetas/mobile/fondo tarjetas.webp?url";

export default function HomePage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Contacto:", data);
    alert("\u00A1Gracias! Hemos recibido tu mensaje.");
    e.currentTarget.reset();
  };

  return (
    <div>
      <Header />
      {/* Hero responsive con fondo para movil y desktop */}
      <section
        aria-label="Hero"
        className="relative overflow-x-hidden overscroll-x-none"
      >
        <div className="relative isolate min-h-[680px] md:min-h-[750px]">
          {/* Imagen de fondo responsiva */}
          <picture>
            <source media="(min-width: 768px)" srcSet={HeaderFondoWeb} />
            <img
              src={HeaderFondoMovil}
              alt="Fondo de cabecera"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              loading="eager"
            />
          </picture>

          {/* Capa sutil para legibilidad */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-fondo-cremita/40 to-white/30" />

          {/* Contenido */}
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid grid-cols-1 md:[grid-template-columns:1.15fr_2.1fr] gap-10 lg:gap-14">
            {/* Texto principal (lado izquierdo) */}
            <div className="md:col-span-1 text-center md:text-left md:relative md:z-10 md:ml-0 md:pl-4 lg:-ml-12 lg:pl-0 xl:-ml-16 2xl:-ml-24">
              <h1 className="text-cardeno font-extrabold leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                {"POTENCIA, RET\u00C9N Y"}
                <br className="hidden sm:block" />
                DESARROLLA
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-noche/90">
                {"tu "}
                <span className="font-bold">activo</span>
                {" m\u00E1s importante"}
                <br className="hidden sm:block" />
                {"para "}
                <span className="font-extrabold">hacer negocio</span>
              </p>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-noche/80">
                {"Payrolling impulsa tu "}
                <span className="font-semibold">Gesti\u00F3n de Capital Humano</span>
                {" en cada etapa: atracci\u00F3n, desarrollo y retenci\u00F3n del talento que hace crecer a tu empresa."}
              </p>
            </div>

            {/* Lado derecho: encabezado de seccion para servicios */}
            <div id="servicios" className="md:col-span-1 flex flex-col items-center md:items-center lg:items-start scroll-mt-24 md:pt-6 lg:pt-0 md:pl-0 lg:pl-8">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-noche tracking-tight text-center md:text-left">
                NUESTROS SERVICIOS
              </h2>

              {/* Wrapper que limita el ancho del stack del slider */}
              <div className="mt-6 md:mt-4 w-full md:max-w-none">
                <ServicesSlider />
                {/* Contacto (tu formulario va abajo en su propia seccion) */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion de Contacto */}
      <section id="contacto" aria-label="Contacto" className="py-12 md:py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-noche tracking-tight">
            {"Cont\u00E1ctanos"}
          </h2>
          <p className="mt-2 text-noche/80">
            {"\u00BfListo para impulsar tu capital humano? Escr\u00EDbenos."}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-sm font-medium text-noche">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="given-name"
                className="mt-2 rounded-md border border-noche/20 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                placeholder="Tu nombre"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="apellido" className="text-sm font-medium text-noche">
                Apellido
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                autoComplete="family-name"
                className="mt-2 rounded-md border border-noche/20 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                placeholder="Tu apellido"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="empresa" className="text-sm font-medium text-noche">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                autoComplete="organization"
                className="mt-2 rounded-md border border-noche/20 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="correo" className="text-sm font-medium text-noche">
                Correo
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                autoComplete="email"
                className="mt-2 rounded-md border border-noche/20 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                placeholder="tu@empresa.com"
              />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="mensaje" className="text-sm font-medium text-noche">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                className="mt-2 rounded-md border border-noche/20 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                placeholder={"Cu\u00E9ntanos brevemente qu\u00E9 necesitas"}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-cardeno px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-cardeno/90 focus:outline-none focus:ring-2 focus:ring-cardeno/50"
                aria-label="Enviar formulario de contacto"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
