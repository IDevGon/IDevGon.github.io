<script setup lang="ts">
defineOptions({
  name: 'ResumePage',
});

useHead({
  title: '이력서',
});
</script>

<template>
  <div class="resume-container">
    <ContentDoc :head="false" path="resume" />
  </div>
</template>

<style scoped lang="scss">
.resume-container:deep() {
  p {
    line-height: 1.6;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--size-16);

    & > li {
      h4 {
        line-height: 1;
      }

      font-size: var(--size-14);
      line-height: 1.6;
    }
  }
}
</style>
