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


/* window.onload = async function () {
    var apiString = "https://movie-quote-api.herokuapp.com/v1/shows/";
    var response= await fetch(apiString);
    var showsList= await response.json();
    // console.log(showsList);

    var slug = document.getElementById("showslug");

    showsList.forEach(show => {
        var newOption = new Option(show.name,show.slug);
        slug.add(newOption);
    });

}

async function getMovieOrShow() {
    var apiString="https://movie-quote-api.herokuapp.com/v1/";
    var response= await fetch(apiString);
    var showsList= await response.json();
    var shows = ["mindhunter", "true-detective", "soprano", "the-wire", "sillicon-valley", "the-office", "space-force", "fargo", "fargo-s04", "fargo-s03", "ozark", "lucifer"]
    var slug = document.getElementById("slug");

    var typeSelected = document.getElementById("movieorshow");

    if (typeSelected = "show")

    showsList.forEach(show => {
        var newOption = new Option(show.name,show.slug);
        slug.add(newOption);
    });    


    apiString=apiString + censored;  //convert user input to string
    console.log (apiString);
    var response= await fetch(apiString);

    var responseJson=await response.json();
}

async function loadDropDown() {
    var apiString = "https://movie-quote-api.herokuapp.com/v1/shows/";
    var response= await fetch(apiString);
    var showsList= await response.json();

    var slug = document.getElementById("showslug");

    showsList.forEach(show => {
        var newOption = new Option(show.name,show.slug);
        slug.add(newOption);
    });
}
async function getQuote() {
    var apiString="https://movie-quote-api.herokuapp.com/v1/shows/";
    
    var slug = document.getElementById("showslug").value;

    apiString=apiString + slug;  //convert user input to string
    console.log (apiString);
    var response= await fetch(apiString);

    var responseJson=await response.json();

    document.getElementById("theQuote").innerHTML = JSON.stringify(responseJson.quote);

    document.getElementById("theRole").innerHTML = JSON.stringify(responseJson.role);
    
    document.getElementById("theSelection").innerHTML = JSON.stringify(responseJson.show);

    return true;
} */