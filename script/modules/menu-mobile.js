import outsideClick from "./outsideclick.js";

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  function showMenu(event) {
    menuLista.classList.add("showMenu");
    menuButton.classList.add("showMenu");
    outsideClick(menuLista, ["click"], () => {
      menuLista.classList.remove("showMenu");
      menuButton.classList.remove("showMenu");
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", showMenu);
  }
}
