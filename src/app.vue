<script lang="ts" setup>
import { useScrollbarWidth } from '@/composables/useScrollbarWidth';

useHead({
  titleTemplate: (title?: string) => (title ? `${title} | devGon Log` : 'devGon Log'),
});

useScrollbarWidth();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
