var srcObj = document.getElementById ("src");
var destObj = document.getElementById ("dest");

if (document.createRange) {     // all browsers, except IE before version 9
    var rangeObj = document.createRange ();
    rangeObj.selectNodeContents (srcObj);
    var documentFragment = rangeObj.extractContents ();
    destObj.appendChild (documentFragment);
}