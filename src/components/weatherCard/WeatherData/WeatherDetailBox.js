import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import styles from './WeatherDetail.module.css'



const WeatherDetailBox = () => {
    const weatherCtx = useContext(WeatherContext)
    
    return (
        <div className={styles.weatherDetailBox}>
            <div>
                <label>temp</label>
                <p className={styles.description}>{weatherCtx.city.main.temp}°C</p>
            </div>
            <div>
                <label>pressure</label>
                <p className={styles.description}>{weatherCtx.city.main.pressure}<span className={styles.span}>hPa</span></p>
            </div>
            <div>
                <label>wind</label>
                <p className={styles.description}>{weatherCtx.city.wind.speed}<span className={styles.span}>m/s</span></p>
            </div>
            <div>
                <label>Feels like</label>
                <p className={styles.description}>{weatherCtx.city.main.feels_like}°C</p>
            </div>
            <div>
                <label>temp_max</label>
                <p className={styles.description}>{weatherCtx.city.main.temp_max}°C</p>
            </div>
            <div>
                <label>temp_min</label>
                <p className={styles.description}>{weatherCtx.city.main.temp_min}°C</p>
            </div>
        </div>
    )
}

export default WeatherDetailBox