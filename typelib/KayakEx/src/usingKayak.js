var kayakTrip = kayak.launch({
	firstName: 'Joe'
	,lastName: 'Kayaker'
		
});

var kayakTrip = kayak.launch({
	firstName: 'Joe'
	,lastName: 'Kayaker'
	,launchLog: [new Date()]	
},true);

kayak.paddleForward(30);
kayak.paddleForward(40);
kayak.paddleBackward(50);
kayak.setDestination({latitude: 10, longitude: 30});
kayak.stopPaddling();
kayak.addEventListener( "paddleForward", function(event){
	if (event.duration>30) {
		alert("good job!")
	}
});