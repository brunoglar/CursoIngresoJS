/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
suma = precio1 + precio2 + precio3;
alert("La suma es $ " + suma);
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precio1 + precio2 + precio3;
    promedio = suma / 3; 
    promedio = promedio.toFixed(2);
    alert("El promedio es $ " + promedio);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let importeTotal;
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precio1 + precio2 + precio3;
    iva = suma * 21 / 100;
    importeTotal = suma + iva;
    importeTotal = importeTotal.toFixed(2);
    //vuelvo a agregar la variable importe total para pisar a la anterior, modificando ahora el toFixed (2) para que me de resulltado solo con dos decimales 
    alert("El importe total es $ " + importeTotal);
}