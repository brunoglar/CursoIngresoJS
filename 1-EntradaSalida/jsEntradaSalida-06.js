/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//creo la variable para cada casilla de texto y la tercera para el 
	//resultado que es la suma de 1 y 2 
	let num1;
	let num2;
	let resultado =  num1 + num2
	//obtengo el id de la variable 1 y 2 en el html
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	//parseInt pasa el texto a número, es necesario para sumar
	// si no aparecerá error "indefinido"
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	//acá escribo la variable 3 es igual a la suma de 1 y 2 
	resultado = num1 + num2
	alert ("La suma es " + resultado )

//parseFloat sirve para pasar texto a numero con coma "decimales"
// otra forma de resolver sería así
//  let num1;
//	let num2;
//	let resultado =  num1 + num2
//	num1 = parseInt(document.getElementById("txtIdNumeroUno").value;);
//	num2 = parseInt(document.getElementById("txtIdNumeroDos").value;);
//es una forma de simplficar y ya pasarlo a numero desde el parseInt
//	resultado = num1 + num2
//	alert ("La suma es " + resultado )



}




