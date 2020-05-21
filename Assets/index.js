// Initial array of cities
var cities = ["Houston"];

// displaycityInfo function re-renders the HTML to display the appropriate content
function displaycityInfo() {
	var apiKey = "4f860fe079fa9a65d76c6faf6564181c";
	var city = $(this).attr("#city-name");
	// var city = $(this).attr("data-name");
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
