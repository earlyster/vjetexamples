// namespaces and doImport not regognized

document.namespaces("TESTNS").doImport("#default");


var ns; // holds the newly created namespace object

function Load()
{
	ns = document.namespaces[0];
	ns.doImport("redbg.htc");
	
	if(ns.readyState != "complete")
	{
		// Wait for the element behaviors to finish downloading
		ns.attachEvent("onreadystatechange", addTagnamesToBody);
	}
	else
	{
		addTagnamesToBody();
	}

	return true;
}
function addTagnamesToBody()
{
	if(ns.readyState != "complete") return;

	var v = document.createElement("myns:abc");
	v.innerText = "ElementBehavior";
	document.body.appendChild(v);

	ns.detachEvent("onreadystatechange", addTagnamesToBody);
}