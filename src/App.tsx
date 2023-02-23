import React from 'react';
import axios from 'axios';
import './App.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function App() {
  const [weatherInfo, setWeatherInfo] = React.useState<any>({});
  React.useEffect(() => {
    const url = 'https://goweather.herokuapp.com/weather/Higashiyamato-shi';
    axios.get(url).then((response) => {
      console.log(response.data);
      setWeatherInfo(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1><WbSunnyIcon/>Higashiyamato's Weather<WbSunnyIcon/></h1>
      <h2>Today</h2>
      <p>temperature: {weatherInfo.temperature}</p>
      <p>wind: {weatherInfo.wind}</p>
      <p>description: {weatherInfo.description}</p>
      <h2>Forecast</h2>
      <h3>+1</h3>
      <p>temperature: {weatherInfo.forecast && weatherInfo.forecast[0].temperature}</p>
      <p>wind: {weatherInfo.forecast && weatherInfo.forecast[0].wind}</p>
      <h3>+2</h3>
      <p>temperature: {weatherInfo.forecast && weatherInfo.forecast[1].temperature}</p>
      <p>wind: {weatherInfo.forecast && weatherInfo.forecast[1].wind}</p>
      <h3>+3</h3>
      <p>temperature: {weatherInfo.forecast && weatherInfo.forecast[2].temperature}</p>
      <p>wind: {weatherInfo.forecast && weatherInfo.forecast[2].wind}</p>
    </div>
  );
}

export default App;
