document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");

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
});

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
