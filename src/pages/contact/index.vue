<script setup lang="ts">
defineOptions({
  name: 'ContactPage',
});

useHead({
  title: '연락처',
});
</script>

<template>
  <div class="contact-container">
    <ContentDoc class="content-doc" :head="false" path="contact" />
  </div>
</template>

<style scoped lang="scss">
.contact-container:deep() {
  table {
    border-collapse: unset;
    padding: var(--size-16);
    border: var(--size-1) solid var(--color-border);
    border-radius: var(--size-16);
    overflow: hidden;

    th {
      padding: var(--size-16);
      font-weight: var(--weight-bold);
    }
  }
}
</style>
