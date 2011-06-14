 function fillDemo()
      {
var canvas = document.getElementById("demo")
var ctx = canvas.getContext('2d');        
ctx.beginPath();              
ctx.lineWidth="3";
ctx.strokeStyle="blue";  // This path is blue.
ctx.fillStyle="red";    // The fill is red.
ctx.moveTo(0,0);
ctx.lineTo(150,150);
ctx.lineTo(200,150);
ctx.closePath();
ctx.fill();            
ctx.stroke();           // Draw it.                      
}