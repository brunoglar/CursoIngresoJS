function mostrar()
{
	let destinoIngresado;
	let mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
	
		case "Bariloche":
		case "Ushuaia":	
			mensaje = "En su lugar de destino hace frío";
			break;
		default:
			mensaje = "En su lugar de destino hace calor, lleve ropa clara y no se exponga al sol";
	}
	alert(mensaje);
}	