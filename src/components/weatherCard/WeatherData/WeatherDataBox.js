import styles from './WeatherDataBox.module.css'
import React, { useContext  } from 'react'
import { WeatherContext } from '../../../store/weather-context'
import WeatherDetailBox from './WeatherDetailBox'
const WeatherDataBox = (props) => {
    const weatherCtx = useContext(WeatherContext)
    return(
        <React.Fragment>
            { weatherCtx.city && 
            <div className={styles.weatherDataBox}>
                <img alt="weather icon" className={styles.weatherIcon}  src= {`http://openweathermap.org/img/wn/${weatherCtx.city.weather[0].icon}.png `}/>
                <p className={styles.description}>{weatherCtx.city.name}</p>
                <p className={styles.description}>{weatherCtx.city.weather[0].description}</p>
                <WeatherDetailBox />
            </div>}
             {!weatherCtx.city && <div className={styles.weatherDataBox}><p></p></div>}
        </React.Fragment>
        
    )
}

export default WeatherDataBox