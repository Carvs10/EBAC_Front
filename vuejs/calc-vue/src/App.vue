<script setup>
import { reactive } from "vue";

const state = reactive({
  numb1: 0,
  numb2: 0,
  operation: "",
});

const chooseOperation = () => {
  const { operation } = state;

  switch (operation) {
    case "minus":
      return subtraction();
    case "times":
      return multiplication();
    case "division":
      return division();
    default:
      return sum();
  }
};

const sum = () => {
  const { numb1, numb2 } = state;
  return parseInt(numb1) + parseInt(numb2);
};

const multiplication = () => {
  const { numb1, numb2 } = state;
  return numb1 * numb2;
};

const subtraction = () => {
  const { numb1, numb2 } = state;
  return numb1 - numb2;
};

const division = () => {
  const { numb1, numb2 } = state;
  return numb1 / numb2;
};
</script>

<template>
  <header>
    <h1>Calculadora Aritimetica</h1>
  </header>
  <div class="container">
    <div class="operation">
      <input
        type="number"
        placeholder="Primeiro valor"
        @keyup="(event) => (state.numb1 = event.target.value)"
      />
      <input
        type="number"
        placeholder="Segundo valor"
        @keyup="(event) => (state.numb2 = event.target.value)"
      />
      <select @change="(event) => (state.operation = event.target.value)">
        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="times">X</option>
        <option value="division">/</option>
      </select>
    </div>
    <input type="number" :value="chooseOperation()" />
    {{ `Resultado : ${chooseOperation()}` }}
  </div>
</template>

<style scoped>
header {
  text-align: center;
  font-size: 28px;
  background-color: burlywood;
  padding: 8px;
}

.container {
  max-width: 960px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: antiquewhite;
}
.operation {
  margin-bottom: 16px;
}
input {
  max-width: 400px;
  height: 70px;
}
select {
  width: 50px;
  height: 50px;
  margin-left: 16px;
}
</style>
