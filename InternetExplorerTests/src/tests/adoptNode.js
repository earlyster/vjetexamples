// dom level 3 not supported
var oNode = document.adoptNode( oXHTMLNode );
if ( oNode == null )
   oNode = document.importNode( oXHTMLNode );
parent.appendChild( oNode );
