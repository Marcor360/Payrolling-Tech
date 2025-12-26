import { config } from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

config();

const API_KEY = process.env.VITE_CHECKID_API_KEY;
const BASE_URL = (process.env.VITE_CHECKID_BASE_URL || "https://www.checkid.mx/api").replace(/\/$/, "");
const TARGET_URL = `${BASE_URL}/Busqueda`;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/checkid", async (req, res) => {
  if (!API_KEY) {
    res.status(500).json({ exitoso: false, error: "Falta VITE_CHECKID_API_KEY en el servidor" });
    return;
  }

  try {
    const upstream = await fetch(TARGET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ApiKey: API_KEY,
        TerminoBusqueda: req.body?.TerminoBusqueda,
        ObtenerRFC: req.body?.ObtenerRFC ?? true,
        ObtenerCURP: req.body?.ObtenerCURP ?? true,
        Obtener69o69B: req.body?.Obtener69o69B ?? true,
        ObtenerNSS: req.body?.ObtenerNSS ?? true,
        ObtenerRegimenFiscal: req.body?.ObtenerRegimenFiscal ?? true,
        ObtenerCP: req.body?.ObtenerCP ?? true,
      }),
    });

    const responseText = await upstream.text();
    const contentType = upstream.headers.get("content-type") || "application/json";

    res.status(upstream.status).type(contentType).send(responseText);
  } catch (error) {
    console.error("[checkid-proxy] Upstream error", error);
    res.status(502).json({ exitoso: false, error: "No se pudo contactar el servicio CheckID" });
  }
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "..", "dist");

app.use(express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = Number(process.env.PORT) || 4173;
app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
