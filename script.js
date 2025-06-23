
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
