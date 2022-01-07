import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeatherContextProvider from './store/weather-context'

ReactDOM.render(
  <WeatherContextProvider>
     <App />,
  </WeatherContextProvider>,
  document.getElementById('root')
);

