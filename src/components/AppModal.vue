<script setup lang="ts">
import AppButton from './AppButton.vue';

interface Props {
  isOpenModal: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(['closeModal']);

const closeModal = (): void => {
  emit('closeModal');
};
</script>
<template>
  <Transition>
    <div
      class="modal"
      v-if="props.isOpenModal"
      @click="closeModal"
    >
      <div
        class="modal__inner"
        @click.stop
      >
        <app-button
          class="modal__close"
          @click="closeModal"
        >
          x
        </app-button>
        <div>
          <h3 class="modal__title">Создать задачу</h3>
        </div>
        <div class="modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
@import './../assets/scss/vars';
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    max-width: 600px;
    padding: 24px 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: $light;
      z-index: -1;
    }
  }
  &__close {
    padding: 12px;
    transition: $transition;
    align-self: flex-end;
  }
  &__title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 8px;
    color: $black;
    line-height: 1.3;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
