function mostrar()
{
	let estacion;
	let destino;
	let precioBase;
	let precioFinal;
	let porcentaje;

	precioBase = 15000;
	porcentaje = 0;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion) {
		case "Invierno":
			switch(destino){
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
				default:
					porcentaje = -10;
					break;	
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
				default:
					porcentaje = 10;
					break;	
			}
			break;	
		default:
			switch(destino){
				case "Cordoba":
					porcentaje = 0;
					break
				default:
					porcentaje = 10;
					break;	
			}
	
	}
	precioFinal = precioBase + (precioBase * porcentaje)/100;
	alert("Su precio a pagar $" + precioFinal);
}


























/*function mostrar()
{
	let estacion;
	let destino;
	let precioBase;
	let precioFinal;
	let descuentoAplicado;
	let aumentoAplicado;

	precioBase = 15000;
	descuentoAplicado = 0;
	aumentoAplicado = 0;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion) {
		case "Invierno":
			if(destino == "Bariloche"){
				aumentoAplicado = 20;
			}
			else{
				if(destino == "Mar del plata"){
					descuentoAplicado = 20;
			}
				else{
					descuentoAplicado = 10;
				}
			}	
			break;
		case "Verano":		
			if(destino == "Bariloche"){
				descuentoAplicado = 20;
			}
			else{
				if(destino == "Mar del plata"){
					aumentoAplicado = 20;
			}
				else{
					aumentoAplicado = 10;
				}
			}	
			break;
		default:
			if(destino != "Cordoba")
				aumentoAplicado = 10;
			else{
				precioFinal = precioBase;
			}
		
		}
	if(descuentoAplicado != 0){
		precioFinal = precioBase - precioBase * descuentoAplicado / 100;
			}
	else{
		if(aumentoAplicado != 0){
			precioFinal = precioBase + precioBase * aumentoAplicado / 100;
			}
		}
	alert("El destino seleccionado tiene un importe final de $" + precioFinal);
	}
		*/

