import { statSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineNuxtModule } from '@nuxt/kit';

function extractMetadata(markdown: string) {
  const titleMatch = markdown.match(/^# (.*)$/m);
  const title = titleMatch ? titleMatch[1] : '';

  const tagsMatch = markdown.match(/tags:\s*\[(.*?)\]/);
  const hashTags = tagsMatch ? tagsMatch[1].split(',').map(tag => tag.trim().replace(/['"]/g, '')) : [];

  const lines = markdown.split('\n');
  const titleIndex = lines.findIndex(line => line.startsWith('# '));
  const contentLines = lines.slice(titleIndex + 1).filter(line => line.trim() !== '');
  const description = contentLines.slice(0, 3).join('\n');

  return { title, description, hashTags };
}

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('build:before', () => {
      const articlesDir = resolve(nuxt.options.srcDir, 'content/articles');
      const files = readdirSync(articlesDir);

      const articles = files
        .map(file => {
          const filePath = resolve(articlesDir, file);
          const content = readFileSync(filePath, 'utf-8');
          const { title, description, hashTags } = extractMetadata(content);
          const stats = statSync(filePath);
          return {
            id: file.replace('.md', ''),
            title,
            description,
            createdAt: stats.birthtime,
            updatedAt: stats.mtime,
            hashTags,
          };
        })
        .sort(({ createdAt: aCreatedAt }, { createdAt: bCreatedAt }) => aCreatedAt.getTime() - bCreatedAt.getTime());

      const jsonPath = resolve(nuxt.options.srcDir, 'public/articles.json');
      writeFileSync(jsonPath, JSON.stringify(articles, null, 2), 'utf-8');
    });
  },
});
