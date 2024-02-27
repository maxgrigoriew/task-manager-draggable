<script lang="ts" setup>
import { ref, reactive } from 'vue';
import AppButton from '../components/AppButton.vue';
import AppModal from '../components/AppModal.vue';
import AppInput from '../components/AppInput.vue';

interface IFormModal {
  title: string;
  description: string;
}

const tasks = ref([{ id: 1, title: '1', description: '2' }]);
const formModal = reactive({ title: '', description: '' });
const modalRef = ref<InstanceType<typeof AppModal>>();

const openModal = (): void => modalRef.value?.openModal();
const closeModal = (): void => modalRef.value?.closeModal();
const openTask = (id: number): void => {
  const findTask: IFormModal = tasks.value.find((i) => i.id === id);

  if (findTask) {
    console.log(findTask);
    formModal.title = findTask.title;
    formModal.description = findTask.description;
    openModal();
  }
};
const clearModal = (): void => {
  formModal.title = '';
  formModal.description = '';
};
const addTodo = (): void => {
  tasks.value = [...tasks.value, { ...formModal, id: Math.random() }];
  clearModal();
  closeModal();
};
</script>

<template>
  <div>
    {{ formModal }}
    {{ tasks }}
    <app-button @click="openModal">Добавить задачу</app-button>

    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
        @click="openTask(task.id)"
      >
        {{ task }}
      </li>
    </ul>
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
      <app-button @click="addTodo"> Добавить</app-button>
    </app-modal>
  </div>
</template>

<style lang="css" scoped></style>
