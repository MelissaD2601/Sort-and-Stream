//var audience = getElementById("audience");
var G = document.getElementById("G");
var PG = document.getElementById("PG");
var PG13 = document.getElementById("PG-13");
var R = document.getElementById("R");
var NC17 = document.getElementById("NC-17");

var optionG = document.getElementById("G");
var optionPG = document.getElementById("PG");
var optionPG13 = document.getElementById("PG13");
var optionR = document.getElementById("R");
var optionNC17 = document.getElementById("NC17");


//var OMDbAPIKey = "http://www.omdbapi.com/?apikey=4145ebcc";
var OMDbAPIKey = "apikey=4145ebcc";

// The array provided below is used to store the audience(watching with) options

var chooseAudience = function(event) {
    event.preventDefault();
    //var audience = getElementById("audience").value;
    var OMDbAPIUrl = "http://www.omdbapi.com/?" + "apikey=" + OMDbAPIKey;
}