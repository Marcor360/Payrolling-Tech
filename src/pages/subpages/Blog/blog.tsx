import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Headers from "../../../components/header.tsx";
import Footer from "../../../components/footer.tsx";
import Img1 from "/img/Contenido/Blog/1.webp";
import Img2 from "/img/Contenido/Blog/2.webp";
import Img3 from "/img/Contenido/Blog/3.webp";
import Img4 from "/img/Contenido/Blog/4.webp";
import Img5 from "/img/Contenido/Blog/5.webp";
import Img6 from "/img/Contenido/Blog/6.webp";
import Img7 from "/img/Contenido/Blog/7.webp";
import Img8 from "/img/Contenido/Blog/8.webp";
import Img9 from "/img/Contenido/Blog/9.webp";
import Img10 from "/img/Contenido/Blog/10.webp";
/* import Img2 from "/img/Contenido/Blog/2.webp"; */

type Category = { id: string; label: string; enabled: boolean };

const CATEGORIES: Category[] = [
    { id: "all", label: "Ver todos", enabled: true },
    { id: "beneficios", label: "Beneficios", enabled: true },
    { id: "reclutamiento", label: "Reclutamiento", enabled: true },
    { id: "vales", label: "Vales e incentivos", enabled: true },
    { id: "nomina", label: "Nómina", enabled: true },
    { id: "nom35", label: "Seguros NOM. 35", enabled: false },
];

const VISIBLE_CATEGORIES = CATEGORIES.filter((c) => c.enabled);

type Post = {
    id: string;
    tag: string;
    categoryId: Category["id"];
    title: string;
    excerpt: string;
    image: string;
    alt: string;
    path: string;
};

