  var canvas = document.getElementById("demo") //<< HTMLCanvasElement
        var ctx = canvas.getContext('2d');        
        // Draw a straight reference line.
        ctx.beginPath();
        ctx.strokeStyle="blue"; 
        ctx.moveTo(100,100);
        ctx.lineTo(300,100);
        ctx.stroke();                
        // Draw a Bézier curve by using the same line cooridinates.
        ctx.beginPath();              
        ctx.lineWidth="3";
        ctx.strokeStyle="black"; 
        ctx.moveTo(100,100);
        ctx.bezierCurveTo(200,200,200,0,300,100);
        ctx.stroke();       