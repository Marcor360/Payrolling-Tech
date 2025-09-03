import Headers from "../components/header.tsx";
import Foters from "../components/footer.tsx"
export default function HomePage() {
    return (
        <div>
            <Headers />
            <section>
                <div style={{ backgroundImage: 'url("/img/tarjetas/web/Header fondo.webp")', backgroundSize: "cover", backgroundPosition: "center", height: "700px" }}>
                    <h1>Hola</h1>
                </div>
            </section>
            <Foters />
        </div >
    )
}
