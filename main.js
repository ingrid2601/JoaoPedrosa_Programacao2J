//let usuário = "";

//while (usuário === ""){
    //usuário = prompt("Qual o seu nome ?");
//}

//let elementoSaudações = document.querySelector("#nome-usuário");

//if (usuário === null){
    //elementoSaudações.textContent = "seja muito bem vindo!"
//}else{
  //  elementoSaudações.textContent = usuário;
//}

function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuario");
 elemento.textContent = nomeUsuario;
}
inserirNome();
