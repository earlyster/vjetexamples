var range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);

function cloneContent() {
    var oP1 = document.getElementById("p1");
    var oHello = oP1.firstChild.firstChild;
    var oWorld = oP1.lastChild;
    var oRange = document.createRange();
    
    oRange.setStart(oHello, 2);
    oRange.setEnd(oWorld, 3);
    var oFragment = oRange.cloneContents();
    
    document.body.appendChild(oFragment);
                    
}