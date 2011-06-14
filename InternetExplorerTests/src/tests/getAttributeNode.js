 function GetAttrNode(){
     //Retrieve an attribute node and a DOM attribute.
     var o = document.getElementById("msdn");
     var sDomAttr = o.href;
     
     o.setAttribute('href', 'en-us/ie/default.aspx');
     var sContentAttr = o.getAttributeNode("href");
     var sOutput = ("Content attribute node value: " + sContentAttr.value + 
              "<br/>DOM attribute value: " + sDomAttr);
              
     document.getElementById("output").innerHTML = sOutput;
    }