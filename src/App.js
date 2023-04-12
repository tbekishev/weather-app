import React from "react";
import snowBg from "./assets/snow.jpg";
import hotBg from "./assets/sun.jpg";

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=tampa&appid=be403a9594cbb867aebad3ecd304f4f1`
  return (
    <div className="App" style={{ backgroundImage: `url(${hotBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section_inputs">
            <input 
              type="text" 
              name="city"
              placeholder="Enter City..."
            />
            <button>Search</button>
          </div>
          <div className="section_temperature">
            <div className="icon">
              <h3>Tampa, FL</h3>
              <img 
                alt="weatherIcon" 
                src="https://openweathermap.org/img/wn/02d@2x.png"
              />
              <h3>Sunny</h3>
            </div>
            <div className="temperature">
              <h3>100F</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
