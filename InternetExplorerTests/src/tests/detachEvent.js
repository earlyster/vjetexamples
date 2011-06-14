attachEvent ('onmouseover', Hilite);
attachEvent ('onmouseout', Restore);

function cleanup()
{
   detachEvent ('onmouseover', Hilite);
   detachEvent ('onmouseout', Restore);
}

function Hilite()
{
   if (event.srcElement == element)
   { 
     normalColor = style.color;  
     runtimeStyle.color  = "red";
     runtimeStyle.cursor = "hand";
   }
}

function Restore()
{
   if (event.srcElement == element)
   {
      runtimeStyle.color  = normalColor;
      runtimeStyle.cursor = "";
   }
}