<script lang="ts" setup>
import { Ref, ref } from 'vue';
import AppButton from '../components/AppButton.vue';
import AppInput from '../components/AppInput.vue';
import AppModal from '../components/AppModal.vue';
import KanbanBoard from '../components/KanbanBoard.vue';
import COLUMNS from '../data/columns';
import { ITask } from './../types/index';
import generatorColor from 'utils/generator-color';

const tasks: Ref<ITask[]> = ref([
  {
    id: '1-1-1-1',
    title: '2',
    description: '22',
    columnId: 'start',
    background: '#fff',
  },
]);
const FIRST_COLUMN_ID = 'start';

const setInitialForm = (): ITask => ({
  title: '',
  description: '',
  columnId: 'FIRST_COLUMN_ID',
  id: '',
  background: '',
});

const formModal = ref<ITask>({
  ...setInitialForm(),
});
const isOpenModal = ref<boolean>(false);

const openModal = (): void => {
  isOpenModal.value = true;
};

const closeModal = (): void => {
  formModal.value = { ...setInitialForm() };
  isOpenModal.value = false;
};

const openTask = (task: ITask): void => {
  const foundTask = tasks.value.find((i) => i.id === task.id);

  if (foundTask) {
    formModal.value = { ...foundTask };
    openModal();
  }
};

const addTask = (): void => {
  const newTask = {
    ...formModal.value,
    id: crypto.randomUUID(),
    columnId: FIRST_COLUMN_ID,
    background: generatorColor(),
  };
  tasks.value.push(newTask);
  setInitialForm();
  closeModal();
};

const updateTask = (id: string) => {
  const findIndex = tasks.value.findIndex((task) => task.id === id);

  if (findIndex !== -1) {
    tasks.value[findIndex] = { ...formModal.value };
  }
  closeModal();
};

const removeTask = (id: string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
  closeModal();
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
      <div class="modal-buttons">
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
</style>
