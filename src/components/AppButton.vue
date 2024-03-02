<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  outline?: string;
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
.btn {
  background-color: var(--accent);
  color: var(--light);
  padding: 10px 30px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  border: 1px solid var(--light);
  &:hover {
    background-color: var(--light);
    color: var(--accent);
  }
}
.btn-outline {
  color: var(--accent);
  border: 2px solid var(--accent);
  background-color: var(--light);
  &:hover {
    background-color: var(--accent);
    color: var(--light);
  }
}
</style>
