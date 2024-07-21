<script setup lang="ts">
defineOptions({
  name: 'Pagination',
});

const MAX_PAGE = 5;

const props = defineProps<{
  totalCount: number;
  pageSize: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (e: 'update:currentPage', newPage: number): void;
}>();

const isShowFirstPageButton = computed(() => props.currentPage > Math.floor(MAX_PAGE / 2) + 1);
const isShowLastPageButton = computed(() => totalPages.value > MAX_PAGE && totalPages.value - props.currentPage > Math.floor(MAX_PAGE / 2));

const totalPages = computed(() => Math.ceil(props.totalCount / props.pageSize));

const pages = computed(() => {
  const pageNumbers = [];
  const halfMaxPage = Math.floor(MAX_PAGE / 2);

  let startPage = Math.max(1, props.currentPage - halfMaxPage);
  const endPage = Math.min(totalPages.value, startPage + MAX_PAGE - 1);

  if (endPage - startPage + 1 < MAX_PAGE) {
    startPage = Math.max(1, endPage - MAX_PAGE + 1);
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pageNumbers.push(i);
  }

  return pageNumbers;
});

const changePage = (page: number) => {
  emit('update:currentPage', page);
};
</script>

<template>
  <ul>
    <li v-if="isShowFirstPageButton">
      <button :disabled="currentPage === 1" @click="changePage(1)">
        <i class="fa-solid fa-angles-left" />
      </button>
    </li>
    <li>
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
        <i class="fa-solid fa-chevron-left" />
      </button>
    </li>
    <li
      v-for="page of pages"
      :key="page"
      :class="{
        active: page === currentPage,
      }"
    >
      <button @click="changePage(page)">{{ page }}</button>
    </li>
    <li>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)"><i class="fa-solid fa-chevron-right" /></button>
    </li>
    <li v-if="isShowLastPageButton">
      <button :disabled="currentPage === totalPages" @click="changePage(totalCount)"><i class="fa-solid fa-angles-right" /></button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  gap: var(--size-16);

  li {
    button {
      width: var(--size-34);
      height: var(--size-34);
      padding: 0;
      border: 0;
      border-radius: var(--size-4);
      cursor: pointer;
      background: var(--color-gray2);
      user-select: none;
    }

    &:hover button:not(:disabled) {
      background: var(--color-gray3);
    }

    &.active button {
      border: var(--size-2) solid var(--color-primary);
    }
  }
}
</style>
