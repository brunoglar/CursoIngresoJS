/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperF;
    let temperC;

    temperF = parseFloat(document.getElementById("txtIdTemperatura").value);
    temperC = (temperF - 32) / 1.8; 
    alert(`${temperF} grados Fahrenheit son ${temperC.toFixed(1)} centigrados`);

}

function CentigradosFahrenheit () 
{
	let temperF;
    let temperC;
    temperC = parseFloat(document.getElementById("txtIdTemperatura").value);
    temperF = temperC * 1.8 + 32;
    // aca no hace falta parentesis porque la multiplicacion y division tiene prioridad por lo tanto se resuelve primero y despues se realiza la suma y resta
    alert(`${temperC} centigrados son ${temperF.toFixed(1)} grados Fahrenheit`);
}
