<script lang="ts" setup>
const colorMode = useColorMode();
</script>
<template>
  <header>
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
  padding: var(--size-8) var(--size-16);
  border-bottom: 1px solid #ccc;

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
}
</style>
