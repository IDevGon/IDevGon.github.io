<script lang="ts" setup>
useHead({
  titleTemplate: (title?: string) => (title ? `${title} | DevGon Log` : 'DevGon Log'),
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
