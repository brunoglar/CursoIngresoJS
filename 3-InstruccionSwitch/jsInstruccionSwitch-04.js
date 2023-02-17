function mostrar()
{
	let mesSeleccionado;

		mesSeleccionado = document.getElementById("txtIdMes").value;
		switch(mesSeleccionado) {
			case "Enero":
			case "Marzo":
			case "Mayo":
			case "Julio":
			case "Agosto":
			case "Octubre":
			case "Diciembre":
				alert("El mes seleccionado tiene 31 dias");
				break;
			case "Abril":
			case "Junio":
			case "Septiembre":
			case "Noviembre":
				alert("El mes seleccionado tiene 30 dias");
				break;										
			default:
				alert("El mes seleccionado tiene 28 dias");

	}		

}