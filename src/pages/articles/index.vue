<script setup lang="ts">
import { useArticleList } from '@/composables/useArticleList';

defineOptions({
  name: 'ArticleListPage',
});
useHead({
  title: '글 목록',
});

const { articleList, currentPage, totalCount, pageSize } = useArticleList();
</script>

<template>
  <ul class="articles">
    <li v-for="{ id, title, description, hashTags, createdAt } of articleList" :key="id">
      <NuxtLink :to="`/articles/${id}`">
        <header>
          <h1>{{ title }}</h1>
          <time>{{ createdAt }}</time>
        </header>
        <EllipsisTypo number-of-line="3">{{ description }}</EllipsisTypo>
        <HashTag :hash-tags="hashTags" />
      </NuxtLink>
    </li>
  </ul>
  <Pagination v-model:current-page="currentPage" :total-count="totalCount" :page-size="pageSize" />
</template>

<style scoped lang="scss">
ul.articles {
  min-height: 80rem;

  li {
    header {
      display: flex;
      justify-content: space-between;
    }

    padding: 0 var(--size-16);
    margin-bottom: var(--size-8);
    border-radius: var(--size-8);

    p {
      white-space: pre-wrap;
      line-height: 1.6;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    a {
      width: var(--size-full);
      height: var(--size-full);
      padding: var(--size-16);
      text-decoration: none;
      color: var(--color-text);
      font-size: 1.5rem;
    }
  }
}
</style>
