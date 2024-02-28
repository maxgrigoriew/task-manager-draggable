<script lang="ts" setup>
import { ITask } from 'types';
import KanbanBoardTask from './KanbanBoardTask.vue';

const { filterTasks } = defineProps(['filterTasks']);
const emit = defineEmits(['openTask']);

const openTask = (task: ITask) => {
  emit('openTask', task);
};
</script>
<template>
  <TransitionGroup
    class="board__column-list"
    name="list"
    tag="ul"
  >
    <KanbanBoardTask
      :task="task"
      v-for="task in filterTasks"
      :key="task.id"
      @click="openTask(task)"
    />
  </TransitionGroup>
</template>

<style lang="scss" scoped>
.board__column-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px 10px 20px;
  min-height: 50vh;
}
</style>
