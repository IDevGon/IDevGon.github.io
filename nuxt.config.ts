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

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  srcDir: 'src',
  ssr: false,

  nitro: {
    preset: 'github-pages',
  },

  css: ['@/assets/style/reset.css', '@/assets/style/common.scss'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/color-mode'],
  googleFonts: {
    families: {
      'Noto+Sans+KR': {
        wght: [400, 500, 700],
      },
      Roboto: {
        wght: [400, 500, 700],
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/variables.scss";',
        },
      },
    },
  },
});
