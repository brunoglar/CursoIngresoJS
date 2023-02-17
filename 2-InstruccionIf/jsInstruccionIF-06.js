function mostrar()
{
let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17) { 
		alert("Usted es mayor");
 }
	else { 
    	if (edad > 12) {
  			alert("Usted es un adolescente")
  		}
    	else { 
	 	alert("Usted es un niño")
	
  }
 }
}