var oDiv=document.createElement("DIV");
document.body.appendChild(oDiv);

function fnAppend(){
	var oList = document.getElementById("oList");
   var oNewNode = document.createElement("LI");
   oList.appendChild(oNewNode);
   oNewNode.innerText="List node 5";
}

