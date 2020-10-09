var lista = ["albania", "bahamas", "bangladesh", "belize", "jamaica", "honduras", "ghana", "grecia", "guyana", "iraq", "kenia", "kosovo", "kuwait", "libano", "macao", "mali", "nepal", "namibia", "niger", "oman", "palau", "qatar", "ruanda", "samoa", "togo", "tokelau", "rusia"];

var palabraElegida = "";
var letrasEnPalabraElegida = [];
var guiones = 0;
var guionesLetras = [];
var letrasErradas = [];
var winCounter = 0;
var lossCouter = 0;
var chancesRestantes = 7;

function inicioJuego() {
    chancesRestantes = 7;
    palabraElegida = lista[Math.floor(Math.random()* lista.length)];
    
}
inicioJuego()