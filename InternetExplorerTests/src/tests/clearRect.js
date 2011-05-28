   var canvas = document.getElementById("MyCanvas"); //<< HTMLCanvasElement
 	 if (canvas.getContext) 
     {
 	   var ctx = canvas.getContext("2d");
       // Clear the center 80% of the canvas.
 	   // comes from canvas type library
       ctx.clearRect(canvas.width*.1,canvas.height*.1,canvas.width*.8,canvas.height * .8);
       
       }
     