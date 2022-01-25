import styles from './WeatherDataBox.module.css'
import React, { useContext  } from 'react'
import { WeatherContext } from '../../../store/weather-context'
import WeatherDetailBox from './WeatherDetailBox'
import {
    WiDayThunderstorm, 
    WiDayRainMix, 
    WiRain, 
    WiSnow, 
    WiDaySunny, 
    WiCloudy,
    WiFog,
    WiSmoke,
    WiDayHaze,
    WiDust,
    WiSandstorm,
    WiTornado} from 'weather-icons-react'

const WeatherDataBox = () => {
    let icon;
    const weatherCtx = useContext(WeatherContext);

    const atmosphereIcons = () => {
        if ((weatherCtx.id === 701)) icon=<WiFog size={384} /> // Mist
        if ((weatherCtx.id === 711)) icon=<WiSmoke size={384} /> // Smoke
        if ((weatherCtx.id === 721)) icon=<WiDayHaze size={384} /> // Haze
        if ((weatherCtx.id === 731)) icon=<WiSandstorm size={384} /> // Dust whirls
        if ((weatherCtx.id === 741)) icon=<WiFog size={384} /> // Fog
        if ((weatherCtx.id === 751)) icon=<WiSnow size={384} /> // Sand
        if ((weatherCtx.id === 761)) icon=<WiDust size={384} /> // Dust 
        if ((weatherCtx.id === 762)) icon=<WiDust size={384} /> // Ash
        if ((weatherCtx.id === 771)) icon=<WiFog size={384} /> // Squall
        if ((weatherCtx.id === 781)) icon=<WiTornado size={384} /> // Tornado
    }




    if (weatherCtx.id) {
        if ((weatherCtx.id >= 200) && (weatherCtx.id <= 231)) icon=<WiDayThunderstorm size={384} /> // Thunderstorm
        if ((weatherCtx.id >= 300) && (weatherCtx.id <= 320)) icon=<WiDayRainMix size={384} /> // Drizzle
        if ((weatherCtx.id >= 500) && (weatherCtx.id <= 531)) icon=<WiRain size={384} /> // Rain
        if ((weatherCtx.id >= 600) && (weatherCtx.id <= 632)) icon=<WiSnow size={384} /> // Snow
        atmosphereIcons() // Logic for atmosphere icons 
        if ((weatherCtx.id === 800)) icon=<WiDaySunny size={384} /> // Clear Sky
        if ((weatherCtx.id >= 801) && (weatherCtx.id <= 804)) icon=<WiCloudy size={384} /> // Clouds

    }
    

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