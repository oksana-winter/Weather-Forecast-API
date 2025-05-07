
    const latitude = 46.948;
    const longitude = 7.4474;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&precipitation_unit=mm&timezone=Europe%2FZurich`;

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

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = data.current_weather;
        const description = weatherDescriptions[weather.weathercode] || "Unknown";

        const output = `
Time: ${weather.time}
Temperature: ${weather.temperature}°C
Precipitation: ${weather.precipitation ?? "N/A"} mm
Weather: ${description}
        `.trim();

        document.getElementById('weather-output').textContent = output;
      })
      .catch(error => {
        document.getElementById('weather-output').textContent = 'Error fetching weather data: ' + error;
      });
