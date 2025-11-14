import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdowns, events = ["click", "touchstart"]) {
    this.dropdowns = document.querySelectorAll(dropdowns);
    this.events = events;

    this.handleClick = this.handleClick.bind(this);
  }

  addDropdownEvents() {
    this.dropdowns.forEach((dropdown) => {
      this.events.forEach((userEvent) => {
        dropdown.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  handleClick(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add("showDropDown");
    outsideClick(element, this.events, () => element.classList.remove("showDropDown"));
  }

  init() {
    if (this.dropdowns.length) {
      this.addDropdownEvents();
    }
    return this;
  }
}
