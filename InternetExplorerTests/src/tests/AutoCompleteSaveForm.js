function fnSaveForm(){
	var oForm = document.getElementById("oForm"); //<< HTMLFormElement
   window.external.AutoCompleteSaveForm(oForm);
   oForm.AutoCompleteTest.value="";
   oForm.AutoCompleteIgnore.value="";
}