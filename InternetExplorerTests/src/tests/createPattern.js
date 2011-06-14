function draw(direction)
{
  var canvas = document.getElementById("MyCanvas");
  if (canvas.getContext) 
     {
      var ctx = canvas.getContext("2d");                // Get the context.
      ctx.clearRect(0,0,canvas.width,canvas.height);    // Clear the last image if it exists.
      var image = document.getElementById("pix");       // Get the address of the picture.
      var pattern = ctx.createPattern(image, direction);// Get the direction from the button.    
      ctx.fillStyle = pattern;                          // Assign pattern as a fill style.
      ctx.fillRect(0,0,canvas.width,canvas.height);     // Fill the canvas.   
    }  
}