document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let maxNum = document.getElementById("max-number").value;
      maxNum = parseInt(maxNum);

      let randomNum = Math.random() * maxNum;
      randomNum = Math.floor(randomNum + 1);

      document.getElementById("resultado-valor").innerHTML = randomNum;
      document.querySelector(".resultado").style.display = "block";
    });
});
