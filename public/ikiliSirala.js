/**
 * 
 */
function karsilastir(){
	var birinciSayi=+document.getElementById("input-1").value;
	var ikinciSayi=+document.getElementById("input-2").value;
	
	if(birinciSayi == ikinciSayi)
		geciciDizgi=birinciSayi + "=" + ikinciSayi;
	else if(birinciSayi>ikinciSayi)
		geciciDizgi= birinciSayi + ">" + ikinciSayi;
	else
		geciciDizgi= birinciSayi + "<" + ikinciSayi;
			
	
	document.getElementById("p-1").innerHTML=geciciDizgi;
}


function temizle(){
	document.getElementById("input-1").value="";
	document.getElementById("input-2").value="";
	document.getElementById("p-1").innerHTML="Karşılaştırma sonucu burada gösterilir.";
	
	
}