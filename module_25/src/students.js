const students = [
  { nome: "Rodrigo", nota: 9.0 },
  { nome: "Marcela", nota: 4.0 },
  { nome: "Ana", nota: 8.5 },
  { nome: "Mariana", nota: 10.0 },
  { nome: "João", nota: 7.5 },
  { nome: "Pedro", nota: 3.5 },
  { nome: "Roberta", nota: 9.5 },
];

const approvedStudents = () => {
  const filteredStudents = students.filter((student) => {
    return student.nota >= 6.0;
  });

  filteredStudents.forEach((element) => {
    console.log(`Aluno : ${element.nome} aprovado com nota : ${element.nota}`);
  });
};

approvedStudents();
