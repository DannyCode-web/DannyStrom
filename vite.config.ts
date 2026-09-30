import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
    },
    output: "static",
    server: {
      entry: "server",
    },
  },
  vite: {
    base: "/d/",
  },
});