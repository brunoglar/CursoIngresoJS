/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let bandera;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	bandera = false;
	respuesta = "si";

	do{
			
		do {	
			numeroIngresado = prompt("Ingrese un número");
			numeroIngresado = parseInt(numeroIngresado);

		}while(isNaN(numeroIngresado));
	
		if(bandera == false) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;			
			bandera = true;					
		}																							
		
		if(numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;	
		}
		else{
			if(numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}
				
		respuesta = prompt("¿Desea ingresar otro número?");
	}while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}
