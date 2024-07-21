<template>
  <main :style="{ minHeight }">
    <Container>
      <slot />
      <TopButton />
    </Container>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLayoutStore } from '@/store';
import TopButton from './components/TopButton.vue';

defineOptions({
  name: 'MainSection',
});
const store = useLayoutStore();

const minHeight = computed(() => {
  const { headerHeight } = store;
  const { footerHeight } = store;

  return `calc(100vh - ${headerHeight + footerHeight}px)`;
});
</script>
