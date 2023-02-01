import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },
  build: {
    // acelerar proceso de compilacion de los archivos 
    incremental: true,
    // habilitar un trabajo conjunto con Babel para la interpretacion correcta de las versiones de js
    babel: {
      presets: [ "@babel/present-env", "@babel/preset-react"],
    },
    // Caso de Typescript: habilitar la acelarion de la compilacion de TS hacia JS
    // typescript: {
    //   tsconfig: "./config.json";
    // },
    // habilitar los cambios mediante caché
    cache: true,
    // habiliitar la opcion de compresion para minimizar el tamaño de los archivos compilados
    minify: true,
    // especificar el ambiente en el cual estamos manejando este contexto de ejecucion
    mode: "production",
    // habilitar la configuracion del buil mdiante chuncks parcelados
    chunks: true,
    // habilitar la confguracion para minimizar el tamaño 
    moduleBundling: true,
    // habilitar modo debug para las ejecuciones de la generacion del build 
    debug: true,
  }
})
