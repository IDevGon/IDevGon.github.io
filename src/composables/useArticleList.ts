import type { Article } from '@/interfaces';

const PAGE_SIZE = 8;

export const useArticleList = () => {
  const { replace } = useRouter();
  const { query } = useRoute();
  const articleList = ref<Article[]>([]);
  const currentPage = ref(Number(query.page) || 1);

  const pagedArticleList = computed(() => articleList.value.slice((currentPage.value - 1) * PAGE_SIZE, currentPage.value * PAGE_SIZE));

  const totalCount = computed(() => articleList.value.length);

  onMounted(async () => {
    articleList.value = await $fetch<Article[]>('/articleList.json');
  });

  watch(
    currentPage,
    () => {
      replace({ query: { ...query, page: currentPage.value.toString() } });
    },
    { immediate: true },
  );

  return {
    currentPage,
    pageSize: PAGE_SIZE,
    totalCount,
    articleList: pagedArticleList,
  };
};
