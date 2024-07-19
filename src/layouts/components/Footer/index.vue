<script setup lang="ts">
import dayjs from 'dayjs';
import { useLayoutStore } from '@/store';

defineOptions({
  name: 'FooterSection',
});
const year = computed(() => dayjs().year());
const store = useLayoutStore();
const footerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  store.setFooterHeight(footerRef.value?.clientHeight || 0);
});
</script>

<template>
  <footer ref="footerRef">
    <p>© {{ year }} devGon</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
  padding: var(--size-16);
}
</style>
