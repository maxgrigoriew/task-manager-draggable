<script lang="ts" setup>
const props = defineProps(['task']);
const emit = defineEmits(['openTask']);

const startDrag = (evt: DragEvent, taskId: number): void => {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('itemID', taskId.toString());
  }
};
</script>
<template>
  <div
    class="task"
    draggable="true"
    @dragstart="startDrag($event, props.task.id)"
  >
    <div
      class="task__inner"
      :style="{ background: props.task.background }"
    >
      <div class="task__top">
        <p class="task__info">
          <span class="task__info-title">Название: </span>
          <span class="task__info-description">{{ props.task.title }}</span>
        </p>
        <p class="task__info">
          <span class="task__info-title">Описание: </span>
          <span class="task__info-description">{{
            props.task.description
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: var(--border-radius);
  overflow: hidden;

  &__inner {
    padding: 15px;
    border: 1px solid var(--gray-light);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05),
      0px 0px 0px rgba(40, 47, 61, 0.12);
    transition: all var(--transition);
    border-radius: var(--border-radius);
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__info {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    &-title {
      font-size: 12px;
    }
    &-description {
      word-break: break-word;
    }
  }

  &:hover {
    box-shadow: 0px 0px 16px rgba(28, 41, 61, 0.05),
      0px 4px 8px rgba(28, 41, 61, 0.06);
    cursor: pointer;
  }
}
</style>
