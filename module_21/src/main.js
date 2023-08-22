document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.clientHeight;

  window.addEventListener("scroll", () => {
    const currentPos = window.scrollY;

    if (currentPos < heroHeight) {
      hideHeader();
    } else {
      showHeader();
    }
  });

  //Atrações
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (button) => {
      const target = button.target.dataset.tabButton;
      const targetTab = document.querySelector(`[data-tab-id=${target}]`);
      hideAllTabs();
      targetTab.classList.add("shows__list--is-active");
      removeButtonClass();
      button.target.classList.add("shows__tabs__button--is-active");
    });
  }

  //faq accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", toggleQuestion);
  }
});

function hideHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function showHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}
function toggleQuestion(element) {
  const classes = "faq__questions__item--is-open";
  const parentElement = element.target.parentNode;

  parentElement.classList.toggle(classes);
}

function removeButtonClass() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function hideAllTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
