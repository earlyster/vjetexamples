        function TestPlacement () {
            var boldText = document.getElementById ("boldText");

            if (document.body.createTextRange) {            // Internet Explorer
                var boldRange = document.body.createTextRange ();
                boldRange.moveToElementText (boldText);

                var selRange = document.selection.createRange ();
                if (selRange.compareEndPoints ("EndToStart", boldRange) <= 0) {
                    alert ("The selection is before the bold text.");
                }
                else {
                    if (selRange.compareEndPoints ("StartToEnd", boldRange) >= 0) {
                        alert ("The selection is after the bold text.");
                    }
                    else {
                        var startPoints = selRange.compareEndPoints ("StartToStart", boldRange);
                        var endPoints = selRange.compareEndPoints ("EndToEnd", boldRange);

                        if (startPoints < 0) {
                            if (endPoints < 0) {
                                alert ("The selection is before the bold text but intersects it.");
                            }
                            else {
                                alert ("The selection contains the bold text.");
                            }
                        }
                        else {
                            if (endPoints > 0) {
                                alert ("The selection is after the bold text but intersects it.");
                            }
                            else {
                                if (startPoints == 0 && endPoints == 0) {
                                    alert ("The selected text and the bold text are the same.");
                                }
                                else {
                                    alert ("The selection is inside the bold text.");
                                }
                            }
                        }
                    }
                }
            }
            else {
                alert ("Your browser does not support this example!");
            }
        }