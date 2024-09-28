<script setup lang="ts">
defineOptions({
  name: 'ArticlePage',
});
</script>

<template>
  <div class="article-container">
    <ContentDoc class="content-doc" />
  </div>
</template>

<style scoped lang="scss">
.article-container:deep() {
  ol {
    list-style-type: decimal;
    margin-left: var(--size-12);

    li {
      margin-bottom: var(--size-10);
    }
  }
}
</style>
