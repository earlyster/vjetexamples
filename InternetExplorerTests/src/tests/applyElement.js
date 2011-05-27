function fnApply(){
	var oList = document.getElementById("oList");
	var oNewNode = document.createElement("I");
	oList.applyElement(oNewNode);
}

function ApplyAsChild () {
	var div = document.getElementById ("myDiv");
	if (div.applyElement) {
		var newElem = document.createElement ("button");
		div.applyElement (newElem, "inside");
	}
    else {
    	alert ("Your browser does not support this example!");
    }
}

function ApplyAsParent () {
	var list = document.getElementById ("myList");
    if (list.applyElement) {
    	var newElem = document.createElement ("i");
        list.applyElement (newElem);
    }
    else {
    	alert ("Your browser does not support this example!");
    }
}
