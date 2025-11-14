export default class Funcionamento {
  constructor(funcionamento, activeClass = "lojaAberta") {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.diasHora = this.funcionamento.dataset.hora.split(",").map(Number);
  }

  dadosAgora() {
    const agora = new Date();
    this.diaAgora = agora.getUTCDay();
    this.horarioAgora = (agora.getUTCHours() - 4 + 24) % 24;
  }

  estaAberto() {
    const isOpenWeek = this.diasSemana.includes(this.diaAgora);
    const isOpenHour = this.horarioAgora >= this.diasHora[0] && this.horarioAgora < this.diasHora[1];

    return isOpenWeek && isOpenHour;
  }

  addFuncionamentoClass() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.addFuncionamentoClass();
    }
    return this;
  }
}
