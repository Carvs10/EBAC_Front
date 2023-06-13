const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="emoji feliz" />`;
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji triste" />`;
let lines = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  let line = `<tr>`;
  line += `<td>${inputAtividade.value}</td>`;
  line += `<td>${inputNotaAtividade.value}</td>`;
  line += `<td>${
    inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  line += "</tr>";

  lines += line;

  const table = document.querySelector("tbody");
  table.innerHTML = lines;
  inputAtividade.value = "";
  inputNotaAtividade.value = "";
});
