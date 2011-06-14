var storedSelections = [];
var rangeObj;

function SaveSelection (idx) {
    if (document.selection) {   // Internet Explorer and Opera before version 10.5
        var range = document.selection.createRange ();
        if (range.getBookmark) {    // Internet Explorer
            storedSelections[idx] = range.getBookmark ();
        }
    }
}

function RestoreSelection (idx) {
    if (document.body.createTextRange) {    // Internet Explorer
        rangeObj = document.body.createTextRange ();
        rangeObj.moveToBookmark (storedSelections[idx]);
        rangeObj.select ();
    }
}