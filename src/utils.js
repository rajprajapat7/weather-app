export const getWeatherData = (city) => {
  return fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "your-key",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
    console.error(err);
    throw "Error" + err;
  })
};

export const getIcon = (iconcode) => {
  return `http://openweathermap.org/img/w/${iconcode}.png`
};

export const KtoC = (val) => (val - 273.15).toFixed(2);

export const stampToTime = (stamp) => {
  const numStamp = Number(stamp);
  const theDate = new Date(numStamp * 1000);
  return theDate.toDateString() + " " + theDate.toLocaleTimeString();
};
