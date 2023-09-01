"use strict";
const students = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
];
students.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29,
});
const newStudent = {
    nome: "Lucas",
    idade: 27,
};
function showStudent(student) {
    console.log(student.nome);
}
