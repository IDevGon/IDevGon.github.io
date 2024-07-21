import type { Route } from '@/interfaces';

export const routes: Route[] = [
  {
    path: '/',
    name: '홈',
  },
  {
    path: '/articles',
    name: '글 목록',
  },
  {
    path: '/resume',
    name: '이력서',
  },
  {
    path: '/contact',
    name: '연락처',
  },
];
