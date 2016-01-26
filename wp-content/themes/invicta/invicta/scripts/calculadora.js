// JavaScript Document

function validarnumero(valor){ 

      //Compruebo si es un valor num&eacute;rico 
      if (isNaN(valor.value)) { 
            //entonces (no es numero) devuelvo el valor cadena vacia 
            return "" 
      }else{ 
            //En caso contrario (Si era un n&uacute;mero) devuelvo el valor 
            return valor 
      } 
} 

function round2(numero)
{
	var original=parseFloat(numero);
	var result=Math.round(original*100)/100 ;
	return result;
}

function validarCampoNumero(campo){ 
      //Compruebo si es un valor num&eacute;rico 
      if (isNaN(campo.value)) { 
            //entonces (no es numero) devuelvo el valor cadena vacia 
			campo.focus();
			alert('Debe escribir un n&uacute;mero para este campo');
            campo.value = "";				
      } 
} 

function Tarifa(tipo,peso){
	//Tipos: A=Avion | B=Barco	
	switch(tipo){
	case 'A':
		if (peso <= 17){
			monto = 80;
		}else{
			monto = (peso*4.5)
		}
		break;
	case 'B':			
		if(peso<=5){
			monto = 120;
		}else{
			monto = 22*peso;
		}	
		break;
	}
	return monto;
}

function calcula(peso,largo,ancho,alto)
{
	var e=0;
	var lar = (largo);
	var anc = (ancho);
	var alt = (alto);
	var pes = (peso);
	var res ;
	
    //Env&iacute;o A&eacute;reo
	var pesoVolumetrico = (lar*anc*alt)/166;
	if (pesoVolumetrico>pes){
		mayorPeso = "(Peso volum&eacute;trico) "+round2(pesoVolumetrico)+ " Libra(s) - Monto Aprox. $."+round2(Tarifa('A',round2(pesoVolumetrico)));
	}
	else{
		mayorPeso = pes+" Libra(s) - Monto Aprox. $."+Tarifa('A',round2(pes));					
	}
		
	//Env&iacute;o Maritimo
	var tamano=round2((lar*anc*alt)/1728);
	if (tamano<1){
		tamano=1;
	}
		
	var piesCubicos =  tamano+" Pie(s) c&uacute;bico(s) - Monto Aprox. $."+round2(Tarifa('B',tamano));
	
	
	tagAvion.value = mayorPeso;//+' (Tiempo promedio de llegada 5 d&iacute;as)';
	tagBarco.value = piesCubicos;//+' (Tiempo promedio de llegada aprox 4 semanas)';
	
}
