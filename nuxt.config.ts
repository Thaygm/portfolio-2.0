// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Roboto:wght@400;700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'
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
