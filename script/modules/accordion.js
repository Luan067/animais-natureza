export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classActive = "ativo";
  }

  toggleActive(item) {
    item.classList.toggle(this.classActive);
    item.nextElementSibling.classList.toggle(this.classActive);
  }

  addAccordionEvents() {
    this.accordionList.forEach((question) => question.addEventListener("click", () => this.toggleActive(question)));
  }

  init() {
    if (this.accordionList.length) {
      this.toggleActive(this.accordionList[0]);
      this.addAccordionEvents();
    }
    return this;
  }
}
