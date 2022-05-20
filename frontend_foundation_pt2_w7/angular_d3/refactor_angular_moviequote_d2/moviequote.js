async function getQuotes() {
    var apiString="https://movie-quote-api.herokuapp.com/v1/quote/";
    //apiString=apiString + "?type=v1&quote=";

    var response= await fetch(apiString);

    var responseJson=await response.json();

    document.getElementById("theQuote").innerHTML = JSON.stringify(responseJson.quote);
    document.getElementById("theShow").innerHTML = JSON.stringify(responseJson.show);
    document.getElementById("theRole").innerHTML = JSON.stringify(responseJson.role);

    return true;
}