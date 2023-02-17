function mostrar()
{
let destinoIngresado;

destinoIngresado = document.getElementById("txtIdDestino").value;

switch(destinoIngresado){

	case "Bariloche":
		mensaje = "Su lugar de destino se encuentra en el OESTE del país";
		break;
	case "Mar del plata":
		mensaje = "Su lugar de destino se encuentra en el ESTE del país";
		break;
	case "Cataratas":
		mensaje = "Su lugar de destino se encuentra en el NORTE del país";
		break;
	case "Ushuaia":
		mensaje = "Su lugar de destino se encuentra en el SUR del país ";	
	}
alert(mensaje);
}