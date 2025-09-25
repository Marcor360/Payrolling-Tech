import Headers from "../../components/header.tsx";
import Foter from "../../components/footer.tsx";
import Text2 from "/img/textos/IngresaYfasilitaTusProcesos.webp";
import Colient2 from "/img/img-tarjetas/Cliente2.webp";
import Colab2 from "/img/img-tarjetas/Colaborador2.webp";

function Card({
    label,
    // align = "left", // removed unused prop
    href = "",
}: {
    label: string;
    imgActive: string;
    align?: "left" | "right";
    href?: string;
}) {
    // Visual styles based on label
    const isClientes = label === "Clientes";
    const cardBg = isClientes ? "bg-cardeno" : "bg-yellow-400";
    const pillBg = isClientes ? "bg-yellow-400 text-cardeno" : "bg-cardeno text-white";
    const buttonBg = isClientes ? "bg-yellow-400 text-cardeno" : "bg-cardeno text-white";
    const buttonFont = "font-bold text-lg";
    return (
        <div
            className={`relative mx-auto w-full max-w-[270px] h-[400px] rounded-[2rem] shadow-2xl flex flex-col items-center justify-between ${cardBg}`}
            style={{
                background:
                  isClientes
                    ? "repeating-radial-gradient(circle at 40% 40%, #a259e6 0px, #8f00ff 30px, #a259e6 60px)"
                    : "repeating-radial-gradient(circle at 60% 40%, #ffd600 0px, #ffb300 30px, #ffd600 60px)",
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10) inset, 0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
        >
            {/* Pill label centered at top */}
            {/* Pill label centered at top */}
            <div className="absolute left-0 top-8 w-full flex justify-center">
                <span className={`rounded-2xl px-8 py-4 ${pillBg} ${buttonFont} shadow-md`} style={{marginTop:0}}>{label}</span>
            </div>
            {/* Form fields placeholder (not shown in this code) */}
            <div className="flex-1 w-full flex flex-col justify-center items-center gap-6 pt-20">
                {/* ...existing code for inputs if any... */}
            </div>
            {/* Button flush with bottom */}
            <div className="w-full flex justify-center pb-8">
                <a href={href} className={`w-48 py-3 rounded-md shadow ${buttonBg} ${buttonFont} hover:scale-105 transition-transform flex items-center justify-center`}>
                    Ingresar
                </a>
            </div>
        </div>
    );
}


export default function Login() {
    return (
        <>
            <Headers />
            <section id="login" aria-label="Ingresar y facilitar procesos" className="relative overflow-hidden py-4 md:py-8 bg-[#f6f3ef] scroll-mt-24">
                {/* Imagen conoce nuestros servicios arriba */}
                <div className="flex justify-center mb-2">
                    <img src={Text2} alt="¡Ingresa y facilita tus procesos!" className="w-[50%] max-w-xl h-auto" />
                </div>
                {/* Tarjetas */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center place-items-center min-h-[500px]">
                    <Card
                        label="Colaboradores"
                        imgActive={Colab2}
                        href="http://payrolling-tech.webhop.org:9362/mn/sirele/index"
                    />
                    <Card
                        label="Clientes"
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