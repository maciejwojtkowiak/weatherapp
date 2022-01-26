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
    let ICON_SIZE = 256
    let VIEWBOX = "5 5 20 20"
    const weatherCtx = useContext(WeatherContext);

    const atmosphereIcons = () => {
        if ((weatherCtx.id === 701)) icon=<WiFog viewbox={VIEWBOX} size={ICON_SIZE} /> // Mist
        if ((weatherCtx.id === 711)) icon=<WiSmoke viewBox={VIEWBOX} size={ICON_SIZE} /> // Smoke
        if ((weatherCtx.id === 721)) icon=<WiDayHaze viewBox={VIEWBOX} size={ICON_SIZE} /> // Haze
        if ((weatherCtx.id === 731)) icon=<WiSandstorm viewBox={VIEWBOX} size={ICON_SIZE} /> // Dust whirls
        if ((weatherCtx.id === 741)) icon=<WiFog viewBox={VIEWBOX} size={ICON_SIZE} /> // Fog
        if ((weatherCtx.id === 751)) icon=<WiSnow viewBox={VIEWBOX} size={ICON_SIZE} /> // Sand
        if ((weatherCtx.id === 761)) icon=<WiDust viewBox={VIEWBOX} size={ICON_SIZE} /> // Dust 
        if ((weatherCtx.id === 762)) icon=<WiDust viewBox={VIEWBOX} size={ICON_SIZE} /> // Ash
        if ((weatherCtx.id === 771)) icon=<WiFog viewBox={VIEWBOX} size={ICON_SIZE} /> // Squall
        if ((weatherCtx.id === 781)) icon=<WiTornado viewBox={VIEWBOX} size={ICON_SIZE} /> // Tornado
    }




    if (weatherCtx.id) {
        if ((weatherCtx.id >= 200) && (weatherCtx.id <= 231)) icon=<WiDayThunderstorm viewBox={VIEWBOX} size={ICON_SIZE} /> // Thunderstorm
        if ((weatherCtx.id >= 300) && (weatherCtx.id <= 320)) icon=<WiDayRainMix viewBox={VIEWBOX} size={ICON_SIZE} /> // Drizzle
        if ((weatherCtx.id >= 500) && (weatherCtx.id <= 531)) icon=<WiRain viewBox={VIEWBOX} size={ICON_SIZE} /> // Rain
        if ((weatherCtx.id >= 600) && (weatherCtx.id <= 632)) icon=<WiSnow viewBox={VIEWBOX} size={ICON_SIZE} /> // Snow
        atmosphereIcons() // Logic for atmosphere icons 
        if ((weatherCtx.id === 800)) icon=<WiDaySunny size={ICON_SIZE} /> // Clear Sky
        if ((weatherCtx.id >= 801) && (weatherCtx.id <= 804)) icon=<WiCloudy viewBox={VIEWBOX}  size={ICON_SIZE}  /> // Clouds

    }

    let content;

    if (weatherCtx.error) {
        content = "City not found, try again."
    }

   
    

    return(
        <React.Fragment>
            {weatherCtx.error && <div className={styles.error}>{content}</div>}
            { weatherCtx.city && !weatherCtx.error && 
                <div className={styles.weatherDataBox}>
                    <div className={styles.icon} >{icon}</div>
                    <p className={styles.description}>{weatherCtx.city.name}</p>
                    <p className={styles.description}>{weatherCtx.city.weather[0].main}</p>
                    <WeatherDetailBox />
                </div>
            }

             {!weatherCtx.city && <div className={styles.weatherDataBox}><p></p></div>}
        </React.Fragment>
        
    )
}

export default WeatherDataBox