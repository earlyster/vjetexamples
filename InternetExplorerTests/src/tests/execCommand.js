function AddLink()
{
    //identify selected text
    var sText = document.selection.createRange();
    if (sText.text != "")
    {
      //create link
      document.execCommand("CreateLink");
      //change the color to indicate success
      if (sText.parentElement().tagName == "A")
      {
        sText.execCommand("ForeColor",false,"#FF0033");
      }
    }
    else
    {
        alert("Please select some text!");
    }   
}