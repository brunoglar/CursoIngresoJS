/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
//para calcular el nuevo sueldo deberia sumarle al sueldo original el a
//aumento, el calculo se logra multiplicando el valor por el porcentaje
// y aumento
function mostrarAumento()
{
	let sueldo;
	let nuevosueldo;
	let aumento;
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	aumento = sueldo * 10 / 100;
	nuevosueldo = sueldo + aumento;
	document.getElementById("txtIdResultado").value = nuevosueldo;
}
