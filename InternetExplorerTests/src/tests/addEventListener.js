var divs = document.getElementsByTagName('div');
	for (var i=0; i<divs.length; i++) {
		var d = divs[i];
		var captureEvent = function(){};
		if (d.className == 'container') {
			d.addEventListener('click',captureEvent,false);
			d.addEventListener('click',captureEvent,true);
		}
	}
	