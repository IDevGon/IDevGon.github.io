<script setup lang="ts">
import Header from './components/Header/index.vue';
import Main from './components/Main/index.vue';
import Footer from './components/Footer/index.vue';

defineOptions({
  name: 'DefaultLayout',
});
</script>

<template>
  <Header />
  <Main>
    <slot />
  </Main>
  <Footer />
</template>
