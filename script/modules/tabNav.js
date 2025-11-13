export default class TabNav {
  constructor(list, desc, activeClass = "ativo") {
    this.list = document.querySelectorAll(list);
    this.desc = document.querySelectorAll(desc);
    this.activeClass = activeClass;
  }

  addActive(index) {
    this.desc.forEach((value) => value.classList.remove(this.activeClass));
    this.desc[index].classList.add(this.activeClass, this.desc[index].dataset.anime);
  }

  addEventToList() {
    this.list.forEach((img, indexIMG) => img.addEventListener("click", () => this.addActive(indexIMG)));
  }

  init() {
    if (this.list.length && this.desc.length) {
      this.desc[0].classList.add(this.activeClass);
      this.addEventToList();
    }
    return this;
  }
}
