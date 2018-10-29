function onOpen() {
  
  var ui = SpreadsheetApp.getUi(); // class Ui is container bound (ie attached to the individual file)
	ui.createMenu("Index") // new menu for this sheet
	.addItem("Pull New Data", "pullKey") // option 1 is a pull key to get data from the backup sheet
    .addItem("Collect Events", "collect") // option 2 collects all the events
    .addItem("Push Events to QA", "pushKey") // option 3 pushes all events to the Master via a Library
    .addItem("Update", "pushUpdate") // option 4 is a link to a library to enable updates
	.addToUi();
  
  var cat1 = SpreadsheetApp.openById("1PDSr53kxFwWGDk9CdEu3KGu8mysSMxtExj7VRXV13nY"); // finds the iDatabase
  var cat2 = cat1.getSheetByName("Categorization");
  var cat3 = cat2.getRange("A1:z100").getValues(); // gets all the categorizations from iDatabase
  var cat4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Categories");
  cat4.getRange("a1:z100").setValues(cat3);
	
}

function pullKey() {
  
  pull.iPull();
}


function collect() {
  
  coll.collect();
}

  
function pushKey() {
  
  push.push();
}



function pushUpdate() {
 
  upd.myUpdates();
 
}
