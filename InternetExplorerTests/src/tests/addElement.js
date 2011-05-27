
function Init () {
            // the 'multipleSelection' command throws an exception in Opera
    try {
            // enables multiple selection in Internet Explorer
        document.execCommand("multipleSelection", false, true);
    }
    catch (e) {};
}

function SelectButtons () {
    var editor = document.getElementById ("editor");
    if (editor.createControlRange) {        //Internet Explorer
        var buttons = editor.getElementsByTagName ("button");

        var controlRange = editor.createControlRange ();
        for (var i = 0; i < buttons.length; i++) {
            controlRange.addElement (buttons[i]);
        }

        controlRange.select ();
    }
    else {
        alert ("Your browser does not support this example!");
    }
}
