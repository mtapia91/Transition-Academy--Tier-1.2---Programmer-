window.onload = async function () {
    var apiString = "https://movie-quote-api.herokuapp.com/v1/shows/";
    var response= await fetch(apiString);
    var showsList= await response.json();
    // console.log(showsList);

    var slug = document.getElementById("programs");

    showsList.forEach(show => {
        var newOption = new Option(show.name,show.slug);
        slug.add(newOption);
    });

}

async function getQuotes() {
    var apiString="https://movie-quote-api.herokuapp.com/v1/";

    var censored = document.getElementById("censoredornot").value;

    var selectedProgram= document.getElementById("programs");

    apiString=apiString + censored;  //convert user input to string
    console.log (apiString);
    var response= await fetch(apiString);

    var responseJson=await response.json();

    document.getElementById("theQuote").innerHTML = JSON.stringify(responseJson.quote);

    document.getElementById("theRole").innerHTML = JSON.stringify(responseJson.role);

    document.getElementById("theSelection").innerHTML = JSON.stringify(responseJson.show);

    return true;
}


