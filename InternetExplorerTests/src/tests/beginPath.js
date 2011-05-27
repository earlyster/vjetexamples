    var canvas = document.getElementById("demo") //<< HTMLCanvasElement
            var ctx = canvas.getContext('2d');        
            ctx.beginPath();              
            ctx.lineWidth="3";
            ctx.strokeStyle="blue";  // This path is blue.
            ctx.moveTo(0,0);
            ctx.lineTo(150,150);
            ctx.lineTo(200,150);
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle="red";   // This path is red.
            ctx.moveTo(0,0);
            ctx.lineTo(50,150);            
            ctx.stroke();           // Draw it.            