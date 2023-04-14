const getGeoData = async (city) => {
  const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`;

  const response = await fetch(URL);
  const data = await response.json();
  const { state } = data[0];

  return state;
};

export { getGeoData }