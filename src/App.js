import React, { useEffect, useState } from "react";
import cloudBg from "./assets/clouds.jpg";
import Details from "./components/Details";
import { getWeatherData } from "./helpers/weatherApi";
import { getBackgroundImage } from "./helpers/backgroundImages";

function App() {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const [zip, setZip] = useState('33607');
  const [bg, setBg] = useState(cloudBg);

  // Fetch weather data and background image on initial load and on change of units or zip code
  useEffect(() => {
    async function weatherData() {
      try {
        const data = await getWeatherData(zip, units);
        setWeather(data);
        const bgImage = getBackgroundImage(data.description);
        setBg(bgImage);
      } catch (error) {
        setWeather(null);
        setBg(cloudBg);
      }
    }    
    weatherData();
  }, [units, zip]);

  // Toggle between metric and imperial units
  const toggleUnits = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentUnit === 'C';
    button.innerText = isCelcius ? '°F' : '°C';
    setUnits(isCelcius ? 'metric' : 'imperial');
  };

  // Handle form submission for zip code
  const handleSubmit = (e) => {
    e.preventDefault();
    setZip(e.target.elements.zip.value);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        { weather ? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="section section__inputs">
              <input 
                type="text" 
                name="zip"
                placeholder="Enter zip code..."
              />
              <button>Search</button>
            </div>
          </form>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country} ${zip}`}</h3>
              <img 
                alt="weatherIcon" 
                src={weather.iconUrl}
              />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{weather.temp.toFixed()} °{units === 'metric' ? 'C': 'F'}</h1>
            </div>
            <button onClick={(e) => toggleUnits(e)}>°C</button>

          </div>
          <Details 
            weather={weather}
            units={units}
          />
        </div>
        ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="section section__inputs">
              <input 
                type="text" 
                name="zip"
                placeholder="Enter zip code..."
              />
              <button>Search</button>
            </div>
          </form>
          <div className="section section__error">
            <p>Invalid zip code. Please try again.</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
