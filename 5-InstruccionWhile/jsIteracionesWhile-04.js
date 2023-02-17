/* Bruno Gaston Luna -- Ejercicio 04 While
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9:");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9 ){
		numeroIngresado = prompt("Usted ingresó un número incorrecto, reingrese un número de 0 a 9 inclusive");
		numeroIngresado = parseInt(numeroIngresado);
	}
	numeroIngresado = document.getElementById("txtIdNumero").value = numeroIngresado;
}