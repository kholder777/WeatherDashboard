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
	}).then(function (response) {
		// Creating a div to hold the city
		var cityDiv = $("<div class='city'>");

		// Storing the rating data
		var rating = response.Rated;

		// Creating an element to have the rating displayed
		var pOne = $("<p>").text("Rating: " + rating);

		// Displaying the rating
		cityDiv.append(pOne);

		// Storing the release year
		var released = response.Released;

		// Creating an element to hold the release year
		var pTwo = $("<p>").text("Released: " + released);

		// Displaying the release year
		cityDiv.append(pTwo);

		// Storing the plot
		var plot = response.Plot;

		// Creating an element to hold the plot
		var pThree = $("<p>").text("Plot: " + plot);

		// Appending the plot
		cityDiv.append(pThree);

		// Retrieving the URL for the image
		var imgURL = response.Poster;

		// Creating an element to hold the image
		var image = $("<img>").attr("src", imgURL);

		// Appending the image
		cityDiv.append(image);

		// Putting the entire city above the previous cities
		$("#cities-view").prepend(cityDiv);
	});
}

// Function for displaying city data
function renderButtons() {
	// Deleting the cities prior to adding new cities
	// (this is necessary otherwise you will have repeat buttons)
	$("#buttons-view").empty();

	// Looping through the array of cities
	for (var i = 0; i < cities.length; i++) {
		// Then dynamicaly generating buttons for each city in the array
		// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		var a = $("<button>");
		// Adding a class of city-btn to our button
		a.addClass("city-btn");
		// Adding a data-attribute
		a.attr("data-name", cities[i]);
		// Providing the initial button text
		a.text(cities[i]);
		// Adding the button to the buttons-view div
		$("#buttons-view").append(a);
	}
}

// This function handles events where a city button is clicked
$("#add-city").on("click", function (event) {
	event.preventDefault();
	// This line grabs the input from the textbox
	var city = $("#city-input").val().trim();

	// Adding city from the textbox to our array
	cities.push(city);

	// Calling renderButtons which handles the processing of our city array
	renderButtons();
});

// Adding a click event listener to all elements with a class of "city-btn"
$(document).on("click", ".city-btn", displaycityInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();

// 		// Transfer content to HTML
// 		$(".city").html("<h1>" + response.name + " Weather Details</h1>");
// 		$(".wind").text("Wind Speed: " + response.wind.speed);
// 		$(".humidity").text("Humidity: " + response.main.humidity);

// 		// Convert the temp to fahrenheit
// 		var tempF = (response.main.temp - 273.15) * 1.8 + 32;

// 		// add temp content to html
// 		$(".temp").text("Temperature (K) " + response.main.temp);
// 		$(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// 		// Log the data in the console as well
// 		console.log("Wind Speed: " + response.wind.speed);
// 		console.log("Humidity: " + response.main.humidity);
//         console.log("Temperature (F): " + tempF);

// 	});
// }
