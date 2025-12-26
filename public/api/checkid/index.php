<?php
// Simple PHP proxy for CheckID to avoid CORS in the browser.
// Uses API key from request body, headers, env, or fallback constant if not provided.

// Opcional: define aquí un API key por defecto (se recomienda usar env en producción).
$DEFAULT_API_KEY = getenv("CHECKID_DEFAULT_API_KEY") ?: "yVidmV5/SMQ7iFvpvywMPjnmuoemgjfCC3dqWWvGn4g=";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

// Read body (JSON preferido; fallback a x-www-form-urlencoded)
$rawInput = file_get_contents("php://input") ?: "";
$body = json_decode($rawInput, true);
if (!is_array($body)) {
    // Fallback: intenta parsear como query string o usa $_POST
    $fallback = [];
    if (!empty($_POST)) {
        $fallback = $_POST;
    } else {
        parse_str($rawInput, $fallback);
    }
    $body = is_array($fallback) ? $fallback : [];
}

if (!is_array($body) || !count($body)) {
    http_response_code(400);
    echo json_encode(["exitoso" => false, "error" => "Cuerpo JSON inválido"]);
    exit;
}

$apiKey = $body["ApiKey"]
    ?? ($_SERVER["HTTP_X_API_KEY"] ?? null)
    ?? ($body["apiKey"] ?? null)
    ?? ($body["apikey"] ?? null)
    ?? ($_GET["ApiKey"] ?? $_GET["apiKey"] ?? null)
    ?? getenv("CHECKID_API_KEY")
    ?? getenv("VITE_CHECKID_API_KEY")
    ?? $DEFAULT_API_KEY;
if (!$apiKey) {
    http_response_code(400);
    echo json_encode(["exitoso" => false, "error" => "Falta ApiKey"]);
    exit;
}

$payload = [
    "ApiKey" => $apiKey,
    "TerminoBusqueda" => $body["TerminoBusqueda"] ?? null,
    "ObtenerRFC" => $body["ObtenerRFC"] ?? true,
    "ObtenerCURP" => $body["ObtenerCURP"] ?? true,
    "Obtener69o69B" => $body["Obtener69o69B"] ?? true,
    "ObtenerNSS" => $body["ObtenerNSS"] ?? true,
    "ObtenerRegimenFiscal" => $body["ObtenerRegimenFiscal"] ?? true,
    "ObtenerCP" => $body["ObtenerCP"] ?? true,
];

$ch = curl_init("https://www.checkid.mx/api/Busqueda");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    echo json_encode(["exitoso" => false, "error" => "No se pudo contactar CheckID: $curlErr"]);
    exit;
}

http_response_code($httpCode ?: 200);
header("Content-Type: application/json");
echo $response;
