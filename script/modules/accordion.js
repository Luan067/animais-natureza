export default function initFaqAccordion() {
  const faqQ = document.querySelectorAll('[data-accordion="faq"] dt');

  function toggleActive() {
    this.nextElementSibling.classList.toggle("ativo");
    this.classList.toggle("ativo");
  }

  if (faqQ.length) {
    faqQ[0].classList.add("ativo");
    faqQ[0].nextElementSibling.classList.add("ativo");

    faqQ.forEach((question) => question.addEventListener("click", toggleActive));
  }
}
