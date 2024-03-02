<script lang="ts" setup>
import { onMounted } from 'vue';
import AppButton from '../components/AppButton.vue';
import AppInput from '../components/AppInput.vue';
import AppModal from '../components/AppModal.vue';
import KanbanBoard from '../components/KanbanBoard.vue';
import COLUMNS from '../data/columns';

import { useStore } from 'vuex';

const store = useStore();

onMounted(() => store.commit('GET_TASKS_FROM_LOCALSTORAGE'));
</script>

<template>
  <div>
    <app-button
      class="app-button"
      @click="store.commit('OPEN_MODAL')"
      outline="true"
      >Добавить задачу</app-button
    >
    <kanban-board
      :tasks="store.state.tasks"
      :columns="COLUMNS"
      @openTask="(task) => store.dispatch('openTask', task)"
      @updateTasksOnDrop="
        (itemID, columnId) =>
          store.dispatch('updateTasksOnDrop', { itemID, columnId })
      "
    />

    <app-modal
      v-model="store.state.formModal"
      :isOpenModal="store.state.isOpenModal"
      @closeModal="store.dispatch('closeAndClearModal')"
    >
      <app-input
        placeholder="Введите название"
        v-model="store.state.formModal.title"
      ></app-input>

      <app-input
        placeholder="Введите название"
        v-model="store.state.formModal.description"
      ></app-input>
      <div class="modal-buttons">
        <app-button
          v-if="store.state.formModal.id"
          @click="store.dispatch('updateTasks')"
        >
          Обновить</app-button
        >

        <app-button
          v-if="store.state.formModal.id"
          @click="store.dispatch('removeTask', store.state.formModal.id)"
        >
          Удалить</app-button
        >
        <app-button
          v-else
          @click="store.dispatch('addTask')"
        >
          Добавить</app-button
        >
      </div>
    </app-modal>
  </div>
</template>

<style lang="css" scoped>
.modal-buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20px;
}
.app-button {
  margin-bottom: 20px;
}
</style>
../types/index
