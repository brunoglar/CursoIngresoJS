/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//asigno la variable como let para empezar cada codigo
	let nombre;
	
	nombre = document.getElementById("txtIdNombre").value;
	alert(nombre)
	//para que la casilla de texto vuelva a 0 debo darle valor "" 
	document.getElementById("txtIdNombre").value = "";
}


