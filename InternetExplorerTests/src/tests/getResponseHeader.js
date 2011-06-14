var httpRequest = new XMLHttpRequest();
var contType = httpRequest.getResponseHeader ("Content-Type");
var contLength = httpRequest.getResponseHeader ("Content-Length");
var lastMod = httpRequest.getResponseHeader ("Last-Modified");