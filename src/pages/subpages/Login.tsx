import { useState } from "react";
import Headers from "../../components/header.tsx";
import Foter from "../../components/footer.tsx";
import Text2 from "/img/textos/IngresaYfasilitaTusProcesos.webp";
import Colient1 from "/img/img-tarjetas/Cliente1.webp";
import Colient2 from "/img/img-tarjetas/Cliente2.webp";
import Colab1 from "/img/img-tarjetas/Colaborador1.webp";
import Colab2 from "/img/img-tarjetas/Colaborador2.webp";

function Card({
    label,
    imgDefault,
    imgActive,
    align = "left",
    href = "",
}: {
    label: string;
    imgDefault: string;
    imgActive: string;
    align?: "left" | "right";
    href?: string;
}) {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);
    const src = hover || open ? imgActive : imgDefault;

    return (
        <>
            <div
                className={`relative mx-auto w-full max-w-md transition-transform duration-300 ${align === "right" ? "md:rotate-3" : "md:-rotate-3"}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setOpen(true);
                }}
                aria-label={`${label}. Tocar o hacer clic para ingresar`}
            >
                <img
                    src={src}
                    alt={label}
                    className="w-full h-auto rounded-2xl ring-2 ring-cardeno shadow-xl select-none"
                    draggable={false}
                />
                <span
                    className={`absolute ${align === "right" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 -rotate-90 bg-cardeno text-white px-3 py-1 rounded-md font-bold shadow`}
                >
                    {label}
                </span>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Ingresar a ${label}`}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={imgActive}
                            alt={`${label} ampliado`}
                            className="w-full max-w-2xl md:max-w-3xl h-auto rounded-2xl ring-4 ring-cardeno shadow-2xl"
                        />
                        <a
                            href={href}
                            className="absolute inset-0 m-auto h-12 w-48 flex items-center justify-center rounded-xl bg-yellow-400 text-noche font-extrabold shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                        >
                            Ingresar
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}


export default function Login() {
    return (
        <>
            <Headers />
            <section id="login" aria-label="Ingresar y facilitar procesos" className="relative overflow-hidden py-12 md:py-16 bg-[#f6f3ef] scroll-mt-24">
                {/* Texto de fondo */}
                <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-center z-0">
                    <img src={Text2} alt="¡Ingresa y facilita tus procesos!" className="w-[90%] max-w-5xl h-auto opacity-100" />
                </div>

                {/* Tarjetas */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Colaboradores */}
                    <Card
                        label="Colaboradores"
                        imgDefault={Colab1}
                        imgActive={Colab2}
                        href="http://payrolling-tech.webhop.org:9362/mn/sirele/index"
                    />

                    {/* Clientes */}
                    <Card
                        label="Clientes"
                        imgDefault={Colient1}
                        imgActive={Colient2}
                        align="right"
                        href="http://payrolling-tech.webhop.org:9362/mn/index"
                    />
                </div>
            </section>
            <Foter />
        </>
    );
}