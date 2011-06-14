// dom level 3 not supported
var oXHTMLNode;
var oNode = document.adoptNode( oXHTMLNode );
if ( oNode == null )
   oNode = document.importNode( oXHTMLNode, false );
parent.appendChild( oNode );
