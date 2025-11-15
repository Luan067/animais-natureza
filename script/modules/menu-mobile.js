import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(button, list, events = ["click"]) {
    this.menuButton = document.querySelector(button);
    this.menuLista = document.querySelector(list);
    this.events = events;
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.menuLista.classList.add("showMenu");
    this.menuButton.classList.add("showMenu");
    outsideClick(this.menuLista, this.events, () => {
      this.menuLista.classList.remove("showMenu");
      this.menuButton.classList.remove("showMenu");
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.showMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuLista) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
