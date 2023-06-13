const contactForm = document.getElementById("contact-form");

let lines = "";

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addContato();
});

function addContato() {
  const inputName = document.getElementById("contact-name");
  let inputTel = document.getElementById("contact-tel");

  inputTel.value =
    "(" +
    inputTel.value.substr(0, 2) +
    ") " +
    inputTel.value.substr(2, 5) +
    "-" +
    inputTel.value.substr(7, 10);

  console.log(inputName.value);
  console.log(inputTel.value);

  let line = `<tr>`;
  line += `<td>${inputName.value}</td>`;
  line += `<td>${inputTel.value}</td>`;
  line += "</tr>";

  lines += line;

  inputName.value = "";
  inputTel.value = "";

  const table = document.querySelector("tbody");
  table.innerHTML = lines;
}
