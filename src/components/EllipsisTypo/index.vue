<script setup lang="ts">
defineOptions({
  name: 'EllipsisTypo',
});

const props = withDefaults(
  defineProps<{
    as?: string;
    numberOfLine: number | `${number}`;
  }>(),
  {
    as: 'p',
    numberOfLine: 1,
  },
);

const style = computed(() => ({
  '-webkit-line-clamp': props.numberOfLine,
  lineClamp: props.numberOfLine,
}));
</script>

<template>
  <component :is="as" :style="style" class="ellipsis">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.ellipsis {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
</style>
