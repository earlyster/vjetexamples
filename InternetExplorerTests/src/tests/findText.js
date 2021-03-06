  var oRange = document.body.createTextRange();
      // record the current position in a bookmark
   var sBookMark = oRange.getBookmark();  
      // true - case-insensitive and partial word match
   oRange.findText('leo');               
      // reset the range using the bookmark
   oRange.moveToBookmark(sBookMark);
      // false - matches whole words only	 
   oRange.findText('engineer', 0, 2);    
   oRange.moveToBookmark(sBookMark);
      // false - case-sensitive
   oRange.findText('high', 0, 4);        
   oRange.moveToBookmark(sBookMark);
      // true - case-sensitive and matches whole words
   oRange.findText('Leonardo', 0, 6);    

      // the degenerate case
   oRange.moveToBookmark(sBookMark);
      // make the range degenerate
   oRange.collapse();
      // false - must specify large character count in this case
   oRange.findText('Leonardo', 0, 6);
      // true - no third parameter passed, so no count needed
   oRange.findText('Leonardo');
      // true - a large count covers the range
   oRange.findText('Leonardo', 1000000000, 6);    