// window is dynamic no proposals/validation here

var oPopup = window.createPopup();
function ButtonClick()
{
    var oPopBody = oPopup.document.body;
    oPopBody.style.backgroundColor = "lightyellow";
    oPopBody.style.border = "solid black 1px";
    oPopBody.innerHTML = "Click outside <B>popup</B> to close.";
    oPopup.show(100, 100, 180, 25, document.body);
}