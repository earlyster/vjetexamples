// This example creates the following processing instruction:
//!   <?xml-stylesheet type="text/css" href="style.css">

var sTarget = 'xml-stylesheet';
var sData = 'type="text/css" href="style.css"';
var obj = document.createProcessingInstruction( sTarget, sData );
