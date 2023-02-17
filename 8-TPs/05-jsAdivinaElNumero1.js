/*Al comenzar el juego generamos un número 
*/
let numeroSecreto;
let contadorIntentos;

function comenzar()
{
    let numeroSecreto;

    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    alert(numeroSecreto);
    contadorIntentos = 0;
}

function verificar()
{
    let numeroIngresado;

    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);
    contadorIntentos = contadorIntentos + 1;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    if(numeroIngresado == numeroSecreto){
        alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
    }
    else {
        if(numeroIngresado > numeroSecreto) {
            alert("Se pasó por " );
        }
        else {
            alert("Le falta ");
        }
    }
}