function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;	
			}
			break;
		case "Verano":
			switch(destino){
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";	
			}	
			break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja"	
			}
			break;		
		default:
			mensaje = "Se viaja"	
	}
	alert(mensaje);	
}

















/*function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = "Se viaja";
			}
			else{
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = "Se viaja";
			}	
			else{
				mensaje = "No se viaja";
			}
			break;
		case "Primavera":
			if(destino == "Bariloche"){
				mensaje = "No se viaja";
			}
			else{
				mensaje = "Se viaja";
			}
			break;
		default:
				mensaje = "Se viaja";
			}
	alert(mensaje);
}*/
