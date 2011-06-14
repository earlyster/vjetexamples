var jsCode = "alert ('Execution is completed.');";
if (window.execScript) {        // Internet Explorer and Google Chrome
      execScript (jsCode, "JavaScript");
}
else {
	if (window.eval) {
		// the script language  is always JavaScript for the eval method
		eval (jsCode);
    }
}
