		var ctx = document.getElementById('foo').getContext('2d');
// Draw the imaginary tangents in blue.
            ctx.beginPath();
            ctx.lineWidth="3";
            ctx.strokeStyle="blue";
            ctx.moveTo(80,100);
            ctx.lineTo(240,100);
            ctx.moveTo(200,60);
            ctx.lineTo(200,220);
            ctx.stroke();           // Draw it.
            
// Create two lines that have a connecting arc that could be used as a start to a rounded rectangle.
			ctx.beginPath();     
            ctx.strokeStyle="black";            
            ctx.lineWidth = "5";
            ctx.moveTo(120, 100);   // Create a starting point.
            ctx.lineTo(180, 100);   // Draw a horizontal line. 
            ctx.arcTo(200, 100, 200, 120, 20); // Create an arc.
            ctx.lineTo(200,180);    // Continue with a vertical line of the rectangle.    
            ctx.stroke();           // Draw it.           

// Use the translate method to move the second example down. 
            ctx.translate(0,220);   // Move all y-coordinates down 220 pixels to see more clearly.

   // Draw the imaginary tangents in blue.            
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.lineWidth="3";
            ctx.moveTo(200,60);
            ctx.lineTo(200,220);            
            ctx.moveTo(220,80);
            ctx.lineTo(120,180);
			ctx.stroke();     

// Create a line, move the last path point to a point below, and then create an arc.
   			ctx.beginPath();        
            ctx.strokeStyle="black";
            ctx.lineWidth = "5";                        
            ctx.moveTo(120, 100);   // Same starting point as above.
            ctx.lineTo(180, 100);   // Same horizontal line as above.
            ctx.moveTo(180,120);    // Move the last path point down 20 pixels.
            ctx.arcTo(200, 100, 200, 120, 20); // Create an arc.
            ctx.lineTo(200,180);    // Continue with a vertical line of the rectangle.                			                       
            ctx.stroke();     