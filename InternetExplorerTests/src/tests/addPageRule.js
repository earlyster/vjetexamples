      function AddNewPageRule () {
            var styleTag = document.getElementById ("myStyle");

                // the empty style sheet
            var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet; 
            
            try {
                if (sheet.insertRule) {     // all browsers, except IE before version 9
                        // raises an exception in Firefox and Safari
                    sheet.insertRule ("@page :first {margin: 8cm;}", 0);

                        // Opera, Google Chrome, Internet Explorer from version 9
                    alert (sheet.cssRules[0].cssText);
                }
                else {      // Internet Explorer  before version 9
                    if (sheet.addPageRule) {
                        sheet.addPageRule (":first", "margin: 8cm;", 0);    // raises an exception 
                    } 
                }
            }
            catch (e) {
                alert (e.message);
            }
        }
      
