<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
    modelValue: boolean | string;
    type: 'normal' | 'color-mode';
  }>(),
  {
    name: undefined,
    modelValue: false,
    type: 'normal',
  },
);
const emit = defineEmits(['update:modelValue']);
const id = useId();

const checked = computed(() => {
  if (props.type === 'color-mode') {
    return props.modelValue === 'dark';
  }
  return props.modelValue as boolean;
});

const onChangeCheckBox = (e: Event) => {
  if (props.type === 'color-mode') {
    emit('update:modelValue', (e.target as HTMLInputElement).checked ? 'dark' : 'light');
    return;
  }
  emit('update:modelValue', (e.target as HTMLInputElement).checked);
};
</script>

<template>
  <label :for="id" :class="{ 'color-mode': type === 'color-mode' }">
    <input :id="id" :checked="checked" type="checkbox" :name="props.name" @change="onChangeCheckBox" />
  </label>
</template>

<style scoped lang="scss">
label {
  position: relative;
  display: inline-block;
  width: var(--size-40);
  height: var(--size-20);
  border-radius: var(--size-20);
  border: var(--size-1) solid var(--color-border);
  cursor: pointer;
  background: linear-gradient(90deg, #f8d67f 0%, #2b3250 80%);

  &:has(input:checked) {
    background: linear-gradient(90deg, #f8d67f 0%, #2b3250 60%);
  }

  &:after {
    content: '';
    font-size: var(--size-14);
    display: inline-block;
    position: absolute;
    z-index: 1;
    width: var(--size-12);
    height: var(--size-12);
    border-radius: var(--size-half);
    background: var(--color-primary);
    top: 50%;
    transform: translate(var(--size-2), -50%);
    transition: 0.3s transform ease;
  }

  &:has(input:checked):after {
    content: '';
    transform: translate(var(--size-24), -50%);
  }

  &.color-mode {
    border: 0;

    &:after {
      content: '🌕';
      background: unset;
    }

    &:has(input:checked):after {
      content: '🌑';
      transform: translate(var(--size-20), -50%);
    }
  }

  input[type='checkbox'] {
    display: none;
  }
}
</style>
