$(document).ready(function () {
  $("form").on("submit", (e) => {
    e.preventDefault();
    const newTask = $("input").val();
    const newItem = $(`<li style='list-style: disc' >${newTask} </li>`);
    $(newItem).appendTo("ul");
    $(newItem).fadeIn(1000);
    $("input").val("");
  });

  $("ul").click(() => {
    $("li").addClass("done");
  });
});
