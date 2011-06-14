function clone()
{
  var canvas1 = document.getElementById("MyCanvas");        
  var canvas2 = document.getElementById("YourCanvas");
  if (canvas1.getContext) {
      var ctx = canvas1.getContext("2d");                // Get the context on the first canvas.
      var imageStuff = ctx.getImageData(0,0,canvas1.width,canvas1.height);    // Get image data from the first canvas.
  }
  if (canvas2.getContext) {
      var ctx2 = canvas2.getContext("2d");                // Get the context on the second canvas.
      ctx2.putImageData(imageStuff,0,0);                  // Put image data on the second canvas.
  }   
}