<script lang="ts" setup>
useHead({
  titleTemplate: (title?: string) => (title ? `${title} | devGon Log` : 'devGon Log'),
});

// TODO: 검색 기능,
useScrollbarWidth();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
