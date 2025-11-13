export default function initSmoothScroll() {
  const menu = document.querySelectorAll('[data-scroll="suave"] a[href^="#"]');

  function smoothScroll(event) {
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  menu.forEach((item) => item.addEventListener("click", smoothScroll));
}
