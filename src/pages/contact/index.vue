<script setup lang="ts">
defineOptions({
  name: 'ContactPage',
});

useHead({
  title: '연락처',
});
</script>

<template>
  <ContentDoc :head="false" path="contact" />
</template>

<style scoped lang="scss"></style>
