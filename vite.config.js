// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        demo: resolve(__dirname, "demo.html"),
        benefits: resolve(__dirname, "benefits.html"),
        contact: resolve(__dirname, "contact.html"),
        testimonial: resolve(__dirname, "testimonial.html"),
        features: resolve(__dirname, "features.html"),
      },
    },
  },
});
