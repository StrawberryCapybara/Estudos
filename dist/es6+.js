"use strict";

var alunos = [{
  nome: 'jorge',
  nota: 6
}, {
  nome: 'jose',
  nota: 5
}, {
  nome: 'josias',
  nota: 7
}, {
  nome: 'jackson',
  nota: 6.5
}, {
  nome: 'julia',
  nota: 5.5
}, {
  nome: 'joelma',
  nota: 7.5
}];
function filtroDeAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = filtroDeAprovados(alunos);
console.log("Alunos Aprovados");
aprovados.forEach(function (aluno) {
  console.log("".concat(aluno.nome, ": ").concat(aluno.nota));
});