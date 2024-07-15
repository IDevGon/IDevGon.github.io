<script setup lang="ts">
defineOptions({
  name: 'HomePage',
});

useHead({
  title: 'Home',
});
</script>

<template>
  <h1>DevGon Log</h1>
  <NuxtImg loading="lazy" width="200" height="200" src="https://avatars.githubusercontent.com/u/106735547?v=4" alt="내 사진" />
  <p>hello world</p>
</template>

<style scoped lang="scss">
img {
  border-radius: 50%;
  border: 0.1rme solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

p {
  color: var(--color-primary);
}
</style>
