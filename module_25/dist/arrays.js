"use strict";

var socialMedias = ["Facebook", "Instagram", "Twitter"];
socialMedias.forEach(function (element, indx) {
  console.log("#".concat(indx, " - Eu tenho um perfil na rede social: ").concat(element));
});
var students = ["Gustavo", "Julia", "Paula", "Wagner"];
var alunos2 = students.map(function (currentItem) {
  currentItem = {
    nome: currentItem,
    curso: "Frontend"
  };
  return currentItem;
});
console.log(alunos2);
var numbers = [1, 2, 3, 4, 5, 6];
var doubleNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubleNumbers);
var paula = alunos2.find(function (item) {
  return item.nome == "Paula";
});
console.log(paula);
var indxPaula = alunos2.findIndex(function (item) {
  return item.nome == "Paula";
});

// if index < 0 ->  the element is not included at the array

console.log(indxPaula);
alunos2.push({
  nome: "Lucio",
  curso: "Backend"
});

// if all item has this proprety -> true
var allStudentsAreFrontenders = alunos2.every(function (item) {
  return item.curso === "Frontend";
});
console.log(allStudentsAreFrontenders);
var StudentsAreBackenders = alunos2.some(function (item) {
  return item.curso === "Backend";
});
var backenderFiltered = alunos2.filter(function (item) {
  return item.curso === "Backend";
});
var nums = [10, 20, 30, 10];
var result = nums.reduce(function (accumulator, currentItem) {
  accumulator += currentItem;
  return accumulator;
}, 0);
console.log(result);