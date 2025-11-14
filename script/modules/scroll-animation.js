import debounce from "./debounce.js";
export default class ScrollAnim {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfTop = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    this.onResize = debounce(this.onResize.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(sectionTop - this.halfTop),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("animThis");
      }
    });
  }

  onResize() {
    this.halfTop = window.innerHeight * 0.6;
    this.getDistance();
    this.checkDistance();
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
      window.addEventListener("resize", this.onResize);
    }
    return this;
  }
}
