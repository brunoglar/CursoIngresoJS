/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	alert("Usted se llama " + nombre + " y su edad es de " + edad);
	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";
	

}

