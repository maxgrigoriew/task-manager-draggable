<script lang="ts" setup>
import { Ref, reactive, ref } from 'vue';
import AppButton from '../components/AppButton.vue';
import AppInput from '../components/AppInput.vue';
import AppModal from '../components/AppModal.vue';
import KanbanBoard from '../components/KanbanBoard.vue';
import COLUMNS from '../data/columns';
import { ITask } from './../types/index';

const tasks: Ref<ITask[]> = ref([
  { id: 1, title: '1', description: '2', columnId: 'start' },
  { id: 12, title: '2', description: '22', columnId: 'start' },
]);
const formModal = reactive({ title: '', description: '', columnId: '' });
const modalRef = ref<InstanceType<typeof AppModal>>();

const openModal = (): void => modalRef.value?.openModal();
const closeModal = (): void => modalRef.value?.closeModal();
const openTask = (task: ITask): void => {
  const foundTask = tasks.value.find((i) => i.id === task.id);

  if (foundTask) {
    openModal();
    formModal.title = foundTask.title;
    formModal.description = foundTask.description;
  }
};
const clearModal = (): void => {
  formModal.title = '';
  formModal.description = '';
  formModal.columnId = '';
};
const addTask = (): void => {
  const newTask = {
    ...formModal,
    id: Math.random(),
    columnId: 'start',
  };
  tasks.value.push(newTask);
  clearModal();
  closeModal();
};

const updateTasksOnDrop = (itemId: string, columnTitle: string) => {
  const foundTask = tasks.value.find((task) => task.id === Number(itemId));

  if (foundTask) {
    foundTask.columnId = columnTitle;
  }
};
</script>

<template>
  <div>
    {{ formModal }} <br />
    {{ tasks }}
    <app-button @click="openModal">Добавить задачу</app-button>

    <kanban-board
      :tasks="tasks"
      :columns="COLUMNS"
      @openTask="openTask"
      @updateTasksOnDrop="updateTasksOnDrop"
    />

    <app-modal
      ref="modalRef"
      v-model="formModal"
    >
      <app-input
        placeholder="Введите название"
        v-model="formModal.title"
      ></app-input>

      <app-input
        placeholder="Введите название"
        v-model="formModal.description"
      ></app-input>
      <app-button @click="addTask"> Добавить</app-button>
    </app-modal>
  </div>
</template>

<style lang="css" scoped></style>
