function IsDescendantOfContainer (button) {
        var container = document.getElementById ("container");
    var isDescendant = false;
    if (container.compareDocumentPosition) {
        var relation = container.compareDocumentPosition (button);
        isDescendant = ((relation & Node.DOCUMENT_POSITION_CONTAINED_BY) != 0);
    }
    else {  // Internet Explorer before version 9
        isDescendant = container.contains (button);
    }

    if (isDescendant) {
        alert ("The button is a descendant of the container element.");
    }
    else {
        alert ("The button is not a descendant of the container element.");
    }
}