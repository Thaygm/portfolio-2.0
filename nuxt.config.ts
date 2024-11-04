// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
        }
      ]
    }
  },
  css: [
    '~/assets/main.css'
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
