import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const CITY = 'Manila';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching weather:', error));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Weather App</h1>
      {loading ? <p>Loading weather...</p> : <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
