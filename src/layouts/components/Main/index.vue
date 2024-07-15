<template>
  <main>
    <Container>
      <slot />
      <TopButton />
    </Container>
  </main>
</template>

<script setup lang="ts">
import TopButton from './components/TopButton.vue';

defineOptions({
  name: 'MainSection',
});
</script>
