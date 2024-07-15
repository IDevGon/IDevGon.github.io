export const useScrollbarWidth = () => {
  const width = ref(0);
  const getSize = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    width.value = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode!.removeChild(outer);
    document.documentElement.style.setProperty('--size-scrollbar', `${width.value}px`);
  };

  onMounted(() => {
    if (document.readyState === 'complete') {
      getSize();
    }

    window.addEventListener('resize', getSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', getSize);
  });

  return width;
};
