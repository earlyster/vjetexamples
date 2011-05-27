var oSelect = document.getElementById('oSelect');
var oOption = document.createElement('OPTION');
// Add the option to the collection first, then set properties
oSelect.options.add(oOption);
oOption.innerHTML = "Two";
oOption.value = "2";

var opts = document.getElementById('oSelect').options;
opts[opts.length] = new Option("Three","3");

var sel = document.getElementById('oSelect');
sel.add(new Option("Four","4"), oOption);

