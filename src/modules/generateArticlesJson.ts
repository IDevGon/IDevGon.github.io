import { statSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineNuxtModule } from '@nuxt/kit';
import matter from 'gray-matter';

function getTitleAndDescription(markdown: string) {
  const titleMatch = markdown.match(/^# (.*)$/m);
  const title = titleMatch ? titleMatch[1] : '';

  const lines = markdown.split('\n');
  const titleIndex = lines.findIndex(line => line.startsWith('# '));
  const contentLines = lines.slice(titleIndex + 1).filter(line => line.trim() !== '');
  const description = contentLines.slice(0, 3).join('\n');

  return { title, description };
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
          const { data } = matter(content);
          const { tags: hashTags, toc } = data;
          const { title, description } = getTitleAndDescription(content);

          const stats = statSync(filePath);
          return {
            id: file.replace('.md', ''),
            createdAt: stats.birthtime,
            updatedAt: stats.mtime,
            title,
            description,
            hashTags,
            toc,
          };
        })
        .sort(({ createdAt: aCreatedAt }, { createdAt: bCreatedAt }) => aCreatedAt.getTime() - bCreatedAt.getTime());

      const jsonPath = resolve(nuxt.options.srcDir, 'public/articleList.json');
      writeFileSync(jsonPath, JSON.stringify(articles, null, 2), 'utf-8');
    });
  },
});
