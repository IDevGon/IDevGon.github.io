<script setup lang="ts">
import { routes } from '@/routes';

defineOptions({
  name: 'MenuPage',
});
</script>

<template>
  <ul>
    <li v-for="{ path, name } of routes" :key="path">
      <NuxtLink :to="path"> {{ name }} </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: var(--size-full);
  padding: var(--size-16);
  list-style: none;
  gap: var(--size-16);

  li {
    width: var(--size-full);

    a {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: var(--size-16);
      flex: 1;
      color: var(--color-text);
      font-weight: var(--weight-medium);
      text-decoration: none;
    }
  }
}
</style>
