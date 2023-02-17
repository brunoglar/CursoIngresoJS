/* Bruno Gaston Luna -- Ejercicio 03 While
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let pedirClave;

	pedirClave = prompt("Ingrese la clave:");

	while (pedirClave != "utn750"){
		pedirClave = prompt("Clave invalida, reingrese la clave:")
	}
	alert("La clave ingresada es correcta");
	
}
