export default class Modal {
  constructor(show, close, container) {
    this.btnShowModal = document.querySelector(show);
    this.btnCloseModal = document.querySelector(close);
    this.modalContainer = document.querySelector(container);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeOnContainerClick = this.closeOnContainerClick.bind(this);
  }

  showModal(event) {
    event.preventDefault();
    this.modalContainer.classList.add("showModal");
  }

  closeModal(event) {
    event.preventDefault();
    this.modalContainer.classList.remove("showModal");
  }

  closeOnContainerClick(event) {
    if (event.target === this.modalContainer) {
      this.closeModal(event);
    }
  }

  addModalEvents() {
    this.btnShowModal.addEventListener("click", this.showModal);
    this.btnCloseModal.addEventListener("click", this.closeModal);
    this.modalContainer.addEventListener("click", this.closeOnContainerClick);
  }

  init() {
    if (this.btnShowModal && this.btnCloseModal && this.modalContainer) {
      this.addModalEvents();
    }
  }
}
