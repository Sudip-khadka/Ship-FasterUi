import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    tsconfigPath: "./tsconfig.app.json",
    insertTypesEntry: true,
    rollupTypes:true,
    entryRoot:'src',
  }),],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/main.ts',
      name: 'stacksy',
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `stacksy.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@types/react',
      '@types/react-dom', 'typescript'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          typescript: 'typescript'
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    
  },
})
