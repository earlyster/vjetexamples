function RemoveScreenMedia () {
   var styleTag = document.getElementById ("myStyle"); //<< HTMLStyleElement

        // the style sheet in the style tag
    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

    if (sheet.cssRules) {   // all browsers, except IE before version 9
        var rule = sheet.cssRules[0]; //<<
        var mediaList = rule.media;

        alert ("The media types before removing the screen media type: " + mediaList.mediaText);
        mediaList.deleteMedium ("screen");
        alert ("The media types after removing the screen media type: " + mediaList.mediaText);
    }
    else {  // Internet Explorer before version 9
            // note: the rules collection does not contain the at-rules
        alert ("Your browser does not support this example!");
    }
}