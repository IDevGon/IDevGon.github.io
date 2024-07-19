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
    <ContentDoc :head="false" path="contact" />
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

    //tr {
    //  th {
    //    padding: var(--size-16);
    //    border-left: var(--size-1) solid var(--color-border);
    //
    //    &:not(:last-child) {
    //      border-bottom: var(--size-1) solid var(--color-border);
    //    }
    //  }
    //
    //  &:first-child th {
    //    border-top: var(--size-1) solid var(--color-border);
    //    border-radius: var(--size-8);
    //  }
    //  &:last-child th {
    //    border-bottom: var(--size-1) solid var(--color-border);
    //  }
    //}
  }
}
</style>
