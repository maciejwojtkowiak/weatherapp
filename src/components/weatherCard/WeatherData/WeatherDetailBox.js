import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import styles from './WeatherDetail.module.css'


const WeatherDetailBox = () => {
    const weatherCtx = useContext(WeatherContext)
    return (
        <div className={styles.weatherDetailBox}>
            <p className={styles.description}>{weatherCtx.city.main.temp}</p>
        </div>
    )
}

export default WeatherDetailBox