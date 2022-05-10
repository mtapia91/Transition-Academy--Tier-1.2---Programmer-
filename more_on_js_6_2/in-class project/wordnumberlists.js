function validateANDAdd() {
    //set function (method) variables
    var theNewWord=document.forms["myForm"]["newWord"].value;
    var theNewNumber=document.forms["myForm"]["newNumber"].value;
    //validates that a word was entered
    if (theNewWord==" ") {
        //word was not entered; let user know
        alert ("Please enter a word");
        return false;
    }
    //validates that a 1 or a 2 is entered; anything else will give them an alert message
    else if ((theNewNumber != 1) && (theNewNumber != 2)) {
        //1 or 2 were not entered; let user know
        alert ("Please enter 1 or 2");
        document.forms["myForm"]["newNumber"].value = " ";
        return false;
    }
    else {
        //when a word and 1 or 2 are submitted
        //it will then add word entry to its corresponding list
        if (theNewNumber==1) {
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

    function deleteList1() {
        //clear table of all rows
        var clearList1 = document.getElementById("thisList1");
        clearList1.innerHTML = " ";
    }
    
    function deleteList2() {
        //clear table of all rows
        var clearList2 = document.getElementById("thisList2");
        clearList2.innerHTML = " ";
    }