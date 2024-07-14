<script setup lang="ts">
import dayjs from 'dayjs';
import { useLayoutStore } from '@/store';

const year = computed(() => dayjs().year());
const store = useLayoutStore();
const footerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  store.setFooterHeight(footerRef.value?.clientHeight || 0);
});
</script>

<template>
  <footer ref="footerRef">
    <p>© {{ year }} DevGon</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  padding: var(--size-16);
}
</style>
