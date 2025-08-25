const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click , mostraPalavraschave");
function mostraPalavraschave(){
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave= processaTexto(texto);
    campoResultado.textContent= palavraChave.join(",");
}
function processaTexto(texto){
  let palavras = texto.split(/\P{l}+/u);
   return palavras;
}