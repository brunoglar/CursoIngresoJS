function mostrar()
{
	let horaIngresada;

	horaIngresada = document.getElementById("txtIdHora").value;
	horaIngresada = parseInt(horaIngresada);
		
	switch(horaIngresada) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");					
	}
}	