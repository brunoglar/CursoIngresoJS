/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
//Creo la variable "var - let" a elección para reservar memoria para
//guardar el nombre de usuario
	let nombre;

//Guardo en la variable nombre el texto que escribió el usuario en 
//la ventana prompt
	nombre = prompt("Ingrese su nombre");

//copio el nombre que tengo guardado en la caja de texto embebida pag html
	document.getElementById("txtIdNombre").value = nombre;
	
}

