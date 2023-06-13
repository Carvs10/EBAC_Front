const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="emoji feliz" />`;
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji triste" />`;

const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;

const notaMinima = parseFloat(prompt("Digite a noa minima: "));

let lines = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  if (atividades.includes(inputAtividade.value)) {
    alert(`A atividade ${inputAtividade.value} ja foi inserida`);
  } else {
    atividades.push(inputAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let line = `<tr>`;
    line += `<td>${inputAtividade.value}</td>`;
    line += `<td>${inputNotaAtividade.value}</td>`;
    line += `<td>${
      inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    line += "</tr>";

    lines += line;
  }

  inputAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTabela() {
  const table = document.querySelector("tbody");
  table.innerHTML = lines;
}

function atualizaMediaFinal() {
  const media = calculaMediaFinal();

  document.getElementById("media").innerHTML = media;
  document.getElementById("media-resultado").innerHTML =
    media >= notaMinima ? spanAprovado : spanReprovado;
  console.log(media);
}

function calculaMediaFinal() {
  let soma = 0;

  notas.forEach((nota) => {
    soma += nota;
  });

  return soma / notas.length;
}
