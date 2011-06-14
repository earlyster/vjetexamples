function fnBegin(){
	// doucment.all should be dynamic since any element could be accessed through doc.all
    var fr = document.all.oFrame.cloneNode();
    // should be optional
    var fr2 = document.createElement("iframe").cloneNode();
    
    alert(document.body.innerHTML);
}  
