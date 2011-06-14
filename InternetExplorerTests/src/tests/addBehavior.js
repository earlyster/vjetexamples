var collBehaviorID = new Array();
var collLI = new Array ();
var countLI = 0;

function attachBehavior()
{
   collLI = document.all.tags ("LI");
   countLI = collLI.length;
    for (var i=0; i < countLI; i++)
	{
	   var iID = collLI[i].addBehavior ("hilite.htc");
	
       if (iID)	
          collBehaviorID[i] = iID;
    }
}