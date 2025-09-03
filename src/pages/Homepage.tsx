import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import ServicesSlider from "../components/ServicesSlider";

import HeaderFondoWeb from "/img/tarjetas/web/Header fondo.webp?url";
import HeaderFondoMovil from "/img/tarjetas/mobile/fondo tarjetas.webp?url";

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* Hero responsive con fondo para móvil y desktop */}
      <section aria-label="Hero" className="relative">
        <div className="relative isolate min-h-[640px] md:min-h-[700px]">
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
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Texto principal (lado izquierdo) */}
            <div>
              <h1 className="text-cardeno font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl">
                POTENCIA, RETÉN Y
                <br className="hidden sm:block" />
                DESARROLLA
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-noche/90">
                tu <span className="font-bold">activo</span> más importante
                <br className="hidden sm:block" />
                para <span className="font-extrabold">hacer negocio</span>
              </p>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-noche/80">
                Payrolling impulsa tu <span className="font-semibold">Gestión de Capital Humano</span>
                en cada etapa: atracción, desarrollo y retención del talento que hace
                crecer a tu empresa.
              </p>
            </div>

            {/* Lado derecho: encabezado de sección para servicios */}
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-noche tracking-tight">
                NUESTROS SERVICIOS
              </h2>
              <div className="mt-6">
                {/* Slider de servicios */}
                <ServicesSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

