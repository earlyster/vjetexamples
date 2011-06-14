   function InitMouseDown (event) {
                if (event.initMouseEvent) {     // all browsers except IE before version 9
                    var mousedownEvent = document.createEvent ("MouseEvent");
                    mousedownEvent.initMouseEvent ("mousedown", true, true, window, 0, 
                                                event.screenX, event.screenY, event.clientX, event.clientY, 
                                                event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, 
                                                0, null);
                    event.target.dispatchEvent (mousedownEvent);
                } else {
                    if (document.createEventObject) {   // IE before version 9
                        var mousedownEvent = document.createEventObject (window.event);
                        mousedownEvent.button = 1;  // left button is down
                        event.srcElement.fireEvent ("onmousedown", mousedownEvent);
                    }
                }
        }