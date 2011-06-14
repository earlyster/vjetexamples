function draw()
{
  var canvas = document.getElementById("MyCanvas");
  if (canvas.getContext) {
 	  var ctx = canvas.getContext("2d");                // Get the context.
      ctx.clearRect(0,0,canvas.width,canvas.height);    // Clear the last image, if it exists.
      var image = document.getElementById("pix");       // Get the address of the picture.
// Straight draw. 
      ctx.drawImage(image,1,1);                         
// Stretch the image a bit.
      ctx.drawImage(image,125,125,200,200);              
// Draw it in pieces.
      ctx.drawImage(image,1,1, image.width/2, image.height/2 , 50,125,50,50);
      ctx.drawImage(image,1, image.height/2, image.width/2, image.height/2 , 50,275,50,50);
      ctx.drawImage(image,image.width/2, 1, image.width/2, image.height/2 , 350,125,50,50);      
      ctx.drawImage(image,image.width/2, image.height/2, image.width/2, image.height/2 , 350,275,50,50);
    }  
}