const POSTS: Post[] = [
    // =============== RECLUTAMIENTO ===============
    {
        id: "reclutamiento-estrategias-efectivas-mexico",
        tag: "Reclutamiento",
        categoryId: "reclutamiento",
        title: "Reclutamiento de personal en México: estrategias efectivas para empresas",
        excerpt:
            "Estrategias actuales para acelerar la cobertura de vacantes combinando análisis de perfiles, canales digitales y métricas accionables.",
        image: Img1,
        alt: "Reunión de equipo de recursos humanos revisando candidatos",
        path: "/blog/reclutamiento/estrategias-efectivas-mexico",
    },
    {
        id: "reclutamiento-seleccion-candidato-ideal",
        tag: "Selección",
        categoryId: "reclutamiento",
        title: "Selección de personal eficiente: cómo elegir al candidato ideal en México",
        excerpt:
            "Guía práctica para definir perfiles, estructurar entrevistas y evaluar objetivamente a cada candidato para reducir la rotación.",
        image: Img2,
        alt: "Entrevista de trabajo en sala de juntas",
        path: "/blog/reclutamiento/seleccion-candidato-ideal",
    },
    {
        id: "reclutamiento-tendencias-digitales-2025",
        tag: "Tendencias",
        categoryId: "reclutamiento",
        title: "Tendencias del reclutamiento digital en México 2025",
        excerpt:
            "Panorama de automatización, IA y analítica aplicada al reclutamiento para atraer talento con mejores experiencias en 2025.",
        image: Img3,
        alt: "Reclutador usando herramientas digitales",
        path: "/blog/reclutamiento/tendencias-digitales-2025",
    },

    // =============== NÓMINA ===============
    {
        id: "nomina-beneficios-maquila-pymes",
        tag: "Nómina",
        categoryId: "nomina",
        title: "Beneficios para PYMEs al usar maquila de nómina en México",
        excerpt:
            "Ahorra tiempo, costos y riesgos delegando la nómina: pagos puntuales, timbrado CFDI 4.0 y tableros ejecutivos para tomar decisiones.",
        image: Img7, // cámbialo por la imagen que uses en cards (p. ej., Img7)
        alt: "Equipo de PYME revisando la nómina en una plataforma digital",
        path: "/blog/nomina/beneficios-maquila-pymes",
    },

    {
        id: "nomina-tendencias-maquila-2025",
        tag: "Nómina",
        categoryId: "nomina",
        title: "Tendencias tecnológicas en maquila de nómina en México 2025",
        excerpt:
            "Conoce las tecnologías que modernizan la maquila de nómina: nube, IA y automatización para asegurar cumplimiento y precisión.",
        image: Img8,
        alt: "Especialista de nómina analizando reportes digitales",
        path: "/blog/nomina/tendencias-maquila-2025",
    },

    // =============== BENEFICIOS ===============
    {
        id: "beneficios-seguros-vida-corporativos",
        tag: "Beneficios",
        categoryId: "beneficios",
        title: "Seguros de vida corporativos en México: qué debe saber tu empresa",
        excerpt:
            "Descubre cómo un seguro de vida corporativo refuerza la propuesta de valor al empleado y qué factores evaluar antes de contratarlo.",
        image: Img9,
        alt: "Equipo corporativo celebrando resultados",
        path: "/blog/beneficios/seguros-vida-corporativos",
    },
    {
        id: "beneficios-seguro-vida-retencion-talento",
        tag: "Beneficios",
        categoryId: "beneficios",
        title: "Beneficios del seguro de vida para empleados y retención de talento",
        excerpt:
            "Aprovecha el seguro de vida como diferenciador de bienestar y retención con recomendaciones prácticas para comunicarlo a tu equipo.",
        image: Img10,
        alt: "Empleado recibiendo asesoría sobre beneficios corporativos",
        path: "/blog/beneficios/seguro-vida-retencion-talento",
    },

    // =============== VALES ===============
    {
        id: "vales-incentivo-guia-legal-fiscal",
        tag: "Beneficios",
        categoryId: "vales",
        title: "Vales de incentivo para empleados en México: guía legal y fiscal",
        excerpt:
            "Lineamientos fiscales y operativos para implementar vales de incentivo sin incrementar la carga salarial ni perder control.",
        image: Img4,
        alt: "Tarjetas de beneficios corporativos sobre escritorio",
        path: "/blog/vales/vales-incentivo-guia-legal",
    },
    {
        id: "vales-bonos-incentivos",
        tag: "Incentivos",
        categoryId: "vales",
        title: "Bonos e incentivos corporativos: cómo estructurarlos con vales",
        excerpt:
            "Diseña esquemas de bonos con vales que impulsen resultados, mantengan control financiero y eleven la motivación del equipo.",
        image: Img5,
        alt: "Gerente entregando bono a colaborador",
        path: "/blog/vales/bonos-incentivos-con-vales",
    },
    {
        id: "vales-digitales-futuro-incentivos",
        tag: "Incentivos",
        categoryId: "vales",
        title: "Vales digitales en México: el futuro de los incentivos laborales",
        excerpt:
            "Explora cómo los vales digitales integran omnicanalidad, gamificación y analítica para reconocer al talento en tiempo real.",
        image: Img6,
        alt: "Empleado usando tarjeta de vales digital",
        path: "/blog/vales/vales-digitales-futuro",
    },
];


