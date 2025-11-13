import initContador from "./contador.js";
export default function initFetchAnimais() {
  const contadorGrid = document.querySelector(".contador-grid");

  async function fetchAnimais() {
    try {
      const animaisResponse = await fetch("animais.json");
      const animaisAPI = await animaisResponse.json();
      animaisAPI.forEach((animal) => {
        criarDiv(animal.especie, animal.quantidade);
      });
      initContador();
    } catch (erro) {
      console.log(erro);
    }

    function criarDiv(animalh3, animalspan) {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${animalh3}</h3><span data-contador="numero">${animalspan}</span>`;
      contadorGrid.appendChild(div);
    }
  }
  fetchAnimais();
}
