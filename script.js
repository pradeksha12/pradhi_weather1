document.getElementById('get-weather-button').addEventListener('click', function() {
    const apiKey = '941f5357ae0e7d68e8814970b566399a'; // Replace with your OpenWeatherMap API key
    const location = document.getElementById('location-input').value;

    // Make an API request to fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Update the weather information based on the fetched data
            const icon = data.weather[0].icon;
            const temperature = `${(data.main.temp - 273.15).toFixed(2)}°C`;
            const description = data.weather[0].description;

            document.getElementById('weather-icon').textContent = icon;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;

            // Show the weather data section
            document.getElementById('weather-data').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});
