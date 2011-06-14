// Get the text field that we're going to track
 var field = document.getElementById("field");
 
 // See if we have an autosave value
 // (this will only happen if the page is accidentally refreshed)
 if ( sessionStorage.getItem("autosave")) {
     // Restore the contents of the text field
     field.value = sessionStorage.getItem("autosave");
 }
 
 // Check the contents of the text field every second
 setInterval(function(){
     // And save the results into the session storage object
     sessionStorage.setItem("autosave", field.value);
 }, 1000);
 
 
localStorage.getItem("autosave");
 