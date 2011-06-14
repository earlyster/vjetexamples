// TODO no getSelection or deleteFromDocument apis 

function deleteSelectedContent() {
        if (window.getSelection){                       //check for a selection
            var selection = window.getSelection(); //<< ;    //get a selection object
            selection.deleteFromDocument();             //remove content            
            }     
        }
        function refresh()                 
        {
          window.location.reload( false );              //reload our page
        }        