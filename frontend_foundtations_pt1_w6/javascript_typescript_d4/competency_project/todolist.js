function validateANDAdd() {
    var theNewWordString = document.forms["addToListForm"]["addToList"].value;
    //set function (method) variables
    if (theNewWordString == " ") {
        //word was not entered; let user know
        alert("Please enter a word");
        return false;
    }
    //adds users entry to list
    else {
        var table = document.getElementById("runningList");
        (table.insertRow(table.rows.length)).innerHTML = theNewWordString;
    }
    //erase form fields
    document.forms["runningList"]["newWord"].value = " ";
    return true;
}
function deleteToDoList() {
    //clear table of all rows
    var clearList1 = document.forms["runningList"].value == " ";
    clearList1;
}
