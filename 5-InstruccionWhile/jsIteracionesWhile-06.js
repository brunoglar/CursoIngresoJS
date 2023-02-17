/*function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;
	acumulador = 0;

	while(contador < 5){
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}
	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;									
}
*/




function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;
	acumulador = 0;

	do {
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	} while(contador < 5)
	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;									
}