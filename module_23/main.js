// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("btn-cep").addEventListener("click", () => {
//     const xhttp = new XMLHttpRequest();
//     const cep = document.getElementById("cep").value;
//     const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//     xhttp.open("GET", endpoint);
//     xhttp.send();

//     https://viacep.com.br/ws/id/json
//   });
// });

$(document).ready(() => {
  $("#cep").mask("00000-000");

  $("#btn-cep").click(() => {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    const botao = $(this);

    $(botao).find("i").addClass("d-none");
    $(botao).find("span").removeClass("d-none");

    // $.ajax(endpoint).done((response) => {
    // const logradouro = response.logradouro;
    // const bairro = response.bairro;
    // const cidade = response.localidade;
    // const estado = response.uf;
    // const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
    // $("#endereco").val(endereco);

    //   setTimeout(function () {
    //     $(botao).find("span").addClass("d-none");
    //     $(botao).find("i").removeClass("d-none");
    //   }, 2000);
    // });
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        $("#endereco").val(endereco);

        setTimeout(function () {
          $(botao).find("span").addClass("d-none");
          $(botao).find("i").removeClass("d-none");
        }, 2000);
      });
  });
});
