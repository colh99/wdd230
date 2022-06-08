let temperature = document.getElementById('temperature').innerHTML;
let windSpeed = document.getElementById('wind-speed').innerHTML;

if (temperature <= 50 && windSpeed >= 3) {
    windChill = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed ** 0.16) + (0.4275 * temperature * windSpeed ** 0.16);
    document.getElementById('wind-chill').innerHTML = `${windChill.toFixed(1)}°F`;
} else {
    document.getElementById('wind-chill').innerHTML = 'N/A';
}

