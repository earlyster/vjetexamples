 function GetBGColor (button) { //< void fn(HTMLButtonElement)
    // Works in all browsers
    alert (button.style.backgroundColor);

    if (button.style.getPropertyValue) {
        alert (button.style.getPropertyValue ("background-color"));
    } else {
        alert (button.style.getAttribute("backgroundColor"));
    }
}