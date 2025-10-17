import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const DEFAULT_TO = process.env.DEFAULT_MAIL_TO ?? "evergara@payrolling-tech.com";
const RECRUITMENT_TO = process.env.RECRUITMENT_MAIL_TO ?? "rh@payrolling-tech.com";
const CC_RECIPIENTS = (process.env.CC_MAIL_TO ?? "ffonseca@payrolling-tech.com")
    .split(",")
    .map((mail) => mail.trim())
    .filter(Boolean);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "mail.payrolling-tech.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function formatLabel(key) {
    return key
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

router.post("/", async (req, res) => {
    const { formType = "general", subject, data, metadata } = req.body ?? {};

    if (!data || typeof data !== "object") {
        return res.status(400).json({ message: "Missing form data." });
    }

    const target = formType === "recruitment" ? RECRUITMENT_TO : DEFAULT_TO;

    const rows = Object.entries(data).map(([key, value]) => {
        const normalized = Array.isArray(value) ? value.join(", ") : value;
        return `<tr>
            <td style="padding:6px 12px;font-weight:600;background:#f5f5f5;">${escapeHtml(
                formatLabel(key)
            )}</td>
            <td style="padding:6px 12px;">${escapeHtml(
                normalized === "" ? "(vacío)" : normalized
            )}</td>
        </tr>`;
    });

    if (metadata && typeof metadata === "object") {
        rows.push(
            `<tr>
                <td style="padding:6px 12px;font-weight:600;background:#f5f5f5;">Formulario</td>
                <td style="padding:6px 12px;">${escapeHtml(JSON.stringify(metadata))}</td>
            </tr>`
        );
    }

    const mailSubject =
        subject ??
        `Nuevo formulario recibido${metadata?.page ? ` - ${metadata.page}` : ""}`;

    const htmlBody = `
        <div style="font-family:Arial,sans-serif;color:#1b1b1b;">
            <h2 style="color:#5a2ca0;">Nuevo formulario (${escapeHtml(formType)})</h2>
            <table style="border-collapse:collapse;width:100%;font-size:14px;">
                ${rows.join("\n")}
            </table>
            <p style="margin-top:16px;font-size:12px;color:#555;">
                Este mensaje fue enviado automáticamente desde el formulario del sitio web de Payrolling Tech.
            </p>
        </div>
    `;

    try {
        await transporter.sendMail({
            from: {
                name: process.env.MAIL_FROM_NAME ?? "Payrolling Tech Web",
                address: process.env.SMTP_USER ?? target,
            },
            to: target,
            cc: CC_RECIPIENTS,
            subject: mailSubject,
            html: htmlBody,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error("[mail] send error:", error);
        return res
            .status(500)
            .json({ message: "No se pudo enviar el formulario. Intenta de nuevo más tarde." });
    }
});

export default router;
