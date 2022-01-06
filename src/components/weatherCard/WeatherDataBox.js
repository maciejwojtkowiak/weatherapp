import styles from './WeatherDataBox.module.css'
import React, { useContext  } from 'react'
import { WeatherContext } from '../../store/weather-context'
const WeatherDataBox = (props) => {
    const weatherCtx = useContext(WeatherContext)
    const isClicked = true
    return(
        <React.Fragment>
            { weatherCtx.city && 
            <div className={styles.weatherDataBox}>
                <img src= {`http://openweathermap.org/img/wn/${weatherCtx.city.weather[0].icon}.png `}/>
                <p>{weatherCtx.city.id}</p>
            </div>}
             {!weatherCtx.city && <div className={styles.weatherDataBox}><p></p></div>}
        </React.Fragment>
        
    )
}

export default WeatherDataBox