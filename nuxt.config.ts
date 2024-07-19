import path from 'path';
import fs from 'fs';

export function getLogs() {
  const dirPath = path.resolve('src/content/logs');
  const files = fs.readdirSync(dirPath);
  const logs = files.filter(file => file.endsWith('.md'));

  const logData = logs.map(file => {
    const filePath = path.resolve(dirPath, file);
    const stats = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const title = lines[0].replace('# ', '');
    const brief = lines.slice(1, 3).join(' ').trim();

    return {
      id: file.replace('.md', ''),
      title,
      brief,
      createdAt: stats.birthtime,
      updatedAt: stats.mtime,
    };
  });

  return logData;
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
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
        { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🟠</text></svg>' },
      ],
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
