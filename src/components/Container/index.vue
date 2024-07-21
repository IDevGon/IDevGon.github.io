<script lang="ts" setup>
defineOptions({
  name: 'Container',
});
</script>
<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding: var(--size-16) var(--size-16);
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
</style>
