export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const diasHora = funcionamento.dataset.hora.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const isOpenWeek = diasSemana.indexOf(diaAgora) !== -1;
  const isOpenHour = horarioAgora >= diasHora[0] && horarioAgora < diasHora[1];

  if (isOpenWeek && isOpenHour) {
    funcionamento.classList.add("lojaAberta");
  }
}
