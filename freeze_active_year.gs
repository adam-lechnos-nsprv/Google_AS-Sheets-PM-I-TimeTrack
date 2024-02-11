function FreezeSheet2021(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2021");
  var range = sheet.getRange("b1:b11");
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] > 0) {
      var cell = range.offset(i, 0, 1, 1);   
      cell.copyTo(cell, {contentsOnly:true});
    }
  }
}