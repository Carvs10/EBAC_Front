type student = {
  nome: string;
  cursos?: string[];
  idade: number;
};

const students: student[] = [
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

const newStudent: student = {
  nome: "Lucas",
  idade: 27,
};

function showStudent(student: student) {
  console.log(student.nome);
}
