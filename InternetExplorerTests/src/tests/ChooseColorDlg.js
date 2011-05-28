//This variable must have global scope for the callColorDlg function to persist the chosen color
// missing HtmlDlgSafeHelper


var sInitColor = null;
function callColorDlg(){
//if sInitColor is null, the color dialog box has not yet been called
if (sInitColor == null) 
	var sColor = dlgHelper.ChooseColorDlg();
else
//call the dialog box and initialize the color to the color previously chosen
	var sColor = dlgHelper.ChooseColorDlg(sInitColor);
//change the return value from a decimal value to a hex value and make sure the value has 6
//digits to represent the RRGGBB schema required by the color table
	sColor = sColor.toString(16);
if (sColor.length < 6) {
  var sTempString = "000000".substring(0,6-sColor.length);
  sColor = sTempString.concat(sColor);
}
	document.execCommand("ForeColor", false, sColor);
	
//set the initialization color to the color chosen
	sInitColor = sColor;
	
}