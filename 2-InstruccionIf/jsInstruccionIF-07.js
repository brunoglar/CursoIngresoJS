function mostrar()
{
    let edad;
    let estadoActual;

        edad = document.getElementById("txtIdEdad").value;
        edad = parseInt(edad);
        estadoActual = document.getElementById("estadoCivil").value;

	        if (edad < 18 && estadoActual != "Soltero") {
		     alert("Usted es muy pequeño para no ser soltero")
		}
}		