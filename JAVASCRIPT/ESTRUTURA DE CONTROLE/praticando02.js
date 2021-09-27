tipoUsuario = "Junior";
switch(tipoUsuario){ //switch é a criação do bloco de execução
    case "admin":
        console.log("Boas festas, chefe");
    case "Gerente":
    console.log("Felicidades, meu amigo")
    break; //break faz a checagem p ver se encontra o tipoUsuario "Gerente"

    default: // se caso o break não encontre o tipoUsuario "Gerente", o default entra em ação logando um "Sejam bem vindo"
        console.log("Seja bem vindo");
}