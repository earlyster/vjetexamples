var oElem; //< HTMLElement   
var oAttrColl = oElem.attributes; //<<
    var oAttr = oAttrColl.getNamedItem("align");//<<
    alert("ALIGN attribute value: " + oAttr.value);