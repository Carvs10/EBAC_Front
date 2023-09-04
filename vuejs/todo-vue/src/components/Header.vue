<script setup>
const props = defineProps(["pendingTasks"]);
</script>

<template>
  <header class="p-5 mb-4 mt-4 bg-light rounded-3">
    <h1>Minhas tarefas</h1>
    <p>Você possui {{ props.pendingTasks }} tarefas pendentes</p>
    <!-- getPendingTasks().length -->
  </header>
</template>

<style scoped></style>
