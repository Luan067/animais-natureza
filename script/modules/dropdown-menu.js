import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  dropdowns.forEach((menu) => ["click", "touchstart"].forEach((userEvent) => menu.addEventListener(userEvent, handleClick)));

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("showDropDown");
    outsideClick(this, ["click", "touchstart"], () => this.classList.remove("showDropDown"));
  }
}
