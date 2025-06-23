
function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuário");
 elemento.textContent = nomeUsuario;
}
inserirNome();

//Lista de linguagens escritas:
const linguagens = ["JavaScript", "Python", "C++"]

//indices:

console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C++”

const item = document.querySelector("#lista");
item.textContent = linguagens[0];

let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: "Geografia","Programação","Arte"
}
const item = document.querySelector("#aluno");
item.textContent = aluno1.nome;

tem.textContent = aluno1.nome;
item.textContent = aluno1.idade;
item.textContent = aluno1.materiasFavoritas[1];
