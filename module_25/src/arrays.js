const socialMedias = ["Facebook", "Instagram", "Twitter"];

socialMedias.forEach((element, indx) => {
  console.log(`#${indx} - Eu tenho um perfil na rede social: ${element}`);
});

const students = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = students.map((currentItem) => {
  currentItem = {
    nome: currentItem,
    curso: "Frontend",
  };
  return currentItem;
});

console.log(alunos2);

const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});
console.log(doubleNumbers);

const paula = alunos2.find((item) => {
  return item.nome == "Paula";
});

console.log(paula);

const indxPaula = alunos2.findIndex((item) => {
  return item.nome == "Paula";
});

// if index < 0 ->  the element is not included at the array

console.log(indxPaula);

alunos2.push({
  nome: "Lucio",
  curso: "Backend",
});

// if all item has this proprety -> true
const allStudentsAreFrontenders = alunos2.every((item) => {
  return item.curso === "Frontend";
});

console.log(allStudentsAreFrontenders);

const StudentsAreBackenders = alunos2.some((item) => {
  return item.curso === "Backend";
});

const backenderFiltered = alunos2.filter((item) => {
  return item.curso === "Backend";
});

const nums = [10, 20, 30, 10];

const result = nums.reduce((accumulator, currentItem) => {
  accumulator += currentItem;
  return accumulator;
}, 0);

console.log(result);
