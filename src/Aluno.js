class Aluno {
  constructor(nome, login, RA) {
    this.nome = nome;
    this.login = login;
    this.RA = RA;
  }

  getAlunoInfo() {
    return `Nome: ${this.nome}\nLogin: ${this.login}\nRA: ${this.RA}`;
  }
}

module.exports = Aluno;
