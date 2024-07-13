<script setup lang="ts">
const onClickTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const scrollY = ref(0);
const onScroll = throttle(() => {
  scrollY.value = window.scrollY;
}, 30);

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

const isShow = computed(() => scrollY.value > 100);
</script>

<template>
  <button v-if="isShow" @click="onClickTop">
    <i class="fa-solid fa-chevron-up" />
  </button>
</template>

<style scoped lang="scss">
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
