var oSel = document.createElement("select"); //<<
var oPara = document.createElement("p");//<<

var sWhere = oSel.options[oSel.selectedIndex].text;  //<<

	alert(oPara.getAdjacentText(sWhere));
	