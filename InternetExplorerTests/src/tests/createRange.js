   function TestSelection () {
            if (window.getSelection) {  // all browsers, except IE before version 9
                var selectionRange = window.getSelection ();                                        
                alert ("The text content of the selection:\n" + selectionRange.toString ());
            } 
            else {
                if (document.selection.type == 'None') {
                    alert ("No content is selected, or the selected content is not available!");
                }
                else {
                    var textRange = document.selection.createRange ();
                    alert ("The text content of the selection:\n" + textRange.text);
                }
            }
        }