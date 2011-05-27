// interesting this shouldn't be seeing the canvas apis
// I think there is a visbility issue here.

function curves()
        {
         var canvas = document.getElementById("canvas");//<< HTMLCanvasElement
 	      if (canvas.getContext) 
          {
 	        var ctx = canvas.getContext("2d");
 	        for(var i=0;i<2;i++)                            // Step through two rows.
            {   
                for(var j=0;j<3;j++)                        // Step through three versions.    
                {
     	        ctx.beginPath();
 	            var x              = 25+j*50;               // The x-coordinate.
 	            var y              = 25+i*50;               // The y-coordinate.
 	            var radius         = 20;                    // The arc radius.
     	        var startAngle     = 0;                     // The starting point on the circle.
        	    var endAngle       = Math.PI+(Math.PI*j)/2; // The end point on the circle.
    	        var anticlockwise  = i%2==0 ? false : true; // The direction of drawing.
 	
    	        ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise); // Create the arc path.
 	            ctx.stroke();                               // Display the work.
 	            }
 	         }
           }
        }// Curves	