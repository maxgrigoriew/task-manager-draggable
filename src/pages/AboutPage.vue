<script lang="ts" setup>
import { Ref, reactive, ref } from 'vue';
import AppButton from '../components/AppButton.vue';
import AppInput from '../components/AppInput.vue';
import AppModal from '../components/AppModal.vue';
import KanbanBoard from '../components/KanbanBoard.vue';
import COLUMNS from '../data/columns';
import { ITask } from './../types/index';

const tasks: Ref<ITask[]> = ref([
  { id: '1', title: '1', description: '2', columnId: 'start' },
  { id: '2', title: '2', description: '22', columnId: 'start' },
]);
const formModal: ITask = reactive({
  id: '',
  title: '',
  description: '',
  columnId: '',
});
const isOpenModal = ref<boolean>(false);

const openModal = (): void => {
  isOpenModal.value = true;
};

const closeModal = (): void => {
  clearModal();
  isOpenModal.value = false;
};

const openTask = (task: ITask): void => {
  console.log(task, 'ITask');
  const foundTask = tasks.value.find((i) => i.id === task.id);

  if (foundTask) {
    openModal();
    formModal.title = foundTask.title;
    formModal.description = foundTask.description;
    formModal.id = foundTask.id;
  }
};
const clearModal = (): void => {
  formModal.title = '';
  formModal.description = '';
  formModal.columnId = '';
  formModal.id = '';
};

const addTask = (): void => {
  const newTask = {
    ...formModal,
    id: Math.random().toString(),
    columnId: 'start',
  };
  tasks.value.push(newTask);
  clearModal();
  closeModal();
};

const updateTask = (id: string) => {
  const findIndex = tasks.value.findIndex((task) => task.id === id);

  if (findIndex !== -1) {
    tasks.value[findIndex] = formModal;
  }
  closeModal();
};

const removeTask = (id: string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
const updateTasksOnDrop = (itemId: string, columnTitle: string) => {
  const foundTask = tasks.value.find((task) => task.id === itemId);

  if (foundTask) {
    foundTask.columnId = columnTitle;
  }
};
</script>

<template>
  <div>
    <app-button @click="openModal">Добавить задачу</app-button>
    <kanban-board
      :tasks="tasks"
      :columns="COLUMNS"
      @openTask="openTask"
      @updateTasksOnDrop="updateTasksOnDrop"
    />

    <app-modal
      v-model="formModal"
      :isOpenModal="isOpenModal"
      @closeModal="closeModal"
    >
      <app-input
        placeholder="Введите название"
        v-model="formModal.title"
      ></app-input>

      <app-input
        placeholder="Введите название"
        v-model="formModal.description"
      ></app-input>
      <app-button
        v-if="formModal.id"
        @click="updateTask(formModal.id)"
      >
        Обновить</app-button
      >
      <app-button
        v-if="formModal.id"
        @click="removeTask(formModal.id)"
      >
        Удалить</app-button
      >
      <app-button
        v-else
        @click="addTask"
      >
        Добавить</app-button
      >
    </app-modal>
  </div>
</template>

<style lang="css" scoped></style>
