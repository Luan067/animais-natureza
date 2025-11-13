export default class Modal {
  constructor(show, close, container) {
    this.btnShowModal = document.querySelector(show);
    this.btnCloseModal = document.querySelector(close);
    this.modalContainer = document.querySelector(container);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.closeOnContainerClick = this.closeOnContainerClick.bind(this);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal() {
    this.modalContainer.classList.toggle("showModal");
  }

  closeOnContainerClick(event) {
    if (event.target === this.modalContainer) {
      this.modalContainer.classList.remove("showModal");
    }
  }

  addModalEvents() {
    this.btnShowModal.addEventListener("click", this.eventToggleModal);
    this.btnCloseModal.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.closeOnContainerClick);
  }

  init() {
    if (this.btnShowModal && this.btnCloseModal && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
