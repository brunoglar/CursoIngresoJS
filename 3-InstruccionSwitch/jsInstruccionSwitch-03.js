function mostrar()
{

	let mesSeleccionado;
	let mensaje;
	
		mesSeleccionado = document.getElementById("txtIdMes").value;

			switch(mesSeleccionado) {
				
				case "Febrero":
					mensaje = "Este mes no tiene mas de 28 dias";
					break;
				default:
					mensaje = "Este mes tiene 30 dias o mas";		
			}
			alert(mensaje)
}