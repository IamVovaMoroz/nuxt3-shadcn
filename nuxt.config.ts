// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
  //  "nuxt-server-utils",
 
    // "nuxt-highcharts",
    // "@sidebase/nuxt-auth"
  ],
  shadcn: {
    /**
     * Prefix for all the imported components.
     */
    prefix: '', // Оставляем пустым, если вы не хотите использовать префиксы.
    /**
     * Directory that the components live in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

});