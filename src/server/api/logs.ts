// server/api/markdown-files.js
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async () => {
  const dirPath = path.resolve('src/content/logs');
  const files = await fs.readdir(dirPath);
  const logs = files.filter(file => file.endsWith('.md'));
  return Promise.all(
    logs.map(async file => {
      const filePath = path.resolve(dirPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const title = content.split('\n')[0].replace('# ', '');
      return {
        id: file.replace('.md', ''),
        title,
      };
    }),
  );
});
