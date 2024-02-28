<script lang="ts" setup>
import { computed } from 'vue';
import KanbanBoardTaskList from './KanbanBoardTaskList.vue';

const emit = defineEmits(['updateOnDropTasks', 'openTask']);
const { tasks, column } = defineProps(['tasks', 'column']);

const openTask = (task) => {
  emit('openTask', task);
};
const filterTasks = computed(() => {
  return tasks.filter((task) => task.columnId === column.id);
});

const taskCounter = computed(() => {
  return filterTasks.value.length;
});

const onDrop = (evt: DragEvent, columnId: string) => {
  console.log('drop');
  if (evt.dataTransfer) {
    const itemID = evt.dataTransfer.getData('itemID');
    emit('updateOnDropTasks', itemID, columnId);
  }
};
</script>
<template>
  <div
    class="board__column"
    @drop="onDrop($event, column.id)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="board__column-header">
      <div>{{ column.title }}</div>
      <div>{{ taskCounter }}</div>
    </div>
    <KanbanBoardTaskList
      :filterTasks="filterTasks"
      @openTask="openTask"
    />
  </div>
</template>
<style lang="scss" scoped>
.board {
  display: flex;
  align-items: flex-start;
  gap: 30px;

  &__column {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 300px;
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
  }
}
</style>
