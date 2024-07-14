<script lang="ts" setup>
import { computed } from 'vue';
import { useLayoutStore } from '@/store';

const store = useLayoutStore();
const minHeight = computed(() => {
  const { headerHeight } = store;
  const { footerHeight } = store;

  return `calc(100vh - ${headerHeight + footerHeight}px)`;
});
</script>
<template>
  <div class="container" :style="{ minHeight }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: var(--size-16) 0;
  }
}
</style>
