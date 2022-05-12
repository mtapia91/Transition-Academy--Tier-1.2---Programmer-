function validateANDAdd() {
    //set function (method) variables
    let theNewWord:string = document.forms["myForm"]["newWord"].value;
    //validates that a word was entered
    if (theNewWord==" ") {
        //word was not entered; let user know
        alert ("Please enter a word");
        return false;
    }

    else {
        //word will be added to running list
        if () {
            var tableRef = document.getElementById("thisList1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
        }
        else {
            var tableRef = document.getElementById("thisList2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
        }
        //erase form fields
        document.forms["myForm"]["newWord"].value = " ";
        document.forms["myForm"]["newNumber"].value = " ";
        return true;
        }
    }

function deleteToDoList() {
    //clear table of all rows
    var clearList1 = document.getElementById("thisList1");
    clearList1.innerHTML = " ";
}