<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  outline: string;
}

const props = defineProps<Props>();

const className = computed(() => ({
  'btn-outline': props.outline,
}));
</script>

<template>
  <button
    class="btn"
    :class="className"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vars';
.btn {
  border-radius: $big;
  background-color: $accent;
  color: $light;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $transition;
  &:hover {
    background-color: $accent-dark;
  }
}
.btn-outline {
  color: $accent;
  border: 2px solid $accent;
  background-color: $light;
  &:hover {
    background-color: $accent;
    color: $light;
  }
}
</style>
