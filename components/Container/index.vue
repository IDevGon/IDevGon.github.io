<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
</style>
