async function getBacon() {
    var apiString="https://baconipsum.com/api/";
    var theUsersParagraphSelection = document.getElementById("numberOfParagraphs").value;
    apiString=apiString + "?type=all-meat&paras=" + theUsersParagraphSelection;

    var response= await fetch(apiString);

    document.getElementById("rawBacon").innerHTML="";
    document.getElementById("cookedBacon").innerHTML="";

    var responseJson=await response.json();

    document.getElementById("rawBacon").innerHTML = JSON.stringify(responseJson);

    for (var paras in responseJson) {
        document.getElementById("cookedBacon").innerHTML += "<p>" + responseJson[paras] + "</p>";
    }

    return true;
}