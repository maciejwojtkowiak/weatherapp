import './App.css';
import React from 'react';
import WeatherBox from './components/weatherCard/WeatherBox'
import Background from './components/wrappers/Background';

function App() {
   

  return (
    <React.Fragment>
      
        <Background>
          <WeatherBox />
        </Background>
      
  
    </React.Fragment>
  );
}

export default App;
