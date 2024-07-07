// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "DevGon's Log",
      htmlAttrs: { lang: 'ko' },
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }],
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
  ssr: false,
  nitro: {
    preset: 'github-pages',
  },
  css: ['@/assets/style/reset.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
