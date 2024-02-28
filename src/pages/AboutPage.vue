<script lang="ts" setup>
import { ref, reactive, Ref } from 'vue';
import AppButton from '../components/AppButton.vue';
import AppModal from '../components/AppModal.vue';
import AppInput from '../components/AppInput.vue';
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
  const findTask = tasks.value.find((i) => i.id === task.id);

  if (findTask) {
    openModal();
    formModal.title = findTask.title;
    formModal.description = findTask.description;
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
