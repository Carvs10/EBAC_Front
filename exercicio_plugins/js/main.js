$(document).ready(() => {
  $("#telefone").mask("(00) 0 0000-0000", {
    placeholder: "ex.(11) 9 9999-9999",
  });
  $("#cpf").mask("000.000.000-00", {
    placeholder: "ex: 123.456.789-00",
  });
  $("#CEP").mask("00000-000", {
    placeholder: "ex: 59999-999",
  });
});
