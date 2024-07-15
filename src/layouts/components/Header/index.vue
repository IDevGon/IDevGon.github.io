<script lang="ts" setup>
import { useLayoutStore } from '@/store';

defineOptions({
  name: 'HeaderSection',
});

const colorMode = useColorMode();
const store = useLayoutStore();
const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  store.setHeaderHeight(headerRef.value?.clientHeight || 0);
});
</script>
<template>
  <header ref="headerRef">
    <nav>
      <NuxtLink to="/"> DevGon </NuxtLink>
      <ul>
        <li>
          <ToggleSwitch v-model="colorMode.preference" type="color-mode" />
        </li>
        <li>
          <NuxtLink to="/"> 홈 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/logs"> 씨앗글 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/resume"> 이력서 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact"> 연락처 </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-16);
  border-bottom: var(--size-1) solid var(--color-border);

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: var(--size-8);
    list-style: none;

    li {
      display: flex;
      align-items: center;
    }
  }
}
</style>
