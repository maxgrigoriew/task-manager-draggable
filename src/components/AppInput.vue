<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
}

const emit = defineEmits(['update:modelValue']);
const props = defineProps<Props>();
</script>
<template>
  <input
    class="input"
    type="text"
    :value="props.modelValue"
    :placeholder="placeholder"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
<style lang="scss">
.input {
  border: 2px solid var(--accent);
  background: #fff;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  display: block;
}
</style>
