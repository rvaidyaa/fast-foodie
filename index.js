//api call
//creating variables to store weather information array

//

var conditions;
var forecast;

$(document).ready(function () {

    apiCall("40.83", "-74.09");
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
    //api call and store to variables
    function weatherInfo(conditions) {
        $.getJSON(conditions, function (data) {
            console.log(data);
            populateWeather(data);
        });
    }


    function apiCall(latValue, longValue) {
        function setHeader(xhr) {
            xhr.setRequestHeader('user-key', '2feb645051247922577a0d2f4a387122');
        }

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
    } // end of api section now populate html

    function populateWeather(data) {
        console.log(data.current_observation.temp_f)
        console.log(skies);
        var temp_f = data.current_observation.temp_f;
        console.log(data.current_observation.display_location.latitude);
        console.log(data.current_observation.display_location.longitude);
        var latValue = data.current_observation.display_location.latitude;
        var longValue = data.current_observation.display_location.longitude;
        var skies = data.current_observation.weather;
        var icon = data.current_observation.icon_url;
        //$('.open-screen').hide();
        $('.weather-results').html(temp_f);

    }
});
