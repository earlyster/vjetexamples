function ElementChecker (node) {
    if (node.tagName.toLowerCase () == 'span') {
        return NodeFilter.FILTER_ACCEPT;
    }
    return NodeFilter.FILTER_SKIP;
}

function FindSubSection () {
    var contElem = document.getElementById ("content");
    if (document.createTreeWalker) {
        walker = document.createTreeWalker (contElem, NodeFilter.SHOW_ELEMENT, ElementChecker, false);
        
            // get the first matching node
        var node = walker.firstChild ();
        
        node = walker.firstChild ();
        alert ("The contents of the first subsection:\n " + node.innerHTML);                
    }
    else {
        alert ("Your browser does not support the createTreeWalker method!");
    }
}