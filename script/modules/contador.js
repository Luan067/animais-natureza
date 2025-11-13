export default function initContador() {
  const numeros = document.querySelectorAll('[data-contador="numero"]');

  function contador() {
    numeros.forEach((numero) => {
      const valor = parseInt(numero.innerText);
      const multi = Math.floor(valor / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += multi;
        numero.innerText = start;
        if (start >= valor) {
          numero.innerText = valor;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("animThis")) {
      observer.disconnect();
      contador();
    }
  }

  if (numeros.length) {
    const observer = new MutationObserver(handleMutation);
    const observerTarget = document.querySelector(".contador");
    observer.observe(observerTarget, { attributes: true });
  }
}
