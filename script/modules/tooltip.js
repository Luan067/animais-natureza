export default class ToolTip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  init() {
    if (this.tooltip.length) {
      this.addToolTipEvent();
    }
    return this;
  }

  addToolTipEvent() {
    this.tooltip.forEach((item) => item.addEventListener("mouseover", this.onMouseOver));
  }

  onMouseOver(event) {
    this.createDivToolTip(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseLeave(event) {
    this.toolTipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(event) {
    this.toolTipBox.style.top = event.pageY + 20 + "px";
    this.toolTipBox.style.left = event.pageX + 20 + "px";
    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = event.pageX - 180 + "px";
    }
  }

  createDivToolTip(elemento) {
    const divToolTip = document.createElement("div");
    const text = elemento.getAttribute("aria-label");
    divToolTip.classList.add("tooltip");
    divToolTip.innerHTML = text;
    document.body.appendChild(divToolTip);
    this.toolTipBox = divToolTip;
  }
}
