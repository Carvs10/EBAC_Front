const validateForm = document.getElementById("number-form");
let isValid = false;

function greaterThen(a, b) {
  return a < b ? true : false;
}

validateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numberA = document.getElementById("campoA");
  const numberB = document.getElementById("campoB");
  console.log(greaterThen(numberA.value, numberB.value));
  isValid = greaterThen(numberA.value, numberB.value);

  const message = document.querySelector(".success");

  if (isValid) {
    message.innerHTML = `Formulário válido`;
    message.style.display = "block";

    numberA.classList.add("success-input");
    numberB.classList.add("success-input");
  } else {
    message.innerHTML = "Formulário inválido";
    message.classList.add("error");
    message.classList.remove("success");
    message.style.display = "block";
    numberA.classList.add("error-input");
    numberB.classList.add("error-input");
  }
});
