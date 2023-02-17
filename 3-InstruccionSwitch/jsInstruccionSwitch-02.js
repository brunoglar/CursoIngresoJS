function mostrar()
{

	let mesSeleccionado;

		mesSeleccionado = document.getElementById("txtIdMes").value;

			switch(mesSeleccionado) {
				case "Enero":
					alert("Faltan meses para invierno");
					break;
				case "Febrero":
					alert("Faltan meses para invierno");
					break;
				case "Marzo":
					alert("Faltan meses para invierno");
					break;
				case "Abril":
					alert ("Faltan meses para invierno");
					break;				  	
				case "Mayo":
					alert("Faltan meses para invierno");
					break;
				case "Junio":
					alert("Falta un mes para invierno");
					break;
				case "Julio":
					alert("Abrigate que hace frio");
					break;
				case "Agosto":
					alert ("Abrigate que hace frio");
					break;	
				case "Septiembre":
					alert("Se fue el invierno, llego la primavera con el calorcito");
					break;
				case "Octubre":
					alert("Ya pasamos el frio, ahora calor");
					break;
				case "Noviembre":
					alert ("Ya pasamos el frio, ahora calor");
					break;
				case "Diciembre":
					alert ("Ya pasamos el frio, ahora calor");				 					  				  	
				}
}