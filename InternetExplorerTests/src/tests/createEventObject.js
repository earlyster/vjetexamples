function OuterClick() {
    if(event.expando == "from_inner")
    {
        alert("Event actually fired by clicking on inner DIV!")
    }
    else
    {
        alert("Event fired by clicking on outer DIV!")
    }
}
function InnerClick() {
    var eventObj = document.createEventObject();
    // Set an expando property on the event object. This will be used by the 
    // event handler to determine what element was clicked on.
    eventObj.expando = "from_inner";
    parent.document.all.Outer.fireEvent("onclick",eventObj);
    event.cancelBubble = true;
}