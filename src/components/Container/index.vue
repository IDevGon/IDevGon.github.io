<template>
  <div class="container">
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
