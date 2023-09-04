<script setup>
import { reactive } from "vue";

const myObj = {
  nome: "Joao",
  favMovie: "Fight Club",
};

function sayHello(nome) {
  return `${nome} says hello!`;
}

const urlBatman = "https://images3.alphacoders.com/129/1297317.jpg";
const buttonIsEnabled = false;
const showImg = true;

// let counter = 0;

const increase = () => state.counter++;
const decrease = () => state.counter--;

const changeEmail = (event) => (state.email = event.target.value);

const state = reactive({
  counter: 0,
  email: "",
  saldo: 5000,
  transferindo: 0,
  names: ["paulo", "gian", "roberto", "bianca", "alvaro"],
  nameToPush: "",
});

const futureAmount = () => {
  const { saldo, transferindo } = state;
  return saldo - transferindo;
};

const transferValidation = () => {
  const { saldo, transferindo } = state;
  return saldo >= transferindo;
};

const register = () => {
  if (!state.names.includes(state.nameToPush) && state.nameToPush.length >= 3)
    state.names.push(state.nameToPush);
};
</script>

<template>
  <h1>Olá {{ sayHello(name) }}</h1>
  <img v-if="showImg" :src="urlBatman" alt="" />

  <button :disabled="!buttonIsEnabled">Enviar mensagem</button>

  <br />
  <hr />

  {{ state.counter }}
  <button type="button" @click="increase">+</button>
  <button type="button" @click="decrease">-</button>

  <br />
  <hr />

  {{ state.email }}
  <input type="email" @keyup="changeEmail" />

  <br />
  <hr />

  Saldo: {{ state.saldo }} <br />

  Transferindo: {{ state.transferindo }} <br />

  Saldo após a trasnferência: {{ futureAmount() }} <br />
  <input
    @keyup="(event) => (state.transferindo = event.target.value)"
    type="number"
    placeholder="Quantia para transferir"
    :class="{ invalid: !transferValidation() }"
  /><br />
  <button v-if="transferValidation()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br />
  <hr />

  <ul>
    <li v-for="(nameOf, index) in state.names">
      {{ index + 1 }} -{{ nameOf }}
    </li>
  </ul>
  <input
    type="text"
    placeholder="Digite um novo nome"
    @keyup="(event) => (state.nameToPush = event.target.value)"
  />
  <button type="button" @click="register">Inserir novo nome</button>
</template>

<style scoped>
img {
  max-width: 500px;
}

.invalid {
  outline-color: red;
  border-color: red;
}
</style>

hello wordl
