<script setup lang="ts">
import dayjs from 'dayjs';

const year = computed(() => dayjs().year());
</script>

<template>
  <footer>
    <p>© {{ year }} DevGon</p>
  </footer>
</template>

<style scoped lang="scss"></style>
