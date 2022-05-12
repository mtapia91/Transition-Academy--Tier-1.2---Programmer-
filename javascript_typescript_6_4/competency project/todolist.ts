function validateANDAdd() {
    //set function (method) variables
    let theNewWord:string = document.forms["myForm"]["newWord"].value;
    //validates that a word was entered
    if (theNewWord==" ") {
        //word was not entered; let user know
        alert ("Please enter a word");
        return false;
    }
    //validates that a 1 or a 2 is entered; anything else will give them an alert message
    else if (theNewWord != "") {    
        //1 or 2 were not entered; let user know
        alert ("Please enter 1 or 2");
        document.forms["myForm"]["newNumber"].value = " ";
        let addWord = theNewWord;
        theNewWord = (<HTMLInputElement>(addWord.insertRow(addWord.rows.length))).innerHTML;
        return false;
    }
        //erase form fields
        document.forms["myForm"]["newWord"].value = " ";
        document.forms["myForm"]["newNumber"].value = " ";
        return true;
}

function deleteToDoList() {
    //clear table of all rows
    var clearList1 = document.getElementById("thisList1");
    clearList1.innerHTML = " ";
}