 var videoElement = document.createElement('video');
 var support = videoElement.canPlayType('video/x-new-fictional-format;codecs="kittens,bunnies"');
 
var audio  = document.createElement("audio"); //<<
var canPlayMP3 = (typeof audio.canPlayType === "function" &&
              audio.canPlayType("audio/mpeg") !== "");