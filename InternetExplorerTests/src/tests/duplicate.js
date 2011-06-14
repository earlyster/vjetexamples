function CloneARange () {  // Internet Explorer
    if (document.createRange) {     // all browsers, except IE before version 9
        var rangeObj = document.createRange ();
        rangeObj.selectNodeContents (document.body);
        var rangeClone = rangeObj.cloneRange ();
        alert (rangeClone.toString ());
    }
    else {  // Internet Explorer before version 9
        if (document.body.createTextRange) {
            var rangeObj = self.document.body.createTextRange (); //<<
            var rangeClone = rangeObj.duplicate();
            alert (rangeClone.htmlText);
        } 
    }
}
