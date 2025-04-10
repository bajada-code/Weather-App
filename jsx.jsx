import React from 'react';

function WeatherDisplay({ weather }) {
  if (!weather || weather.cod !== 200) {
    return <p>Weather data not available.</p>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
