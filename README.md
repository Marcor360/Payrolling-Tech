# Payrolling Tech

Sitio web corporativo para Payrolling Tech construido con React, TypeScript y Vite. El proyecto reúne las
principales líneas de negocio de la empresa (nómina, reclutamiento, vales, beneficios y cumplimiento NOM-035)
y ofrece formularios de contacto especializados que envían la información directamente al equipo comercial.
También incluye un pequeño servidor Express encargado de procesar los formularios y distribuirlos por correo
mediante nodemailer.

## Características destacadas

- **Landing page responsiva con hero animado y slider de servicios**: la página principal combina imágenes
de fondo específicas para escritorio y móvil, un carrusel de servicios y un formulario de contacto con
validaciones básicas y honeypot anti-spam. [`src/pages/Homepage.tsx`](src/pages/Homepage.tsx)
- **Componentes reutilizables**: encabezado, pie de página, botón flotante de WhatsApp y slider de servicios
se reutilizan en las distintas vistas para mantener la coherencia visual. [`src/components`](src/components)
- **Subsitios temáticos**: cada línea de negocio cuenta con su propia página con animaciones ligeras, sliders y
secciones informativas optimizadas para dispositivos móviles. [`src/pages/subpages`](src/pages/subpages)
- **Blog estructurado por categorías**: artículos agrupados por beneficios, reclutamiento, vales y nómina,
publicados como rutas independientes dentro del router principal. [`src/pages/subpages/Blog`](src/pages/subpages/Blog)
- **Envío centralizado de formularios**: el helper `submitForm` normaliza los datos de los formularios,
filtra campos honeypot y los envía al endpoint `/api/mail`. [`src/lib/formSubmit.ts`](src/lib/formSubmit.ts)
- **Servidor Express dedicado al correo**: aplica CORS según la lista de orígenes permitidos, expone una ruta de
salud y reenvía los formularios por SMTP con plantillas HTML legibles. [`server`](server)

## Estructura del repositorio

```text
├── public/                 # Recursos públicos servidos tal cual por Vite
├── src/
│   ├── assets/             # Imágenes y fuentes locales
│   ├── components/         # Componentes reutilizables (Header, Footer, sliders, etc.)
│   ├── hooks/              # Hooks personalizados (ej. useFormSubmit)
│   ├── lib/                # Utilidades compartidas (envío de formularios)
│   ├── pages/              # Página principal y subpáginas por servicio
│   └── main.tsx            # Punto de entrada del cliente
├── server/
│   ├── index.js            # Bootstrap del servidor Express
│   └── routes/email.js     # Lógica de envío de correos con nodemailer
├── package.json            # Dependencias y scripts de npm
├── vite.config.ts          # Configuración de Vite + plugins (React, Tailwind CSS v4, SVGR)
└── eslint.config.js        # Reglas de linting
```

## Requisitos previos

- Node.js 18 o superior (se recomienda la versión LTS más reciente)
- npm 9+ (instalado junto con Node). Puedes usar pnpm o yarn si configuras los scripts equivalentes.

## Puesta en marcha

1. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Levanta el cliente de desarrollo (Vite arranca en el puerto 5173 por defecto):
   ```bash
   npm run dev
   ```
3. (Opcional) Inicia el servidor de correo para probar los formularios localmente. Usa un archivo `.env`
   en la carpeta `server/` con las variables necesarias (ver sección siguiente) y ejecuta:
   ```bash
   npm run mail:server
   ```

El cliente asume que el endpoint `/api/mail` está disponible en la misma URL base. En entornos locales puedes
crear un proxy o configurar tu reverse proxy/servidor para reenviar las solicitudes al servicio de correo.

## Configuración de variables de entorno (servidor)

El servidor Express se configura mediante variables de entorno. Puedes crear un archivo `server/.env` o
inyectarlas directamente en tu infraestructura:

