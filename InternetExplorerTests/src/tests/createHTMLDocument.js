var doc = document.implementation.createHTMLDocument(title);

function makeDocument() {
	var frame = document.getElementById("theFrame");
	
	var doc = document.implementation.createHTMLDocument("New Document");
	var p = doc.createElement("p");
	p.innerHTML = "This is a new paragraph.";
	try {
	  doc.body.appendChild(p);
	} catch(e) {
	  // do something here
	}
			 
	// Copy the new HTML document into the frame
	var destDocument = frame.contentDocument;
	var srcNode = doc.documentElement;
	var newNode = destDocument.importNode(srcNode, true);
	        
	destDocument.replaceChild(newNode, destDocument.documentElement);
}