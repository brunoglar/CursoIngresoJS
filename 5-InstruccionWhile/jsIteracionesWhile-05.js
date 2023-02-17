/* Bruno Gaston Luna -- Ejercicio 05 While
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("Ingrese su tipo de sexo, F si es femenino, M si es masculino:");

	while(sexoIngresado != "f" && sexoIngresado != "m"){
		
		sexoIngresado = prompt("Sexo incorrecto, ingrese nuevamente f o m según corresponda:");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
}