var button = document.getElementById("mybutton"); //<<HTMLButtonElement
if (window.getComputedStyle) {
	var compStyle = window.getComputedStyle (button, "");
}