import path from 'path';
import { readdirSync, readFileSync } from 'fs';

function getLogs() {
  const dirPath = path.resolve('src/content/logs');
  const files = readdirSync(dirPath);
  const logs = files.filter(file => file.endsWith('.md'));
  return logs.map(file => {
    const filePath = path.resolve(dirPath, file);
    const content = readFileSync(filePath, 'utf-8');
    const title = content.split('\n')[0].replace('# ', '');
    return {
      id: file.replace('.md', ''),
      title,
    };
  });
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '~': path.resolve(__dirname, '.'),
  },
  app: {
    head: {
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
    experimental: {
      clientDB: true,
    },
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
  runtimeConfig: {
    public: {
      logs: getLogs(),
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
