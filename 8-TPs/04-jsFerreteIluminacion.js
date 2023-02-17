/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    let cantidadLamparas;
    let precioActual;
    let precioFinal;
    let descuento;
    let iBrutos;
    let precioBrutofinal;
    
    precioActual = 35;
    descuento = 0;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;

    if (cantidadLamparas > 5) {
        descuento = 50;
    }
    else {
        if (cantidadLamparas == 5 && marca == "ArgentinaLuz") {
            descuento = 40;
        }
        else {
            if(cantidadLamparas == 5 && marca != "ArgentinaLuz") {
             descuento = 30;
            }
            else {
                if ((cantidadLamparas == 4) && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
                    descuento = 25;
                }
                else {
                    if(cantidadLamparas == 4) {
                        descuento = 20;
                    }
                    else {
                        if(cantidadLamparas == 3 && marca == "ArgentinaLuz"){
                            descuento = 15; 
                        }
                        else {
                            if(marca == "FelipeLamparas"){
                                descuento = 10;
                                   
                            }
                            else{
                                if(marca != "ArgentinaLamparas" && marca != "FelipeLamparas"){
                                    descuento = 5;
                                }
                            }
                        }
                    }
                }
                
            }             
        }
    }  

    precioActual = precioActual * cantidadLamparas;    
    precioFinal = precioActual - (precioActual * descuento)/100;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    if (precioFinal > 120) {
        iBrutos = precioFinal * 0.1;
        precioBrutofinal = precioFinal + iBrutos;
        document.getElementById("txtIdprecioDescuento").value = precioBrutofinal;
        alert("IIBB Usted pago: " + iBrutos);
    }
}