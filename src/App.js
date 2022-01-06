import './App.css';
import React from 'react';
import WeatherBox from './components/weatherCard/WeatherBox'

function App() {
  const api_key = '5fc53b4163498db65d6329e64f584aea'
  const city = 'London'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=${api_key}`).then(res => res.json()).then(data => console.log(data))
  
   

  return (
    <React.Fragment>
      <WeatherBox />
    </React.Fragment>
  );
}

export default App;
