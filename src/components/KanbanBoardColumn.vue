<script lang="ts" setup>
import { computed } from 'vue';
import KanbanBoardTaskList from './KanbanBoardTaskList.vue';
import { ITask } from 'types';

const emit = defineEmits(['updateTasksOnDrop', 'openTask']);
const props = defineProps(['tasks', 'column']);

const openTask = (task: ITask) => {
  emit('openTask', task);
};

const filterTasks = computed(() => {
  return props.tasks.filter((task: ITask) => task.columnId === props.column.id);
});

const taskCounter = computed(() => {
  return filterTasks.value.length;
});

const updateTasksOnDrop = (evt: DragEvent, columnId: string) => {
  if (evt.dataTransfer) {
    const itemID = evt.dataTransfer.getData('itemID');
    emit('updateTasksOnDrop', itemID, columnId);
  }
};
</script>
<template>
  <div
    class="board-column"
    @drop="updateTasksOnDrop($event, column.id)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="board-column__header">
      <div>{{ column.title }}</div>
      <div>({{ taskCounter }})</div>
    </div>
    <KanbanBoardTaskList
      :filterTasks="filterTasks"
      @openTask="openTask"
    />
  </div>
</template>
<style lang="scss" scoped>
.board-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05),
    0px 0px 0px rgba(40, 47, 61, 0.12);
  border-left: 1px solid var(--gray-light);
  user-select: none;

  &:last-child {
    border-right: 1px solid var(--gray-light);
  }
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    border-bottom: 1px solid var(--gray-light);
    padding: 20px;
    font-size: 20px;
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
</style>
