// Coordinates for Bern, Switzerland
const latitude = 46.948;
const longitude = 7.4474;

// Construct the API URL with the given parameters
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&precipitation_unit=mm&timezone=Europe%2FZurich`;

// Mapping of weather codes to emoji descriptions
const weatherDescriptions = {
  0: "☀️ Clear sky",
  1: "🌤️ Mainly clear",
  2: "⛅ Partly cloudy",
  3: "☁️ Overcast",
  45: "🌫️ Fog",
  51: "🌦️ Light drizzle",
  61: "🌧️ Rain",
  71: "❄️ Snow",
  80: "🌧️ Rain showers",
  95: "⛈️ Thunderstorm"
};

// Fetch weather data from the API
fetch(url)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    const weather = data.current_weather; // Extract current weather data
    const description = weatherDescriptions[weather.weathercode] || "Unknown"; // Get description based on weather code

    // Format the weather information for display
    const output = `
Time: ${weather.time}
Temperature: ${weather.temperature}°C
Precipitation: ${weather.precipitation ?? "N/A"} mm
Weather: ${description}
    `.trim();

    // Display the output in the HTML element with ID "weather-output"
    document.getElementById('weather-output').textContent = output;
  })
  .catch(error => {
    // Handle errors by displaying a message
    document.getElementById('weather-output').textContent = 'Error fetching weather data: ' + error;
  });
