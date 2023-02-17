/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada 
e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let mensaje;
	let sueldoBruto;
	
		debugger
		do {
			edadIngresada = prompt("Ingrese su edad respetando el rango establecido entre 18 y 90 años inclusive :");
			edadIngresada = parseInt(edadIngresada);
		}while(isNaN(edadIngresada) || (edadIngresada < 18 || edadIngresada > 90));

		do {
			sexoIngresado = prompt("Ingrese m si es masculino, ingrese f si es femenino");
			
		}while(sexoIngresado != "f" && sexoIngresado != "m");
		
		do {
			estadoCivilIngresado = prompt("Ingrese 1 si es soltero, 2 si es casado, 3 si es divorciado y 4 si es viudo:")
			estadoCivilIngresado = parseInt(estadoCivilIngresado);
			switch(estadoCivilIngresado){
				case 1:
					mensaje = "Usted es soltero";
					break;
				case 2:
					mensaje = "Usted es casado";
					break;
				case 3: 
					mensaje = "Usted es divorciado";
					break;
				case 4: 
					mensaje = "Usted es viudo";
			}
		}while(isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4);
	
		do {
			sueldoBruto = prompt("Ingrese su sueldo bruto, recuerde que debe ser mayor a $8000:")
			sueldoBruto = parseFloat(sueldoBruto);

		}while(isNaN(sueldoBruto) || sueldoBruto < 8000)
}