function BlogCard({ post }: { post: Post }) {
    const { tag, title, excerpt, image, alt, path } = post;
    const thumbnail = image ?? Img1;
    return (
        <article className="rounded-2xl p-4 md:p-6 lg:p-7 border-2 border-noche/20 bg-fondo-cremita">
            {/* GRID: dos columnas desde md y altura igualada */}
            <div className="grid md:[grid-template-columns:minmax(0,420px)_1fr] items-stretch gap-4 md:gap-6">
                {/* IMAGEN */}
                <div className="relative self-stretch w-full min-h-[220px] md:min-h-[380px] lg:min-h-[460px] overflow-hidden rounded-2xl bg-blanco border border-cardeno/20">
                    <img
                        src={thumbnail}
                        alt={alt}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* TEXTO (siempre centrado) */}
                <div className="md:pl-2 flex flex-col">
                    <span className="text-cardeno font-bold text-sm md:text-base block text-center mb-2">
                        {tag}
                    </span>

                    <h3 className="text-noche font-extrabold text-xl sm:text-2xl leading-snug text-center">
                        {title}
                    </h3>

                    <p className="mt-3 text-noche/90 text-base leading-relaxed text-center">
                        {excerpt}
                    </p>

                    {/* CTA centrado */}
                    <div className="mt-4 md:mt-6 flex justify-center">
                        <Link
                            to={path}
                            className="group relative inline-flex items-center rounded-xl border-2 border-cardeno px-5 py-3 font-semibold text-cardeno bg-blanco"
                        >
                            <span>Leer más</span>
                            <span className="ml-4 inline-flex size-8 items-center justify-center rounded-full border-2 border-cardeno transition-transform group-hover:translate-x-0.5">
                                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                                    <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState<Category["id"]>("all");
    const [showAll, setShowAll] = useState(false);
    const INITIAL_VISIBLE = 3;

    const postsToDisplay = useMemo(() => {
        if (selectedCategory === "all") return POSTS;
        return POSTS.filter((post) => post.categoryId === selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        setShowAll(false);
    }, [selectedCategory]);

    const visiblePosts = showAll ? postsToDisplay : postsToDisplay.slice(0, INITIAL_VISIBLE);

    return (
        <>
            <Headers variant="dark" />

            {/* HERO */}
            <section className="bg-fondo-cremita pt-10 md:pt-14 pb-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-cardeno text-center font-extrabold tracking-tight leading-tight text-4xl sm:text-5xl md:text-7xl">
                        Blog de Payrolling Tech
                    </h1>

                    <div className="mt-5 space-y-2 md:mx-auto md:max-w-3xl lg:max-w-4xl">
                        <p className="text-noche text-base sm:text-lg leading-relaxed text-center text-balance">
                            <span className="font-semibold">
                                Descubre las mejores prácticas en gestión del talento, liderazgo
                                y cultura organizacional
                            </span>
                        </p>
                        <p className="text-noche text-base sm:text-lg leading-relaxed text-center text-balance">
                            que impulsan el <span className="font-semibold">bienestar y compromiso</span> de tus colaboradores,
                            fortaleciendo el <span className="font-semibold">crecimiento de tu empresa.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO */}
            <section className="py-6 md:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:[grid-template-columns:300px_1fr] gap-6 lg:gap-8">
                    {/* Sidebar (solo desktop) */}
                    <aside className="hidden lg:block">
                        <h2 className="text-cardeno text-3xl md:text-4xl font-extrabold mb-3 text-center">
                            Categorías
                        </h2>

                        <nav
                            aria-label="Categorías"
                            className="overflow-hidden rounded-2xl border-2 border-noche/20 bg-blanco text-center"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedCategory("all")}
                                className={`block w-full px-5 py-4 font-semibold transition-colors ${selectedCategory === "all"
                                    ? "bg-noche text-blanco"
                                    : "hover:bg-fondo-cremita/70"
                                    }`}
                                aria-current={selectedCategory === "all" ? "page" : undefined}
                            >
                                Ver todos
                            </button>
                            {VISIBLE_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                                <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(c.id)}
                                    className={`block w-full px-5 py-4 border-t border-noche/20 transition-colors ${selectedCategory === c.id
                                        ? "bg-fondo-cremita/70 font-semibold text-noche"
                                        : "hover:bg-fondo-cremita/70"
                                        }`}
                                    aria-current={selectedCategory === c.id ? "page" : undefined}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Cards */}
                    <div className="space-y-6 md:space-y-8">
                        {visiblePosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}

                        {postsToDisplay.length === 0 && (
                            <div className="rounded-xl border-2 border-dashed border-cardeno/40 bg-blanco px-6 py-10 text-center text-noche">
                                Estamos preparando contenido para esta categoría. Vuelve pronto.
                            </div>
                        )}

                        {/* Botón Ver más */}
                        {postsToDisplay.length > INITIAL_VISIBLE && (
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setShowAll((prev) => !prev)}
                                    className="w-full sm:w-auto rounded-xl bg-mango px-7 py-3 text-noche font-extrabold shadow-sm border border-noche/10"
                                    aria-expanded={showAll}
                                >
                                    {showAll ? "Ver menos" : "Ver más"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

