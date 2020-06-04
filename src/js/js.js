// Variáveis Criadas que recebem o método que possui atributo ID com valor específico.
var div = document.getElementById('animado');
var divd = document.getElementById('animado-1');
//Variável recebendo texto para passar na tag como <p>parágrafo
var texto = 'We Create Simple Solution';
var textot = 'For Your Complex Task'
//Função escrever para
function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 100);
}

escrever(texto, div);
escrever(textot, divd);

//document.getElementById("myButton").onclick = function() {
//    location.href = "./about";
//}
//Função que oculta o menu display:none
function  minhaFuncao() {
    var x = document.getElementById('myTopnav');
    if (x.className === "navegador") {
        x.className += "responsive";
    }else {
        x.className = "navegador";
    }
}