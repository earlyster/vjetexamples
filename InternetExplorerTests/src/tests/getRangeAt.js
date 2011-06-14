

var storedSelections = [];

function StoreSelection () {
    if (window.getSelection) {
    	// TODO window.getSelection missing
        var currSelection = window.getSelection ();
        for (var i = 0; i < currSelection.rangeCount; i++) {
            storedSelections.push (currSelection.getRangeAt (i));
        }
        currSelection.removeAllRanges ();
    } else {
        alert ("Your browser does not support this example!");
    }
}

function ClearStoredSelections () {
    storedSelections.splice (0, storedSelections.length);
}

function ShowStoredSelections () {
    if (window.getSelection) {
        var currSelection = window.getSelection ();
        currSelection.removeAllRanges ();
        for (var i = 0; i < storedSelections.length; i++) {
            currSelection.addRange (storedSelections[i]);
        }
    } else {
        alert ("Your browser does not support this example!");
    }
}