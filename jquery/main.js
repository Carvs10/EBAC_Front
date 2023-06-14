$(document).ready(function () {
  $("header button").click(() => {
    $("form").slideDown();
  });

  $("#btn-cancel").click(() => {
    $("form").slideUp();
  });

  $("form").on("submit", (e) => {
    e.preventDefault();
    const newImg = $("#url_new_img").val();
    const newItem = $("<li style='display: none'></li>");
    $(`<img src='${newImg}' />`).appendTo(newItem);
    $(`
      <div class="overlay">
        <a href='${newImg}' target="_blank" title="Ver imagem em tamanho real"
        >
          Ver imagem em tamanho real
        </a>
      </div>

    
    `).appendTo(newItem);
    $(newItem).appendTo("ul");
    $(newItem).fadeIn(1000);
    $("#url_new_img").val("");
  });
});
