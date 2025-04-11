import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173,
    open: true,
    allowedHosts: ["f728-58-187-186-59.ngrok-free.app", "localhost"],
  },
});
