 var canvas = document.getElementById("MyCanvas");
    if (canvas.getContext){
      //get a context       
      var ctx = canvas.getContext("2d");
      //create a gradient object
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      // Add the colors with fixed stops at 1/4 of the width.
      gradient.addColorStop("0","magenta");
      gradient.addColorStop(".25","blue");
      gradient.addColorStop(".50","green");
      gradient.addColorStop(".75","yellow");
      gradient.addColorStop("1.0","red");      
      // Use the gradient as a fill pattern
      ctx.fillStyle = gradient;
      ctx.fillRect (0,0,300,250);  
      ctx.fillStyle = "blue";
      ctx.fillRect(250,300,600,500);
    }