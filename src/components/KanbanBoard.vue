<script lang="ts" setup>
import { ITask } from 'types';
import KanbanBoardColumn from './KanbanBoardColumn.vue';

const props = defineProps(['tasks', 'columns']);
const emit = defineEmits(['openTask', 'updateTasksOnDrop']);

const openTask = (task: ITask): void => {
  emit('openTask', task);
};

const updateTasksOnDrop = (itemID: string, columnId: string): void => {
  emit('updateTasksOnDrop', itemID, columnId);
};
</script>
<template>
  <div class="board">
    <KanbanBoardColumn
      v-for="column in props.columns"
      :key="column.id"
      :column="column"
      :tasks="props.tasks"
      @openTask="openTask"
      @updateTasksOnDrop="updateTasksOnDrop"
    />
  </div>
</template>
<style lang="scss">
.board {
  display: flex;
  align-items: flex-start;
  gap: 30px;

  &__column {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: #ffffff;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05),
      0px 0px 0px rgba(40, 47, 61, 0.12);
    border: 1px solid var(--gray-light);
    border-radius: var(--border-radius);
    user-select: none;

    &-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      text-transform: uppercase;
      border-top: 10px solid var(--blue);
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      border-bottom: 1px solid var(--gray-light);
      padding: 20px;
      div:last-child {
        margin-left: auto;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0 20px 10px 20px;
      min-height: 50vh;
    }
  }
}
</style>
