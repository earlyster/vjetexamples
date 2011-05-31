var evt = document.createEvent("Event"); //<<
evt.initEvent("custom", true, false);
document.getElementById('target').dispatchEvent(evt); 