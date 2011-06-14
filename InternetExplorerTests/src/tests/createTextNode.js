function fnChangeNode(){
   var oTextNode = document.createTextNode("New Text");
   var oReplaceNode = oSpan.childNodes(0);
   oReplaceNode.replaceNode(oTextNode);
}
