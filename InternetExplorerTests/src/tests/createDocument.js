var doc = document.implementation.createDocument ('http://www.w3.org/1999/xhtml', 'html', null);
var body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
body.setAttribute('id', 'abc');
doc.documentElement.appendChild(body);
alert(doc.getElementById('abc')); // [object HTMLBodyElement]