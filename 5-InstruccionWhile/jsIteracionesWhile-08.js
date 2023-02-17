/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let bandera;

	bandera = false;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while(respuesta == "si"){
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
			bandera = true;
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("Si desea ingresar otro número, escriba si, de lo contrario escriba cualquier otro caracter para finalizar o presione el botón cancelar.");
	}
	if(bandera == false){
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}	














/*function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	do {
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("Si desea ingresar otro número, escriba si, de lo contrario escriba cualquier otro caracter para finalizar o presione el botón cancelar.");
	}while (respuesta == "si");

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}
*/