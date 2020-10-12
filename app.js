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
    chancesRestantes = 6;
    palabraElegida = lista[Math.floor(Math.random()* lista.length)];
    letrasEnPalabraElegida = palabraElegida.split("");
    guiones = letrasEnPalabraElegida.length;

    guionesLetras = [];
    letrasErradas = [];

    for (let i = 0; i < guiones; i++) {
        guionesLetras.push("_");    
    }

    document.getElementById("wordBlanks").innerHTML = guionesLetras.join(" ");
    document.getElementById("guessesLeft").innerHTML = chancesRestantes;
    document.getElementById("wrongGuesses").innerHTML = letrasErradas.join(" ");

}
inicioJuego()

function compararLetra(letra){
    var letraEnPalabra = false;

    for (let i = 0; i < guiones; i++) {
        if(palabraElegida[i] === letra) {
            letraEnPalabra = true;
        }        
    }
    if(letraEnPalabra){
        for (let i = 0; i < guiones; i++) {
            if(palabraElegida[i]===letra){
                guionesLetras[i] = letra;
            }            
        }
        console.log(guionesLetras)
    }else{
        letrasErradas.push(letra);
        chancesRestantes --;
    }
}
function rondaCompleta() {

    document.getElementById("guessesLeft").innerHTML = chancesRestantes;
    document.getElementById("wordBlanks").innerHTML = guionesLetras.join(" ");
    document.getElementById("wrongGuesses").innerHTML = letrasErradas.join(" ");

    if (letrasEnPalabraElegida.toString() === guionesLetras.toString()) {
        alert("GANASTE EL JUEGO!!! EL PAIS ES: " + palabraElegida);
        winCounter++;

        document.getElementById("winCounter").innerHTML = winCounter;
        alert("GANADOS:  " +   winCounter   +   " PERDIDOS :  " +   lossCouter);

        inicioJuego();
    }
    else if(chancesRestantes === 0){
        alert("PERDISTE, SEGUI PARTICIPANDO.")
        lossCouter++;

        document.getElementById("lossCounter").innerHTML = lossCouter;
        alert("GANADOS:  " +   winCounter   +   " PERDIDOS :  " +   lossCouter);


        inicioJuego();
    }
}

document.onkeyup = function(event){
  if (event.keyCode >= 65 && event.keyCode <=90) {
    var letraIngresada = event.key.toLowerCase();
    compararLetra(letraIngresada);
    rondaCompleta();
  }
    
}
