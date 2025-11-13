export default function initTabNav() {
  const listaAnimaisIMG = document.querySelectorAll(".lista-animais-imagens li");
  const animaisDesc = document.querySelectorAll(".animais-descricao section");

  function addAtivo(index) {
    animaisDesc.forEach((value) => value.classList.remove("ativo"));
    animaisDesc[index].classList.add("ativo", animaisDesc[index].dataset.anime);
  }

  if (listaAnimaisIMG.length && animaisDesc.length) {
    animaisDesc[0].classList.add("ativo");
    listaAnimaisIMG.forEach((img, indexIMG) => img.addEventListener("click", () => addAtivo(indexIMG)));
  }
}
