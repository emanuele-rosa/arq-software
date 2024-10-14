class Turma {
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
      this.aprovado = this.verificarAprovacao();
    }
  
    verificarAprovacao() {
      return this.nota >= 6;
    }
  
    getTurmaInfo() {
    return `Código: ${this.codigo}\nNota: ${this.nota}\nAprovado: ${this.aprovado}`;
    }
  }
  
  module.exports = Turma;
  