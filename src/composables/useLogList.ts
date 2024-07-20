import type { Log } from '@/interfaces';
import dayjs from 'dayjs';

const PAGE_SIZE = 1;

export const useLogList = () => {
  const currentPage = ref(1);
  const config = useRuntimeConfig();
  const logList = computed(() => (config.public.logs as Log[]).sort(({ createdAt: aCreatedAt }, { createdAt: bCreatedAt }) => (dayjs(bCreatedAt).isAfter(aCreatedAt) ? -1 : 1)) ?? []);
  const pagedLogList = computed(() => logList.value.slice((currentPage.value - 1) * PAGE_SIZE, currentPage.value * PAGE_SIZE));

  return {
    currentPage,
    pageSize: PAGE_SIZE,
    totalCount: logList.value.length,
    logList: pagedLogList,
  };
};
