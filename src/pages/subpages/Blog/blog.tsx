import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Headers from "../../../components/header.tsx";
import Footer from "../../../components/footer.tsx";
import Img1 from "/img/Contenido/Blog/1.webp";
/*import Img2 from "/img/Contenido/Blog/2.webp";*/

type Category = { id: string; label: string; enabled: boolean };

const CATEGORIES: Category[] = [
    { id: "all", label: "Ver todos", enabled: true },
    { id: "beneficios", label: "Beneficios", enabled: true },
    { id: "reclutamiento", label: "Reclutamiento", enabled: false },
    { id: "vales", label: "Vales", enabled: false },
    { id: "nomina", label: "Nómina", enabled: false },
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
    {
        id: "beneficios-atraccion-de-personal",
        tag: "Beneficios",
        categoryId: "beneficios",
        title: "Cómo atraer talento: Estrategias para construir equipos sólidos y exitosos",
        excerpt:
            "En un entorno laboral cada vez más competitivo, atraer y retener talento se ha convertido en uno de los mayores desafíos para las empresas. Ya no se trata solo de llenar vacantes, sino de construir equipos comprometidos, motivados y alineados con los objetivos del negocio.",
        image: Img1,
        alt: "Personas celebrando en oficina",
        path: "/blog/beneficios/atraccion-de-personal",
    },
];

function BlogCard({ post }: { post: Post }) {
    const { tag, title, excerpt, image, alt, path } = post;
    return (
        <article className="rounded-2xl p-4 md:p-6 lg:p-7 border-2 border-noche/20">
            {/* Layout: grid de dos columnas desde md */}
            <div className="grid md:[grid-template-columns:minmax(0,360px)_1fr] gap-4 md:gap-6 items-center">
                {/* Imagen responsive */}
                <div className="w-full overflow-hidden rounded-2xl bg-fondo-cremita border border-cardeno/10">
                    <div className="aspect-[4/3] md:aspect-[3/2] w-full">
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Texto */}
                <div className="md:pl-2">
                    <span className="text-cardeno font-bold text-sm md:text-base block text-center md:text-left mb-2">
                        {tag}
                    </span>

                    <h3 className="text-noche font-extrabold text-xl sm:text-2xl leading-snug text-center md:text-left">
                        {title}
                    </h3>

                    <p className="mt-3 text-noche/90 text-base leading-relaxed text-center md:text-justify">
                        {excerpt}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 md:mt-6 flex justify-center md:justify-start">
                        <Link
                            to={path}
                            className="group relative inline-flex items-center rounded-xl border-2 border-cardeno px-5 py-3 font-semibold text-cardeno"
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
    const [showMoreMobile, setShowMoreMobile] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category["id"]>("all");

    const postsToDisplay = useMemo(() => {
        if (selectedCategory === "all") {
            return POSTS;
        }

        return POSTS.filter((post) => post.categoryId === selectedCategory);
    }, [selectedCategory]);

    return (
        <>
            <Headers variant="dark" />

            {/* HERO (parche de tipografía y alineación) */}
            <section className="bg-fondo-cremita pt-10 md:pt-14 pb-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-cardeno text-center font-extrabold tracking-tight leading-tight
                   text-4xl sm:text-5xl md:text-7xl">
                        Blog de Payrolling Tech
                    </h1>

                    {/* Limita el ancho y justifica solo desde md */}
                    <div className="mt-5 space-y-2 md:mx-auto md:max-w-3xl lg:max-w-4xl">
                        <p className="text-noche text-base sm:text-lg leading-relaxed text-center
                    md:[text-align:justify] text-balance">
                            <span className="font-semibold">
                                Descubre las mejores prácticas en gestión del talento, liderazgo y cultura organizacional
                            </span>
                        </p>
                        <p className="text-noche text-base sm:text-lg leading-relaxed text-center
                    md:[text-align:justify] text-balance">
                            que impulsan el <span className="font-semibold">bienestar y compromiso</span> de tus colaboradores,
                            fortaleciendo el <span className="font-semibold">crecimiento de tu empresa.</span>
                        </p>
                    </div>
                </div>
            </section>


            {/* CONTENIDO */}
            <section className="py-6 md:py-10">
                {/* Ajuste: sidebar + contenido en dos columnas desde lg */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:[grid-template-columns:300px_1fr] gap-6 lg:gap-8">
                    {/* Sidebar (solo desktop) */}
                    <aside className="hidden lg:block">
                        <h2 className="text-cardeno text-3xl md:text-4xl font-extrabold mb-3">Categorías</h2>

                        <div className="overflow-hidden rounded-2xl border-2 border-noche/20 bg-blanco">
                            <button
                                type="button"
                                onClick={() => setSelectedCategory("all")}
                                className={`block w-full px-5 py-4 text-left font-semibold transition-colors ${selectedCategory === "all"
                                        ? "bg-noche text-blanco"
                                        : "bg-noche text-blanco/70 hover:text-blanco"
                                    }`}
                                aria-current={selectedCategory === "all"}
                            >
                                Ver todos
                            </button>
                            {VISIBLE_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                                <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(c.id)}
                                    className={`block w-full px-5 py-4 border-t border-noche/20 text-left transition-colors ${selectedCategory === c.id
                                            ? "bg-fondo-cremita/70 font-semibold text-noche"
                                            : "hover:bg-fondo-cremita/70"
                                        }`}
                                    aria-current={selectedCategory === c.id}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Cards */}
                    <div className="space-y-6 md:space-y-8">
                        {postsToDisplay.map((post, index) => {
                            const hiddenOnMobile = !showMoreMobile && index > 1;
                            return (
                                <div
                                    key={post.id}
                                    className={hiddenOnMobile ? "hidden md:block" : ""}
                                >
                                    <BlogCard post={post} />
                                </div>
                            );
                        })}

                        {postsToDisplay.length === 0 && (
                            <div className="rounded-xl border-2 border-dashed border-cardeno/40 bg-blanco px-6 py-10 text-center text-noche">
                                Estamos preparando contenido para esta categoría. Vuelve pronto.
                            </div>
                        )}

                        {/* Botón Ver más SOLO mobile */}
                        {postsToDisplay.length > 2 && (
                            <div className="md:hidden flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setShowMoreMobile((v) => !v)}
                                    className="w-full sm:w-auto rounded-xl bg-mango px-7 py-3 text-noche font-extrabold shadow-sm border border-noche/10"
                                    aria-expanded={showMoreMobile}
                                >
                                    {showMoreMobile ? "Ver menos" : "Ver más"}
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
