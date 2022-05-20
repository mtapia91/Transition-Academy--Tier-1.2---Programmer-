async function getQuotes() {
    var apiString="https://movie-quote-api.herokuapp.com/v1/";
    
    var censored = document.getElementById("movieorshowoption").value;

    apiString=apiString + censored;  //convert user input to string
    console.log (apiString);
    var response= await fetch(apiString);

    var responseJson=await response.json();

    document.getElementById("theQuote").innerHTML = JSON.stringify(responseJson.quote);

    document.getElementById("theRole").innerHTML = JSON.stringify(responseJson.role);
    
    document.getElementById("theSelection").innerHTML = JSON.stringify(responseJson.show);

    return true;
}
async function getShowQuote() {
    var apiString="https://movie-quote-api.herokuapp.com/v1/";
    
    var slug = document.getElementById("showslug").value;

    apiString=apiString + slug;  //convert user input to string
    console.log (apiString);
    var response= await fetch(apiString);

    var responseJson=await response.json();

    document.getElementById("theQuote").innerHTML = JSON.stringify(responseJson.quote);

    document.getElementById("theRole").innerHTML = JSON.stringify(responseJson.role);
    
    document.getElementById("theSelection").innerHTML = JSON.stringify(responseJson.show);

    return true;
}