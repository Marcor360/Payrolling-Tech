import { useState } from "react";
import { Link } from "react-router-dom";

// IMÁGENES (frente)
import ValesDesp from "/img/img-tarjetas/Despensa_frontal.webp";
import ValesGas from "/img/img-tarjetas/Gasolina_frontal.webp";
import ValesGasCorp from "/img/img-tarjetas/Gastos corporativos_frontal.webp";
import ValesRecomp from "/img/img-tarjetas/Recompensas_frontal.webp";

// IMÁGENES (vuelta)
import valeDespensaVuelta from "/img/textos/Despensa_Vuelta.webp";
import valeGasolinaVuelta from "/img/textos/Gasolina_Vuelta.webp";
import valeGastosCorporativosVuelta from "/img/textos/Gastos Corporativos_Vuelta.webp";
import valeRecompensasVuelta from "/img/textos/Recompensas_Vuelta.webp";

// ===== Tipos y datos =====
type Producto = {
    id: string;
    titulo: string[];
    frontImg: string;
    backImg: string;
    route: string;
};

const PRODUCTOS: Producto[] = [
    {
        id: "recompensas",
        titulo: ["Tarjetas de", "recompensas", "e incentivos"],
        frontImg: ValesRecomp,
        backImg: valeRecompensasVuelta,
        route: "/vales-incentivos",
    },
    {
        id: "despensa",
        titulo: ["Vales de", "despensa"],
        frontImg: ValesDesp,
        backImg: valeDespensaVuelta,
        route: "/vales-despensa",
    },
    {
        id: "gasolina",
        titulo: ["Vales de", "gasolina"],
        frontImg: ValesGas,
        backImg: valeGasolinaVuelta,
        route: "/vales-gasolina",
    },
    {
        id: "gastos-corporativos",
        titulo: ["Tarjeta de", "gastos", "corporativos"],
        frontImg: ValesGasCorp,
        backImg: valeGastosCorporativosVuelta,
        route: "/vales-gastos",
    },
];

// ===== Componente principal =====
export default function TarjetaVales() {
    return (
        <section id="productos" className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    {PRODUCTOS.map((p) => (
                        <ProductoFlipCard key={p.id} data={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ===== Subcomponente: Card con flip =====
function ProductoFlipCard({ data }: { data: Producto }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <article
            id={data.id}
            className="group relative h-[250px] sm:h-[250px] md:h-[270px] lg:h-[400px] [perspective:720px]"
            onClick={() => setFlipped((v) => !v)} // tap en móvil
            role="button"
            aria-label={data.titulo.join(" ")}
        >
            <div
                className="relative h-full w-full rounded-2xl transition-transform duration-700
                   [transform-style:preserve-3d]
                   md:group-hover:[transform:rotateY(180deg)]"
                style={flipped ? { transform: "rotateY(180deg)" } : undefined}
            >
                {/* FRONT */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl border border-black/5 [backface-visibility:hidden]">
                    <img
                        src={data.frontImg}
                        alt={`${data.id} frontal`}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        draggable={false}
                    />
                    <span className="sr-only">{data.titulo.join(" ")}</span>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-2xl shadow-xl border border-black/5 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img
                        src={data.backImg}
                        alt={`${data.id} reverso`}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative z-10 flex h-full flex-col">
                        <ul className="px-5 py-6 sm:px-6 sm:py-7 space-y-2.5 text-white text-sm sm:text-[15px] leading-relaxed">
                        </ul>

                        <Link
                            to={data.route}
                            onClick={(event) => event.stopPropagation()}
                            className="mt-auto block w-full rounded-b-2xl border-t border-white/25 bg-white/15 py-3.5 text-center font-semibold text-white backdrop-blur hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40"
                            aria-label={`Conoce más sobre ${data.titulo.join(" ")}`}
                        >
                            Conoce más
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
