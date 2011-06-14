 var canvas = document.getElementById("MyCanvas");
 	if (canvas.getContext) {
 	  var ctx = canvas.getContext("2d");
      gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

  // Add the colors with fixed stops at 1/4 of the width.
      gradient.addColorStop("0","magenta");
      gradient.addColorStop(".25","blue");
      gradient.addColorStop(".50","green");
      gradient.addColorStop(".75","yellow");
      gradient.addColorStop("1.0","red");
      
      // Use the gradient.
      ctx.font = "italic 200 36px/2 Unknown Font, sans-serif"
      ctx.fillStyle = gradient;
      var i;
      for (i=0;i<450; i+=50){
      ctx.fillText("Hello World",i,i);  
      }
    }  