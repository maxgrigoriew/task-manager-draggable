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
<style lang="scss" scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  background: rgba(0, 0, 0, 0.6);
  padding: 30px;
}
</style>
