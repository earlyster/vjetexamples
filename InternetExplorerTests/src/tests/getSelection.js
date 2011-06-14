if (window.getSelection) {  // all browsers, except IE before version 9
    var range = window.getSelection ();  // TODO window.getSelection                                      
    alert (range.toString ());
} 
else {
    if (document.selection.createRange) { // Internet Explorer
        var range = document.selection.createRange ();
        alert (range.text);
    }
}