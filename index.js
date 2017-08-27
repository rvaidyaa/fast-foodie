//api call
//creating variables to store weather information array

//

var conditions;
var forecast;

$(document).ready(function () {

    // code for accepting user input of zipcode with error handling
    $('#form').submit(function (event) {
        event.preventDefault();
        var zipCode = $('.user-input').val();
        // check for valid number, also html input type is set to num or number
        if (zipCode.length !== 5) {
            alert('Please enter a valid zipcode');
        } else {

            console.log(zipCode);
            //Returns the current temperature, weather condition, humidity, wind, 'feels like' temperature, barometric pressure, and visibility.
            conditions = 'http://api.wunderground.com/api/9d4257c7e0413f4b/conditions/q/' + zipCode + '.json';
            //Returns a summary of the weather for the next 3 days. This includes high and low temperatures, a string text forecast and the conditions.
            forecast = 'http://api.wunderground.com/api/9d4257c7e0413f4b/forecast/q/' + zipCode + '.json';
            console.log(conditions);
            console.log(forecast);
            weatherInfo(conditions);
        }
    });
    //api call for weather and store to variables
    function weatherInfo(conditions) {
        $.getJSON(conditions, function (data) {
            console.log(data);
            populateWeather(data);
        });
    }

    //api call for Geocode! note they are flipped
    function apiCallEst(latValue, longValue) {
        function setHeader(xhr) {
            xhr.setRequestHeader('user-key', '2feb645051247922577a0d2f4a387122');
        }
        console.log('establishments api');
        $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/geocode?lat=' + latValue + '&lon=' + longValue,
            type: 'GET',
            dataType: 'json',
            success: function (receivedApiData) {
                console.log(receivedApiData);
            },
            error: function () {
                alert('boo!');
            },
            beforeSend: setHeader
        });
    }
    //api call for est (dont need but WHY it no work?)
    function apiCallGeocode(latValue, longValue) {
        function setHeader(xhr) {
            xhr.setRequestHeader('user-key', '2feb645051247922577a0d2f4a387122');
        }
        console.log('GeocodeApi');
        $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/establishments?lat=' + latValue + '&lon=' + longValue,
            type: 'GET',
            dataType: 'json',
            success: function (receivedApiData) {
                console.log(receivedApiData);
            },
            error: function () {
                alert('boo!');
            },
            beforeSend: setHeader
        });
    }




    // end of api section now populate html

    function populateWeather(data) {
        console.log(data.current_observation.temp_f)
        var temp_f = data.current_observation.temp_f;
        var latValue = Math.round(data.current_observation.display_location.latitude * 100) / 100;
        var longValue = Math.round(data.current_observation.display_location.longitude * 100) / 100;
        console.log(latValue, longValue);
        var skies = data.current_observation.weather;
        var icon = data.current_observation.icon_url;
        console.log(skies);
        //$('.open-screen').hide();
        $('.weather-results').html(temp_f);
        apiCallEst(latValue, longValue);
        apiCallGeocode(latValue, longValue);

    }
});
// description of application function (question)
// user inputs zipcode to get various outputs idea is to have very light interface and functionality, to many of these apps give to many toptions
// (1)media only is main, with first block displaying a image of the weather conditions with temperature under it, as well as city name
// popularity index and nightlife index
// (2)the rest will be a UL populated with the highest rated restaurants in the area and will contain the following
// Restaurant Name
// Cuisine Type
// average cost for 2
// rating out of 5, textual rating, and number of votes total
//thumbnail image for restaurant
//link to zomato site which includes menus and directions and further info
// !!!!(for future use) a feature which is called "take me there" press a button to launch maps with directions
// !!!!eventually functionality for sorting via rating, votes, price etc


// USER STORY:
// know what the application function
// search so and so and get so and so information
// manipulate the information im getting  to some end


// (1)As a user I would want to know what the function of the application is.
// (2)As a user I would want to quickly know what information I would need to input
// (3)As a user after I input my zipcode I want a short list of the top restaurants (for w/e reasons traveling,busy,etc,not to many options).
// (4)As a user I would want a to know the most relevent information first such as cuisine type and dollar cost and name, followed by rating and menu
//-and directions.
// (5)As a user I would want a quick way to get directions to said restaurnt as well as get to menu
// (6)As a user I would like to sort via my priority eg. cuisine type, cost, rating, popularity.

// (1) Via header which includes name of application as well as a brief description
// (2) Below description will be a user input search box  instructing user to enter the zip code
// (3) Create an unsorted list from the results of api call of top 9 restaurants with jpeg img
// (4) The information will be ordered displaying The name as <h1> with cost and cuisine as <h2> and rest as <h3>
// (5) Clickable/touchable button that directs to zomato site with all relevent information
// (6) drop down menu appears under city and weather info to sort via: popularity,rating,type
