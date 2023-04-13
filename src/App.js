import React from "react";
import snowBg from "./assets/snow.jpg";
import hotBg from "./assets/sun.jpg";

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${hotBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input 
              type="text" 
              name="city"
              placeholder="Enter City..."
            />
            <button>Search</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>Tampa, FL</h3>
              <img 
                alt="weatherIcon" 
                src="https://openweathermap.org/img/wn/02d@2x.png"
              />
              <h3>Sunny</h3>
            </div>
            <div className="temperature">
              <h1>100 F</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
