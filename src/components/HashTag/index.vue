<script setup lang="ts">
defineOptions({
  name: 'HashTag',
});

defineProps<{
  hashTags: string[];
}>();
</script>

<template>
  <ul>
    <li v-for="hashtag of hashTags" :key="hashtag"># {{ hashtag }}</li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: var(--size-4);

  li {
    font-weight: var(--weight-bold);
    padding: var(--size-4) var(--size-8);
    border-radius: var(--size-4);
    background: var(--color-primary);
    color: var(--color-light);
    word-break: keep-all;
    white-space: pre;
  }
}
</style>
