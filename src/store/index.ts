import { ITask } from 'types';
import generateColor from 'utils/generate-color';
import { createStore } from 'vuex';

const FIRST_COLUMN_ID = 'start';

const setInitialForm = (): ITask => ({
  title: '',
  description: '',
  columnId: FIRST_COLUMN_ID,
  id: '',
  background: '',
});

interface State {
  formModal: ITask;
  tasks: ITask[];
  isOpenModal: boolean;
}

export const store = createStore<State>({
  state: {
    tasks: [],
    formModal: { ...setInitialForm() },
    isOpenModal: false,
  },
  mutations: {
    OPEN_MODAL(state) {
      state.isOpenModal = true;
    },

    CLOSE_MODAL(state) {
      state.isOpenModal = false;
    },

    GET_TASKS_FROM_LOCALSTORAGE(state) {
      if (localStorage.getItem('tasks')) {
        state.tasks = JSON.parse(localStorage.getItem('tasks') as string);
      }
    },

    SET_TASKS_FROM_LOCALSTORAGE(state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    CLEAR_FORM_MODAL(state) {
      state.formModal = { ...setInitialForm() };
    },

    ADD_TASK(state) {
      const newTask: ITask = {
        ...state.formModal,
        id: crypto.randomUUID(),
        columnId: FIRST_COLUMN_ID,
        background: generateColor(),
      };

      state.tasks.push(newTask);
    },

    UPDATE_TASK(state) {
      let findIndex = state.tasks.findIndex(
        (task) => task.id === state.formModal.id
      );

      if (findIndex) {
        state.tasks[findIndex] = { ...state.formModal };
      }
    },

    UPDATE_ON_TASKS_DROP(state, { columnId, itemID }) {
      const findIndex = state.tasks.findIndex((task) => task.id == itemID);
      if (findIndex !== -1) {
        state.tasks[findIndex].columnId = columnId = columnId;
      }
    },

    REMOVE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    closeAndClearModal({ commit }) {
      commit('CLEAR_FORM_MODAL');
      commit('CLOSE_MODAL');
    },

    addTask({ commit, state }) {
      if (!state.formModal.title || !state.formModal.description) return;

      commit('ADD_TASK');
      commit('SET_TASKS_FROM_LOCALSTORAGE', state.tasks);
      commit('CLEAR_FORM_MODAL');
      commit('CLOSE_MODAL');
    },

    removeTask({ commit, state }, taskId) {
      commit('REMOVE_TASK', taskId);
      commit('CLEAR_FORM_MODAL');
      commit('SET_TASKS_FROM_LOCALSTORAGE', state.tasks);
      commit('CLOSE_MODAL');
    },

    openTask({ commit, state }, task) {
      const foundTask = state.tasks.find((i) => i.id === task.id);

      if (foundTask) {
        state.formModal = { ...foundTask };
        commit('OPEN_MODAL');
      }
    },
    updateTasks({ dispatch, commit }) {
      commit('UPDATE_TASK');
      dispatch('closeAndClearModal');
    },
    updateTasksOnDrop({ commit, state }, { itemID, columnId }) {
      commit('UPDATE_ON_TASKS_DROP', { columnId, itemID });
      commit('SET_TASKS_FROM_LOCALSTORAGE', state.tasks);
    },
  },
});
