export const useLayoutStore = defineStore('layout', {
  state: () => ({
    headerHeight: 0,
    footerHeight: 0,
  }),
  actions: {
    setHeaderHeight(height: number) {
      this.headerHeight = height;
    },
    setFooterHeight(height: number) {
      this.footerHeight = height;
    },
  },
});
