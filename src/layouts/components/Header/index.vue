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
      <NuxtLink to="/"> dev<em>G</em>on </NuxtLink>
      <ul>
        <li>
          <ToggleSwitch v-model="colorMode.preference" type="color-mode" />
        </li>
        <li>
          <NuxtLink to="/"> 홈 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/logs"> 글 목록 </NuxtLink>
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
@media print {
  header {
    display: none;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-16);
  border-bottom: var(--size-1) solid var(--color-border);
  user-select: none;

  a {
    color: var(--color-text);
    font-weight: var(--weight-medium);
    text-decoration: none;
  }

  & > a {
    font-size: var(--size-24);
    font-weight: bold;
    color: var(--color-text);

    em {
      font-size: inherit;
      font-weight: inherit;
      color: var(--color-primary);
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      align-items: center;

      &:not(:first-child) {
        padding: 0 var(--size-16);
      }

      &:not(:last-child, :first-child) {
        border-right: var(--size-4) solid var(--color-primary);
      }
    }
  }
}
</style>
