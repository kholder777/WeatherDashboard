// Api key
var apiKey = "4f860fe079fa9a65d76c6faf6564181c";
// Empty array for cities
var cities = [];
// Temp empty vars POSSIBLY not a good idea to have global. might need to be local vars.
var lonCurrentCity = "";
var latCurrentCity = "";
var city = "";
// UV site: https://openweathermap.org/api/uvi
var uvCurrentCityQueryURL =
	"http://api.openweathermap.org/data/2.5/uvi?appid=" +
	apiKey +
	"&lat=" +
	latCurrentCity +
	"&lon=" +
	lonCurrentCity;
// Current Weather city site: https://openweathermap.org/current
var weatherCurrentCityQueryURL =
	"http://api.openweathermap.org/data/2.5/weather?q=" +
	city +
	"&appid=" +
	apiKey;
// 5day site: https://openweathermap.org/forecast5
var fiveDayCurrentCityQueryURL =
	"http://api.openweathermap.org/data/2.5/forecast?q=" +
	city +
	"&appid=" +
	apiKey;

// displaycityInfo function re-renders the HTML to display the appropriate content
function displaycityInfo() {
	var city = $(this).attr("#city-name");
	// var city = $(this).attr("data-name");

	// -----QUESTION-----can i get rid of this and just put the variable "weatherCurrentCityQueryURL" in its place?
	var queryURL =
		"https://api.openweathermap.org/data/2.5/forecast?q=" +
		city +
		"&appid=" +
		apiKey;
	console.log(queryURL);

	// Creating an AJAX call for the specific city button being clicked
	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (response) {});
}
