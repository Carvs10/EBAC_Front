<script setup>
const props = defineProps([
  "registerTask",
  "newTask",
  "changeFilter",
  "editNewTask",
]);
</script>

<template>
  <form @submit.prevent="props.registerTask">
    <div class="row">
      <div class="col">
        <input
          :value="props.newTask"
          required
          type="text"
          placeholder="Digite a descrição da tarefa"
          class="form-control"
          @change="props.editNewTask"
        />
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </div>
    <div class="col-md-2">
      <select class="form-control" @change="props.changeFilter">
        <option value="todas">Todas as tarefas</option>
        <option value="pendentes">Pendentes</option>
        <option value="finalizadas">Finalizadas</option>
      </select>
    </div>
  </form>
</template>
