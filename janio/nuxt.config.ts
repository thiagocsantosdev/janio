// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  // Estilo global
  css: ['@/assets/css/global.css'],

  // Devtools ativado
  devtools: { enabled: true },

  // Módulos
  modules: [
    // Fonte Google (Roboto)
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true
      }
    }],

    // Ícones com @nuxt/icon (usa Iconify)
    '@nuxt/icon'
  ]
})