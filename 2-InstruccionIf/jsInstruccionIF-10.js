function mostrar()
{
let numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom > 8) { 
	alert("EXCELENTE TRABAJO, TU NOTA ES " + numeroRandom);
 	}
	else { 
    	if (numeroRandom < 9 && numeroRandom > 3){
  		alert("Genial, aprobaste con " + numeroRandom);
  }
    else { 
	   if (numeroRandom < 4){
	 	alert("La próxima podrás, tu nota fue un " + numeroRandom);

 	}
}
}
}