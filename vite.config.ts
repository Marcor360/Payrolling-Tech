import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const checkIdTarget = env.VITE_CHECKID_BASE_URL || "https://www.checkid.mx/api";

  return {
    plugins: [react(), tailwindcss(), svgr()],
    server: {
      proxy: {
        // Dev proxy to avoid CORS when hitting CheckID
        "/api/checkid": {
          target: checkIdTarget,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/checkid/, "/Busqueda"),
        },
      },
    },
  };
});
