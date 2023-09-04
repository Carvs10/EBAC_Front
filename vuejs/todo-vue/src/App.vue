<script setup>
import { reactive } from "vue";

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
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>Você possui {{ getPendingTasks().length }} tarefas pendentes</p>
    </header>
    <form @submit.prevent="registerTask">
      <div class="row">
        <div class="col">
          <input
            :value="state.newTask"
            required
            type="text"
            placeholder="Digite a descrição da tarefa"
            class="form-control"
            @change="(event) => (state.newTask = event.target.value)"
          />
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
      <div class="col-md-2">
        <select
          class="form-control"
          @change="(event) => (state.filter = event.target.value)"
        >
          <option value="todas">Todas as tarefas</option>
          <option value="pendentes">Pendentes</option>
          <option value="finalizadas">Finalizadas</option>
        </select>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="task in filterTasks()">
        <input
          type="checkbox"
          :checked="task.finished"
          :id="task.title"
          @change="(event) => (task.finished = event.target.checked)"
        />
        <label :for="task.title" class="ms-3" :class="{ done: task.finished }">
          {{ task.title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
