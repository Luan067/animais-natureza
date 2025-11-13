export default function initToolTip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(event) {
    const toolTipBox = createDivToolTip(this);

    function onMouseLeave() {
      toolTipBox.remove();
      this.removeEventListener("mouseleave", onMouseLeave);
      this.removeEventListener("mousemove", onMouseMove);
    }

    function onMouseMove(event) {
      toolTipBox.style.top = event.pageY + 20 + "px";
      toolTipBox.style.left = event.pageX + 20 + "px";
    }

    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  function createDivToolTip(elemento) {
    const text = elemento.getAttribute("aria-label");
    const divToolTip = document.createElement("div");
    divToolTip.classList.add("tooltip");
    divToolTip.innerHTML = text;
    document.body.appendChild(divToolTip);
    return divToolTip;
  }

  tooltip.forEach((item) => item.addEventListener("mouseover", onMouseOver));
}
