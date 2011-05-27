function SelectFirstLine () {
    var elemToSelect = document.getElementById ("firstLine");
    if (window.getSelection) {  // all browsers, except IE before version 9
        var selection = window.getSelection ();
        var rangeToSelect = document.createRange ();
        rangeToSelect.selectNodeContents (elemToSelect);

        selection.removeAllRanges ();
        selection.addRange (rangeToSelect);
    } else {
        if (document.body.createTextRange) {    // Internet Explorer
            var rangeToSelect = document.body.createTextRange ();
            rangeToSelect.moveToElementText (elemToSelect);
            rangeToSelect.select ();
        }
    }
}
