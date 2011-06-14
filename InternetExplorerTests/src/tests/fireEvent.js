var oDiv = document.createElement("div");
var oButton = document.createElement("button");

oDiv.innerText = "The cursor has moved over me!";
oButton.fireEvent("onclick");

var mousedownEvent = document.createEventObject (window.event);
mousedownEvent.button = 1;  // left button is down
event.srcElement.fireEvent ("onmousedown", mousedownEvent);