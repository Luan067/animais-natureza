export default function initModal() {
  const btnShowModal = document.querySelector('[data-modal="abrir"]');
  const btnCloseModal = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  function showModal(event) {
    event.preventDefault();
    modalContainer.classList.add("showModal");
  }

  function closeModal(event) {
    event.preventDefault();
    modalContainer.classList.remove("showModal");
  }

  function closeOnContainerClick(event) {
    if (event.target === this) closeModal(event);
  }

  if (btnShowModal && btnCloseModal && modalContainer) {
    btnShowModal.addEventListener("click", showModal);
    btnCloseModal.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", closeOnContainerClick);
  }
}
