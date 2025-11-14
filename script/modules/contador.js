export default class Contador {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static contadorIncremento(numero) {
    const valor = Number(numero.innerText.replace(/[^\d]/g, ""));
    const multi = Math.max(1, Math.floor(valor / 100));
    let start = 0;
    const timer = setInterval(() => {
      start += multi;
      numero.innerText = start;
      if (start >= valor) {
        numero.innerText = valor;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  contador() {
    this.numeros.forEach((numero) => this.constructor.contadorIncremento(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.contador();
    }
  }

  mutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.mutationObserver();
    }
    return this;
  }
}
