function mostrar() {
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad <= 12 || edad >= 18){
	     alert("Usted no es un adolescente");
	    
    
   	}
}

/* if (!(edad >= 13 && edad <= 17)) {
    alert ("Usted no es adolescente");  esta seria la forma no intuitiva de resolver el ejercicio, pregunto si no estoy dentro del rango
    }*/