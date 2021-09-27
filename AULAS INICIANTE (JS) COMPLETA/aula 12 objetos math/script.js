

const numero = Number (prompt("digite um número"));
const numeroTitulo = document.getElementById("número-titulo");
const Texto = document.getElementById("Texto");

numeroTitulo.innerHTML = numero;
Texto.innerHTML = `<p>Seu número + 2 é ${7 + 2}.</p>`;

