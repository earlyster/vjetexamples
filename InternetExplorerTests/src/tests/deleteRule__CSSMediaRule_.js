// https://developer.mozilla.org/en/DOM/cssRule#CSSMediaRule


var styleTag = document.getElementById ("myStyle"); //<< HTMLStyleElement

        // the style sheet in the style tag
    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

    if (sheet.cssRules) {   // all browsers, except IE before version 9
         if (sheet.cssRules.length > 0) {     
             // TODO add cssRules return variant / multiple type CssRule[] + CssMediaRule[] + 
                    sheet.cssRules[0].deleteRule(0);
                    
           }
    }
    
var arrayEx = [] ;//<< ([CSSRule + CSSMediaRule])[]
arrayEx[2].deleteRule(3);
