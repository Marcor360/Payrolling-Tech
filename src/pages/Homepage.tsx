import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import ServicesSlider from "../components/ServicesSlider";
import type { FormEvent } from "react";

import HeaderFondoWeb from "/img/tarjetas/web/Header fondo.webp?url";
import HeaderFondoMovil from "/img/tarjetas/mobile/fondo tarjetas.webp?url";
const CONTACT_SERVICES = [
  { id: "reclutamiento", label: "Reclutamiento" },
  { id: "nomina", label: "Nómina" },
  { id: "vales", label: "Vales" },
  { id: "seguros-nom-35", label: "Seguros NOM. 35" },
  { id: "beneficios", label: "Beneficios" },
];



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
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 flex flex-col items-center">
            <div className="w-full text-center">
              <h1 className="text-cardeno font-extrabold leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                IMPULSA, RETEN Y DESARROLLA
              </h1>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-noche tracking-tight">
                NUESTROS SERVICIOS
              </h2>
            </div>

            <div id="servicios" className="mt-6 md:mt-8 w-full md:max-w-none scroll-mt-24 flex justify-center">
              <ServicesSlider />
            </div>

            <div className="mt-6 w-full text-center">
              <p className="text-lg sm:text-xl text-noche/90 mx-auto">
                {"tu "}
                <span className="font-bold">activo</span>
                {" más importante"}
                <br className="hidden sm:block" />
                {"para "}
                <span className="font-extrabold">fortalecer tu negocio</span>
              </p>
              <p className="mt-4 max-w-3xl text-sm sm:text-base text-cardeno md:max-w-2xl mx-auto">
                {"Payrolling-tech potencia la "}
                <span className="font-semibold">Gestión de Capital Humano</span>
                {" en cada etapa: Atracción, Control y Retención de talento."}
              </p>
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
            {"\u00BfListo para impulsar tu capital humano? Escríbenos."}
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
              <label htmlFor="servicio" className="text-sm font-medium text-noche">
                Servicio de interés
              </label>
              <span className="text-xs text-noche/70">
                Selecciona la solución que mejor se ajuste a tus necesidades.
              </span>
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg shadow-black/10 transition-all focus-within:border-cardeno/60 focus-within:shadow-xl">
                <select
                  id="servicio"
                  name="servicio"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl bg-transparent px-4 py-2 text-noche focus:outline-none focus:ring-2 focus:ring-cardeno/60"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {CONTACT_SERVICES.map((service) => (
                    <option key={service.id} value={service.label}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
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
                placeholder={"Cuéntanos brevemente qué necesitas"}
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
