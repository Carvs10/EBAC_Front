<script setup>
import { reactive } from "vue";

import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import TaskList from "./components/TaskLIst.vue";

const state = reactive({
  filter: "todas",
  tasks: [
    {
      title: "Estudar ES6",
      finished: false,
    },
    {
      title: "Estudar SASS",
      finished: false,
    },
    {
      title: "Academia",
      finished: true,
    },
  ],
  newTask: "",
});

const getPendingTasks = () => {
  return state.tasks.filter((task) => !task.finished);
};

const getFinishedTasks = () => {
  return state.tasks.filter((task) => task.finished);
};

const filterTasks = () => {
  const { filter } = state;

  switch (filter) {
    case "pendentes":
      return getPendingTasks();
    case "finalizadas":
      return getFinishedTasks();
    default:
      return state.tasks;
  }
};

const registerTask = () => {
  const registerTask = {
    title: state.newTask,
    finished: false,
  };

  state.tasks.push(registerTask);
  state.newTask = "";
};
</script>

<template>
  <div class="container">
    <Header :pending-tasks="getPendingTasks().length" />
    <Form
      :new-task="state.newTask"
      :edit-new-task="(event) => (state.newTask = event.target.value)"
      :register-task="registerTask"
      :change-filter="(event) => (state.filter = event.target.value)"
    />
    <TaskList :tasks="filterTasks()" />
  </div>
</template>
