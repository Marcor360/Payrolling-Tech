import "dotenv/config";
import express from "express";
import cors from "cors";
import emailRouter from "./routes/email.js";

const app = express();

const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
                return callback(null, origin);
            }
            return callback(new Error("Origin not allowed by CORS"));
        },
        credentials: false,
    })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/mail", emailRouter);

const port = Number(process.env.PORT ?? 5174);

app.listen(port, () => {
    console.log(`[mail-server] listening on port ${port}`);
});
