<template>
  <input
    class="input"
    type="text"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps(['modelValue']);
</script>
<style lang="scss">
@import '@/assets/scss/vars';

.input {
  border: 2px solid $accent;
  border-radius: $pre-big;
  background: #fff;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  display: block;
}
</style>

function defineEmits(arg0: string[]) { throw new Error('Function not
implemented.') }
