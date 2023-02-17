/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	let difNegPos;

	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	respuesta = "si";

	do
	{
		do{
			numeroIngresado = prompt("Ingrese un número");
			numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado));
		
		if(numeroIngresado < 0){
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1;
		}
		else{
			if(numeroIngresado > 0){			
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos = cantidadPositivos + 1;
			}
			else{
				cantidadCeros = cantidadCeros + 1;
			}
		}
		if(numeroIngresado % 2 == 0 ){
			cantidadPares = cantidadPares + 1;
		}		

		respuesta=prompt("Quiere continuar?");
	}while(respuesta == "si");
	
	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	difNegPos = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es :" + sumaNegativos + "<br>");
	document.write("La suma de positivos es :" + sumaPositivos + "<br>");
	document.write("La cantidad de negativos es :" + cantidadNegativos + "<br>");
	document.write("La cantidad de positivos es :" + cantidadPositivos + "<br>");
	document.write("La cantidad de ceros es :" + cantidadCeros + "<br>");
	document.write("La cantidad de pares es :" + cantidadPares + "<br>");
	document.write("El promedio de negativos es :" + promedioNegativos + "<br>");
	document.write("El promedio de positivos es :" + promedioPositivos + "<br>");
	document.write("La diferencia entre positivos y negativos es :" + difNegPos);
}