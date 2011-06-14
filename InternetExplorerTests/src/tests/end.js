var video = document.getElementById('myVideo') //<< HTMLAudioElement
var ranges = video.played;

for (var i=0; i<ranges.length; i++){
    var start = ranges.start(i);
    var end = ranges.end(i);
    alert("Played from " + start + " to " + end);
}