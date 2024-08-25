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
    <ContentDoc class="content-doc" :head="false" path="resume" />
  </div>
</template>

<style scoped lang="scss">
.resume-container:deep() {
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--size-24);

    & > li {
      h4 {
        line-height: 1;
      }

      font-size: var(--size-14);
      line-height: 1.6;
    }

    .inner-list {
      list-style: disc;
      padding-left: var(--size-10);
      gap: var(--size-4);
    }
  }
}
</style>
