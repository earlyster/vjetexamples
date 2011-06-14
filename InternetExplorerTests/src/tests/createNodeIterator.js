function noMondays()
{
	
    var ni = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null, false);
                
    var textNode = ni.nextNode();
    while (textNode) {
        if (textNode.wholeText.match('Monday') || 
            textNode.parentNode.getAttribute('id') == 'Monday')
        {
            textNode.parentNode.removeChild(textNode);
        }
        textNode = ni.nextNode();
    }
}

function refresh()                 
{
    window.location.reload( false );    // Reload our page.
}