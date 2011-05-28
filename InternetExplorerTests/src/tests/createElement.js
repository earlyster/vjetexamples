function fnCreate(){
    oData.innerHTML="";
    var oOption=oSel.options[oSel.selectedIndex];
    if(oOption.text.length>0){
    var aElement=document.createElement(oOption.text);
    eval("aElement." + oOption.value + "='" + oText.value + "'");
    if(oOption.text=="A"){
        aElement.href="javascript:alert('A link.')";
   }
   }
    oData.appendChild(aElement);
}


	document.getElementById("oDivOnPage").innerHTML