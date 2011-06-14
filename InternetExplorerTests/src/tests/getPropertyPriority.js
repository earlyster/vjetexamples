
    var sheet = document.styleSheets[0];
    var rules = sheet.cssRules ? sheet.cssRules : sheet.rules;
   
// TODO this should not have error undefined multiple type linking issue for field expressions    
var rule = rules[0]; //<<

    if (rule.style.getPropertyPriority) {
        var priority = rule.style.getPropertyPriority ("width");
        alert (priority);
    }
    else {      // Internet Explorer before version 9
        alert ("Your browser does not support this example!");
    }
