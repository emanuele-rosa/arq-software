const Turma = require('./Turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
    this.aprovado = this.verificarAprovacao();
  }

  verificarAprovacao() {
    return super.verificarAprovacao() && this.frequencia >= 75;
  }

  getTurmaPresencialInfo() {
    return `Código: ${this.codigo}, Nota: ${this.nota}, Frequência: ${this.frequencia}%, Aprovado: ${this.aprovado}`;
  }
}

module.exports = TurmaPresencial;
