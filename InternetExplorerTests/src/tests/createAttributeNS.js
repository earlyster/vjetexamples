//< needs(misc.ajax)

var httpRequest = null;
        
        function SendRequest () {
            if (!httpRequest) {
                httpRequest = CreateHTTPRequestObject();   // defined in ajax.js
            }
            if (httpRequest) {          
                    // The requested file must be in the same domain that the page is served from.
                var url = "ns.xml";
                httpRequest.open ("GET", url, true);    // async
                httpRequest.onreadystatechange = OnStateChange;
                httpRequest.send (null);
            }
        }

        function OnStateChange () {
            if (httpRequest.readyState == 0 || httpRequest.readyState == 4) {
                if (IsRequestSuccessful (httpRequest)) {    // defined in ajax.js
                    Test_CreateAttributeNS ();
                }
                else {
                    alert ("Operation failed.");
                }
            }
        }

        function Test_CreateAttributeNS () {
            var xmlDoc = ParseHTTPResponse (httpRequest);   // defined in ajax.js
            if (!xmlDoc)
                return;

            var itemTags = xmlDoc.getElementsByTagName ("item");
            var firstItem = itemTags[0];

            if (xmlDoc.createAttributeNS && firstItem.getAttributeNS && firstItem.setAttributeNodeNS) {
                var color = firstItem.getAttributeNS ("http://help.dottoro.com/NS", "color");
                alert ("The value of the color attribute is " + color);

                var newAttr = xmlDoc.createAttributeNS ("http://help.dottoro.com/NS", "color");
                newAttr.value = "blue";
                firstItem.setAttributeNodeNS (newAttr);

                var color = firstItem.getAttributeNS ("http://help.dottoro.com/NS", "color");
                alert ("The value of the color attribute is " + color);
            }
            else {
                alert ("Your browser doesn't support this functionality!");
            }

        }
        
        SendRequest();
