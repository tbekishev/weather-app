const getIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (zip, units) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=${units}`;

  const response = await fetch(URL);
  const data = await response.json();
  
  const { 
    weather, 
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, 
    wind: { speed }, 
    sys: { country }, 
    name 
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconUrl: getIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name
  };
};

export { getWeatherData }