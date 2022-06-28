// Message Banner
// Only display message banner on Monday or Tuesday
dayOfWeek = todaysdate.getDay();
messageBanner = document.getElementById("message-banner");

if (dayOfWeek == 1 || dayOfWeek == 2) {
    messageBanner.style.display = "block";
}

// Weather
// Select HTML elements to edit
const temperature = document.getElementById('temperature');
const windSpeed = document.getElementById('wind-speed');
const weatherImage = document.getElementById('weather-image');
const weatherCondition = document.getElementById('weather-condition');

// Assemble url 
const base_url = "https://api.openweathermap.org/data/2.5/weather";
const city_name = "Santiago";
const state_code = "RM";
const country_code = "CL";
const appid = "f2de38b59fa3ab7886f1e42ef1440d98";
const units = "imperial";

const url = `${base_url}?q=${city_name},${state_code},${country_code},&appid=${appid}&units=${units}`;

// Fetch!
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    
    // Weather Icon
    const base_image_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    weatherImage.setAttribute('src', base_image_url);
    weatherImage.setAttribute('alt', data.weather[0].description);
    
    // Temperature
    const temperatureData = data["main"]["temp"];
    temperature.textContent = Math.round(temperatureData);
    
    // Condition
    weatherCondition.textContent = data.weather[0].description;
    
    // Windspeed
    const windSpeedData = data["wind"]["speed"];
    windSpeed.textContent = windSpeedData;

    // Windchill
    if (temperatureData <= 50 && windSpeedData >= 3) {
        windChill = 35.74 + (0.6215 * temperatureData) - (35.75 * windSpeedData ** 0.16) + (0.4275 * temperatureData * windSpeedData ** 0.16);
        document.getElementById('wind-chill').textContent = `${windChill.toFixed(1)}°F`;
    } else {
        document.getElementById('wind-chill').textContent = 'N/A';
    }
});



