async function loadTemperature() {
    const output = document.getElementById('output');
  
    try {
      const response = await fetch(
        'https://aareguru.existenz.ch/v2018/today?city=bern&app=my.aare.app&version=1.0'
      );
  
      if (!response.ok) {
        throw new Error('API Error: ' + response.status);
      }
  
      const data = await response.json();
      const temp = data?.aare;
  
      if (typeof temp !== 'number') {
        throw new Error('Temperature data is missing or invalid');
      }
  
      let message = '';
      if (temp > 20) message = '🔥 Perfect for swimming!';
      else if (temp > 15) message = '🌤 Cool but nice.';
      else if (temp > 10) message = '🥶 Only for the brave!';
      else message = '❄️ Ice cold water!';
  
      // Optional: include text_short if available
      const comment = data?.text_short ? `<div class="comment">💬 ${data.text_short}</div>` : '';
  
      output.innerHTML = `
        <div class="temperature">${temp.toFixed(1)}°C</div>
        <div class="status">${message}</div>
        ${comment}
      `;
      output.classList.remove('loading');
  
    } catch (error) {
      output.innerHTML = '<div class="error">Failed to load: ' + error.message + '</div>';
      console.error('Error fetching temperature:', error);
    }
  }
  
  // Load immediately
  loadTemperature();
  
  // Repeat every 5 minutes (300000 ms)
  setInterval(loadTemperature, 300000);
  