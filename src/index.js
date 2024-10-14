const Aluno = require("./Aluno");
const Turma = require("./Turma");
const TurmaPresencial = require("./TurmaPresencial");

const novoAluno = new Aluno("Maria Silva", "marias1ilva", "2233445");
console.log("\nNovo aluno: ", novoAluno.getAlunoInfo());

const novaTurma = new Turma("AS64B", 8);
console.log("\nNova turma: ", novaTurma.getTurmaInfo());

const novaTurmaPresencial = new TurmaPresencial("T102", 7, 80);
console.log("\nNova turma presencial: ", novaTurmaPresencial.getTurmaPresencialInfo());
