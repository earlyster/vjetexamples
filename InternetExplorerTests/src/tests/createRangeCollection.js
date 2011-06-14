  function GetSelectedText () {
            if (window.getSelection) {  // all browsers, except IE before version 9
                var selRange = window.getSelection ();                                        
                alert (selRange.toString ());
            }
            else {
                if (document.selection.createRangeCollection) { // Internet Explorer
                    var textRanges = document.selection.createRangeCollection ();
                    var textRange = textRanges[0];
                    alert (textRange.text);
                }
            }
        }