let theNewWordString : string = document.forms["myForm"]["addToList"].value;
let theNewWord: any;

function validateANDAdd() {
    //set function (method) variables
    if (theNewWord==" ") {
        //word was not entered; let user know
        alert ("Please enter a word");
        return false;
    }
    //adds users entry to list
    else {
       var table: HTMLTableElement = <HTMLTableElement> document.getElementById("runningList");
       var row = table.insertRow(0);
        (table.insertRow(table.rows.length)).innerHTML = theNewWord;
    }
        //erase form fields
        document.forms["myForm"]["newWord"].value = " ";
        document.forms["myForm"]["newNumber"].value = " ";
        return true;
}

function deleteToDoList() {
    //clear table of all rows
    var clearList1 = document.forms["wordList"].value="";
}