| Variable                | Descripción                                                                                 | Valor por defecto                     |
|-------------------------|---------------------------------------------------------------------------------------------|---------------------------------------|
| `PORT`                  | Puerto donde se expone el servidor de correo                                                | `5174`                                |
| `ALLOWED_ORIGINS`       | Lista separada por comas de orígenes habilitados para CORS. Si queda vacío, permite todos. | *(cadena vacía)*                      |
| `DEFAULT_MAIL_TO`       | Correo receptor para formularios generales                                                  | `evergara@payrolling-tech.com`        |
| `RECRUITMENT_MAIL_TO`   | Correo receptor para formularios de reclutamiento                                           | `rh@payrolling-tech.com`              |
| `CC_MAIL_TO`            | Lista separada por comas de destinatarios en copia                                          | `ffonseca@payrolling-tech.com`        |
| `SMTP_HOST`             | Host del servidor SMTP                                                                      | `mail.payrolling-tech.com`            |
| `SMTP_PORT`             | Puerto SMTP                                                                                 | `465`                                 |
| `SMTP_USER`             | Usuario de autenticación SMTP                                                               | *(sin valor por defecto)*             |
| `SMTP_PASS`             | Contraseña de autenticación SMTP                                                            | *(sin valor por defecto)*             |
| `MAIL_FROM_NAME`        | Nombre descriptivo que aparecerá como remitente                                             | `Payrolling Tech Web`                 |

> **Nota:** Para entornos de staging/desarrollo sin acceso a SMTP corporativo puedes utilizar servicios como
> [Mailtrap](https://mailtrap.io/) o [Ethereal Email](https://ethereal.email/). Ajusta host, puerto, usuario y
> contraseña según el proveedor elegido.

## Scripts disponibles

Los principales comandos definidos en `package.json` son:

- `npm run dev`: inicia el servidor de desarrollo de Vite.
- `npm run build`: compila el proyecto (TypeScript + build de Vite) y genera los artefactos estáticos en `dist/`.
- `npm run preview`: sirve la carpeta `dist/` con la configuración de producción de Vite.
- `npm run lint`: ejecuta ESLint sobre todo el código fuente.
- `npm run mail:server`: arranca el servidor Express que procesa y envía los formularios por correo.

## Flujo de envío de formularios

1. Los formularios en el cliente utilizan el hook `useFormSubmit` o la función `submitForm` para capturar el
evento `submit`, limpiar valores y evitar envíos desde bots mediante campos honeypot.
2. El helper realiza una petición `POST` a `/api/mail` con un payload JSON que incluye tipo de formulario,
   asunto, datos normalizados y metadatos (por ejemplo, la ruta de la página origen).
3. El servidor Express valida el payload, determina el destinatario adecuado según `formType` y envía un correo
   HTML con nodemailer. En caso de error responde con mensajes en español listos para mostrar al usuario.

## Estilos y recursos

- Tailwind CSS v4 se importa desde `App.css` para combinar utilidades con estilos personalizados (animaciones y
  variables de color corporativas).
- Las fuentes y gráficos se encuentran en `src/assets/` y se cargan mediante importaciones estándar de Vite.
- El botón flotante de WhatsApp (`WhatsAppFloatingButton`) siempre apunta al número corporativo con un mensaje
  precargado.

## Construcción y despliegue

Para generar una versión lista para producción:

```bash
npm run build
```

El resultado se almacena en `dist/`. Puedes servir esa carpeta con cualquier servidor de archivos estáticos o
integrarla en tu plataforma de hosting (por ejemplo, Netlify, Vercel, Nginx, etc.). Asegúrate de exponer el
servidor de correo en `/api/mail` o, en su defecto, configurar un servicio administrado que reciba las
peticiones del front-end.

---

Si necesitas extender el sitio (nuevas rutas, formularios o componentes) revisa la estructura existente y
aprovecha los helpers compartidos para mantener una experiencia consistente.
