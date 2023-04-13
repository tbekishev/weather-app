import React, { useEffect, useState } from "react";
import snowBg from "./assets/snow.jpg";
import hotBg from "./assets/sun.jpg";
import Details from "./components/Details";
import { getWeatherData } from "./weatherApi";

function App() {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() => {

    const weatherData = async() => {
      const data = await getWeatherData('75009', units);
      setWeather(data);
    };

    weatherData();
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${hotBg})`}}>
      <div className="overlay">
        { weather && (
        <div className="container">
          <div className="section section__inputs">
            <input 
              type="text" 
              name="city"
              placeholder="Enter zip code..."
            />
            <button>Search</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img 
                alt="weatherIcon" 
                src={weather.iconUrl}
              />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{weather.temp.toFixed()} °{units === 'metric' ? 'C': 'F'}</h1>
            </div>
          </div>
          <Details 
            weather={weather}
            units={units}
          />
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
