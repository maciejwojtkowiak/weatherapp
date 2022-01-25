import styles from './WeatherDataBox.module.css'
import React, { useContext  } from 'react'
import { WeatherContext } from '../../../store/weather-context'
import WeatherDetailBox from './WeatherDetailBox'
import {WiCloudy} from 'weather-icons-react'
import useHttp from '../../hooks/use-http'
const WeatherDataBox = (props) => {
    let icon;
    const weatherCtx = useContext(WeatherContext);
    if ((weatherCtx.id > 800) && (weatherCtx.id < 805)) icon=<WiCloudy size={384} />

    return(
        <React.Fragment>
            { weatherCtx.city && 
            <div className={styles.weatherDataBox}>
                {icon}
                <p className={styles.description}>{weatherCtx.city.name}</p>
                <p className={styles.description}>{weatherCtx.city.weather[0].id}</p>
                <WeatherDetailBox />
            </div>}
             {!weatherCtx.city && <div className={styles.weatherDataBox}><p></p></div>}
        </React.Fragment>
        
    )
}

export default WeatherDataBox