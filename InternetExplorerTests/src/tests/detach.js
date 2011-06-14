     var srcObj = document.getElementById ("src");

            if (document.createRange) {     // all browsers, except IE before version 9
                var rangeObj = document.createRange ();
                rangeObj.selectNodeContents (srcObj);
                rangeObj.deleteContents ();

                    // rangeObj is already not needed
                rangeObj.detach ();
            }
                
