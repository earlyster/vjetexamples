   function ChangeRedColor () {
            var linkTag = document.getElementById ("myLink"); //<< HTMLLinkElement

                // the imported style sheet
            var importedSheet = linkTag.sheet ? linkTag.sheet : linkTag.styleSheet;
    
            
                // the first rule in the style sheet
            var rules = importedSheet.cssRules ? importedSheet.cssRules : importedSheet.rules;
            var firstRule = rules[0];

                // change the color
            firstRule.style.color = "#00ff00";
        }