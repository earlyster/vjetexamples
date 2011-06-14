//< needs(misc.ajax)

var httpRequest = null;
        
        function SendRequest () {
            if (!httpRequest) {
                httpRequest = CreateHTTPRequestObject ();   // defined in ajax.js
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
                    Test_GetNamedItemNS ();
                }
                else {
                    alert ("Operation failed.");
                }
            }
        }

        function Test_GetNamedItemNS () {
            var xmlDoc = ParseHTTPResponse (httpRequest);   // defined in ajax.js
            if (!xmlDoc)
                return;

            var itemTags = xmlDoc.getElementsByTagName ("item");
            var firstItemAttrs = itemTags[0].attributes;
            if (firstItemAttrs.getNamedItemNS) {
                var colorAttr = firstItemAttrs.getNamedItemNS ("http://help.dottoro.com/NS", "color");
                alert ("the value of the color attribute is " + colorAttr.value);
            }
            else {
                alert ("Your browser doesn't support the getNamedItemNS method.");
            }
        }