var textContainer = document.getElementById ("textContainer");
var firstTextNode = textContainer.firstChild;
firstTextNode.deleteData (0, 2);
            
var table = document.createElement("table");
table.deleteRow();
table.deleteRow(10);
