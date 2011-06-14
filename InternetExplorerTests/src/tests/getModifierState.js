//TODO DOM 3 events

var keyBoardEvt = document.createEvent("KeyboardEvent"); //<< KeyboardEvent
keyBoardEvt.getModifierState("Control"); // TODO make it easier to know which literals can be passed here "Control", "Shift", "Alt", or "Meta"

