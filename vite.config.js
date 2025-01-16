import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "192.168.1.3",
    port: 5173,
  },
  plugins: [react()],
});
