<script setup>
const props = defineProps(["tasks"]);
</script>
<!-- filterTasks() -->

<template>
  <ul class="list-group mt-4">
    <li class="list-group-item" v-for="task in props.tasks">
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
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
