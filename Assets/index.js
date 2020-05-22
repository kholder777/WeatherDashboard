// Api key
var apiKey = "4f860fe079fa9a65d76c6faf6564181c";

// var apiKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database

// Empty array for cities
var cities = [];
// Temp empty vars POSSIBLY not a good idea to have global. might need to be local vars.
var lonCurrentCity = "";
var latCurrentCity = "";
var city = "Austin";
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
function displayCityInfo(queryURL, type) {
	var city = $(this).attr("#city-name");
	// var city = $(this).attr("data-name");

	console.log(queryURL);

	// Creating an AJAX call for the specific city button being clicked
	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (response) {
		//
		// response stuff here. prob an if/else statement
		console.log(response);
	});
}
// per the function, uses a (keyKEY, value) pair. the value can be a single thing, or an array, ("tho i dont know why you'd like to make it an array." -Antonio)
displayCityInfo(weatherCurrentCityQueryURL, ["windSpeed"]);
displayCityInfo(fiveDayCurrentCityQueryURL);
// displayCityInfo(
// 	"https://api.openweathermap.org/data/2.5/weather?" +
// 		"q=Bujumbura,Burundi&appid=" +
// 		apiKey
// );
