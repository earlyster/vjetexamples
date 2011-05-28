var head = document.getElementsByTagName('head').item(0);
var result = head.compareDocumentPosition(document.body);
 result = Node.DOCUMENT_POSITION_FOLLOWING; //TODO missing Node static properties