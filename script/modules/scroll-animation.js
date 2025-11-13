export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const halfTop = window.innerHeight * 0.6;

  function scrollAnim() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const activeByHalfTop = sectionTop - halfTop;
      if (activeByHalfTop < 0) {
        section.classList.add("animThis");
      }
    });
  }

  if (sections.length) {
    scrollAnim();
    window.addEventListener("scroll", scrollAnim);
  }
}
