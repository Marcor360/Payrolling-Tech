import { useEffect, useRef } from "react"; // <- agregado para las animaciones
import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import Nom1 from "/img/Contenido/Nom1.webp";
import Nom2 from "/img/Contenido/Nom2.webp";
//Svg
import Advertencia from "/img/svg/Advertencia.svg";

function Reveal({
    children,
    as: Tag = "div",
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    as?: any;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    el.classList.add("is-visible");
                    obs.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}

export default function Nom35() {
    return (
        <>
            {/* estilos mínimos para las animaciones */}
            <style>{`
        .reveal{
          opacity:0;
          transform: translateY(16px);
          transition: opacity .6s ease, transform .6s ease, box-shadow .3s ease, transform .3s ease;
          will-change: transform, opacity;
        }
        .reveal.is-visible{
          opacity:1;
          transform: none;
        }
      `}</style>

            <Headers />

            {/* Cabeza */}
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Columna de texto */}
                            <div className="px-6 py-12 sm:px-10 md:py-16 lg:px-14">
                                <Reveal as="h2" className="font-extrabold leading-tight tracking-tight">
                                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cardeno">
                                        Cumplimiento de
                                    </span>
                                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cardeno">
                                        la NOM-035
                                    </span>
                                </Reveal>

                                <Reveal delay={100}>
                                    <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-noche text-justify">
                                        <span className="font-semibold">La NOM-035-STPS</span> es una normativa
                                        <span className="font-semibold"> obligatoria en México</span> que busca
                                        identificar, analizar y prevenir los factores de riesgo psicosocial en el
                                        trabajo, fomentando un entorno organizacional favorable para los
                                        colaboradores.
                                    </p>
                                </Reveal>
                            </div>

                            {/* Columna de imagen */}
                            <Reveal delay={150} className="relative h-72 sm:h-80 md:h-full">
                                <img
                                    src={Nom1}
                                    alt="Profesional en oficina ilustrando bienestar laboral (NOM-035)"
                                    className="h-full w-full object-top md:object-center object-cover"
                                    loading="eager"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            {/* Porque es importante */}
            <section>
                <div className="relative bg-noche">
                    {/* Líneas decorativas (ocultas en mobile) */}
                    <span className="hidden md:block absolute left-0 top-6 h-1 w-28 bg-mango" />
                    <span className="hidden md:block absolute right-0 bottom-6 h-1 w-28 bg-mango" />

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <Reveal as="h3" className="text-center font-extrabold text-mango text-2xl sm:text-3xl md:text-4xl">
                            ¿Por qué es importante la NOM-035?
                        </Reveal>

                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Card 1 */}
                            <Reveal delay={0}>
                                <div className="rounded-xl bg-mango p-6 text-noche shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                                    <h4 className="font-extrabold leading-tight">¿Por qué es importante la NOM-035?</h4>
                                    <p className="mt-2 text-sm leading-relaxed">
                                        Ayuda a reducir el estrés laboral, la ansiedad, la fatiga crónica y otros riesgos
                                        psicosociales que impactan la salud de los empleados.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Card 2 */}
                            <Reveal delay={120}>
                                <div className="rounded-xl bg-mango p-6 text-noche shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                                    <h4 className="font-extrabold leading-tight">Cumplimiento legal:</h4>
                                    <p className="mt-2 text-sm leading-relaxed">
                                        Al ser obligatoria, las empresas que no cumplen con esta normativa pueden enfrentar
                                        sanciones económicas y legales.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Card 3 */}
                            <Reveal delay={220}>
                                <div className="rounded-xl bg-mango p-6 text-noche shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                                    <h4 className="font-extrabold leading-tight">Productividad y clima laboral:</h4>
                                    <p className="mt-2 text-sm leading-relaxed">
                                        Implementar la NOM-035 fortalece la cultura organizacional, mejora la satisfacción del
                                        personal y disminuye la rotación de talento.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            {/* cumplir con la NOM-035 */}
            <section>
                {/* Franja amarilla con el título */}
                <div className="bg-mango">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
                        <Reveal as="h3" className="text-centermangosm:text-2xl md:text-3xl leading-snug text-noche">
                            <span className="font-extrabold">En Payrolling Tech</span> facilitamos a tu
                            empresa todo lo necesario para cumplir con la{" "}
                            <span className="font-extrabold text-cardeno">NOM-035</span>
                        </Reveal>
                    </div>
                </div>

                {/* Contenido con las tarjetas de pasos */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                    {/* Fila superior (1,2,3) */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {/* 1 */}
                        <Reveal delay={0}>
                            <div className="
        relative rounded-xl border-2 border-mango/80 bg-white
        p-5 md:p-6
        min-h-[140px] md:min-h-[150px]
        shadow-sm transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        flex flex-col items-center justify-center text-center
      ">
                                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mango font-bold text-noche ring-4 ring-white shadow-md">
                                    1
                                </div>
                                <h4 className="font-extrabold text-noche leading-tight break-words">
                                    Diagnóstico organizacional
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-center text-noche/80 break-words">
                                    para identificar riesgos psicosociales.
                                </p>
                            </div>
                        </Reveal>

                        {/* 2 */}
                        <Reveal delay={100}>
                            <div className="
        relative rounded-xl border-2 border-mango/80 bg-white
        p-5 md:p-6
        min-h-[140px] md:min-h-[150px]
        shadow-sm transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        flex flex-col items-center justify-center text-center
      ">
                                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mango font-bold text-noche ring-4 ring-white shadow-md">
                                    2
                                </div>
                                <h4 className="font-extrabold text-noche leading-tight break-words">
                                    Aplicación de cuestionarios y evaluaciones oficiales
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-center text-noche/80 break-words">
                                    a los colaboradores.
                                </p>
                            </div>
                        </Reveal>

                        {/* 3 */}
                        <Reveal delay={200}>
                            <div className="
        relative rounded-xl border-2 border-mango/80 bg-white
        p-5 md:p-6
        min-h-[140px] md:min-h-[150px]
        shadow-sm transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        flex flex-col items-center justify-center text-center
      ">
                                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mango font-bold text-noche ring-4 ring-white shadow-md">
                                    3
                                </div>
                                <h4 className="font-extrabold text-noche leading-tight break-words">
                                    Elaboración de reportes y evidencias
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-center text-noche/80 break-words">
                                    que cumplen con los requisitos de la STPS.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Fila inferior (4,5) */}
                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {/* 4 */}
                        <Reveal delay={300}>
                            <div className="
        relative rounded-xl border-2 border-mango/80 bg-white
        p-5 md:p-6
        min-h-[140px] md:min-h-[150px]
        shadow-sm transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        flex flex-col items-center justify-center text-center
      ">
                                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mango font-bold text-noche ring-4 ring-white shadow-md">
                                    4
                                </div>
                                <h4 className="font-extrabold text-noche leading-tight break-words">
                                    Planes de acción y acompañamiento
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-center text-noche/80 break-words">
                                    para atender áreas de oportunidad detectadas.
                                </p>
                            </div>
                        </Reveal>

                        {/* 5 */}
                        <Reveal delay={400}>
                            <div className="
        relative rounded-xl border-2 border-mango/80 bg-white
        p-5 md:p-6
        min-h-[140px] md:min-h-[150px]
        shadow-sm transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        flex flex-col items-center justify-center text-center
      ">
                                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mango font-bold text-noche ring-4 ring-white shadow-md">
                                    5
                                </div>
                                <h4 className="font-extrabold text-noche leading-tight break-words">
                                    Capacitación y comunicación interna
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-center text-noche/80 break-words">
                                    para promover un entorno de trabajo saludable.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Recuadro morado inferior */}
                    <Reveal delay={200} className="mt-8 flex justify-center">
                        <div className="w-full max-w-5xl rounded-2xl bg-cardeno px-6 py-5 md:px-8 md:py-6 shadow-lg">
                            <p className="text-white leading-relaxed text-center md:text-justify">
                                De esta manera, tu empresa cumple con la normativa de forma sencilla y eficiente, protege a sus colaboradores y te posiciona como un empleador responsable y comprometido con el bienestar laboral.
                            </p>
                        </div>
                    </Reveal>
                </div>

            </section>

            {/* Advertencia */}
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    {/* Título (igual) */}
                    <Reveal as="h3" className="text-center font-extrabold text-cardeno text-3xl sm:text-4xl md:text-5xl leading-tight">
                        ¿Qué ocurre si una empresa
                        <br className="hidden sm:block" /> incumple con la NOM 035?
                    </Reveal>

                    {/* Intro */}
                    <Reveal delay={100}>
                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-noche/90 text-justify">
                            Al no cumplir con la NOM-035 en los centros de trabajo, las empresas pueden enfrentar
                            severas consecuencias legales y sanciones impuestas por las autoridades de México. Algunas
                            de ellas son:
                        </p>
                    </Reveal>

                    {/* Cuerpo: lista + imagen */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Lista */}
                        <ul className="space-y-6">
                            <Reveal as="li" delay={0} className="flex items-start gap-4 md:gap-5">
                                <span className="inline-block shrink-0 aspect-square w-4 sm:w-5 md:w-6 rounded-full bg-cardeno ring-2 ring-cardeno/30 translate-y-1" />
                                <p className="text-noche/90 text-base sm:text-lg leading-relaxed">
                                    <span className="font-extrabold text-noche">Sanciones económicas:</span> La empresa
                                    que no cumpla con la norma 035 puede ser objeto de sanciones económicas, como multas
                                    monetarias proporcionales a la gravedad del incumplimiento.
                                </p>
                            </Reveal>

                            <Reveal as="li" delay={120} className="flex items-start gap-4 md:gap-5">
                                <span className="inline-block shrink-0 aspect-square w-4 sm:w-5 md:w-6 rounded-full bg-cardeno ring-2 ring-cardeno/30 translate-y-1" />
                                <p className="text-noche/90 text-base sm:text-lg leading-relaxed">
                                    <span className="font-extrabold text-noche">Cierre temporal o definitivo:</span> Existen
                                    algunos casos graves de incumplimiento reiterado, donde las autoridades deciden ordenar
                                    el cierre temporal o definitivo de la empresa.
                                </p>
                            </Reveal>

                            <Reveal as="li" delay={240} className="flex items-start gap-4 md:gap-5">
                                <span className="inline-block shrink-0 aspect-square w-4 sm:w-5 md:w-6 rounded-full bg-cardeno ring-2 ring-cardeno/30 translate-y-1" />
                                <p className="text-noche/90 text-base sm:text-lg leading-relaxed">
                                    <span className="font-extrabold text-noche">Responsabilidad civil y penal:</span> Al no
                                    proporcionar un ambiente laboral seguro para sus trabajadores, los propietarios de las
                                    empresas pueden enfrentarse a demandas legales, compensaciones económicas y, en casos muy
                                    extremos, penas de prisión.
                                </p>
                            </Reveal>
                        </ul>

                        {/* Imagen */}
                        <Reveal delay={150} className="relative">
                            <img
                                src={Nom2}
                                alt="Persona con estrés en su lugar de trabajo"
                                className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-xl ring-1 ring-black/10 shadow-sm"
                                loading="lazy"
                                sizes="(min-width: 768px) 50vw, 100vw"
                            />
                        </Reveal>
                    </div>

                    {/* Franja inferior con advertencia */}
                    <Reveal delay={200} className="mt-10 sm:mt-12">
                        <div className="rounded-2xl px-4 sm:px-6 py-4">
                            <div className="flex items-start gap-4 md:gap-5">
                                <img
                                    src={Advertencia}
                                    alt="Advertencia"
                                    className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0"
                                    loading="lazy"
                                />
                                <p className="text-sm sm:text-base md:text-lg text-cardeno leading-relaxed">
                                    Las consecuencias por no cumplir con la NOM-035 pueden variar según la gravedad y
                                    frecuencia del incumplimiento. Por esto, es importante que las empresas conozcan la
                                    forma correcta de implementarla y se preocupen por cumplirla, así garantizan el
                                    bienestar laboral de sus empleados.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </>
    );
}
