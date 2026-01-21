import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    allowedHosts: [
      "spirit-gate-production.up.railway.app"
    ]
  }
});
