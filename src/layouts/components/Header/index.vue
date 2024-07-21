<script lang="ts" setup>
import { useLayoutStore } from '@/store';
import { routes } from '@/routes';

defineOptions({
  name: 'HeaderSection',
});

const colorMode = useColorMode();
const store = useLayoutStore();
const headerRef = ref<HTMLElement | null>(null);
const showInnerMenu = ref(false);

onMounted(() => {
  store.setHeaderHeight(headerRef.value?.clientHeight || 0);
});
</script>
<template>
  <header ref="headerRef">
    <nav>
      <NuxtLink to="/"> dev<em>G</em>on </NuxtLink>
      <ul :class="{ showInnerMenu }">
        <li>
          <ToggleSwitch v-model="colorMode.preference" type="color-mode" />
        </li>
        <li class="menu-item">
          <NuxtLink to="/menu">
            <i class="fa-solid fa-bars" />
          </NuxtLink>
        </li>
        <li v-for="{ path, name } of routes" :key="path">
          <NuxtLink :to="path"> {{ name }} </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  background: var(--color-background);
  z-index: var(--zIndex-header);
  top: 0;

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
        display: none;
        align-items: center;

        &:not(:first-child) {
          padding: 0 var(--size-16);
        }

        &:not(:last-child, :first-child) {
          border-right: var(--size-4) solid var(--color-primary);
        }

        &.menu-item {
          display: flex;
          position: relative;
          padding: 0;
          border-right: 0;

          a {
            padding: 0 var(--size-8);
            background: none;
            border: none;
            cursor: pointer;
            color: var(--color-text);
            font-size: var(--size-24);
          }
        }
      }
    }
  }
}

@media print {
  header {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  header nav ul li {
    display: flex;

    &.menu-item {
      display: none;
    }
  }
}
</style>
