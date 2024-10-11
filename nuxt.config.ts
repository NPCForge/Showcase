// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  build: {
    transpile: ['bootstrap']
  },

  app: {
    head: {
      script: [
        {
          // Inclure le fichier JS Bootstrap
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
      ],
    },
  },

  compatibilityDate: '2024-10-05',
  modules: ['@nuxt/icon']
})