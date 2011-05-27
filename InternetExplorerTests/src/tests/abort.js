// 1. Create XDR object 
xdr = new XDomainRequest(); 

// 2. Open connection with server using POST method
xdr.open("POST", "http://www.contoso.com/xdr.txt");

// 3. Send string data to server
xdr.send("data to be processed");   

// 4. abort
xdr.abort(); 

