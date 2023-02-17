/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador;
	let respuesta;
	let promedio;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si"){
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("Si desea ingresar otro número, escriba si, de lo contrario escriba cualquier otro caracter para finalizar o presione el botón cancelar.");
	}
	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}