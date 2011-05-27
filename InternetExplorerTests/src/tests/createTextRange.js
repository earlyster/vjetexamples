var rng = document.body.createTextRange( );
if (rng!=null) {
    alert(rng.htmlText);
}

var coll = document.all.tags("BUTTON");
if (coll!=null && coll.length>0) {
    var rng = coll[0].createTextRange();
    rng.text = "Clicked";
}

