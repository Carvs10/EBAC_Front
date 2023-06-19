$(document).ready(() => {
  $("#carrousel-img").slick({
    autoplay: true,
  });
  $(".menu-burger").click(() => {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(DDD) 00000-0000",
  });
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculo: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor insira seu nome",
    },
    submitHandler: (form) => {
      console.log(form);
    },
    invalidHandler: (event, validator) => {
      let invalidFields = validator.numberOfInvalids();
      if (invalidFields) {
        alert(`Existem ${invalidFields} campos invalidos`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destiny = $("#contato");
    console.log(destiny);

    const vehicle = $(this).parent().find("h3").text();
    console.log(vehicle);

    alert(`${vehicle}`);

    $("#veiculo").val(vehicle);

    $("html").animate(
      {
        scrollTop: destiny.offset().top,
      },
      1000
    );
  });
});
