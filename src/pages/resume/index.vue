<script setup lang="ts">
defineOptions({
  name: 'ResumePage',
});

useHead({
  title: '이력서',
});
</script>

<template>
  <ContentDoc :head="false" path="resume" />
</template>

<style scoped lang="scss">
//.md-container:deep(div) {
//  display: flex;
//  flex-direction: column;
//}
</style>
