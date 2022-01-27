import React from "react"
import styles from './WeatherBox.module.css'
import WeatherDataBox from "./WeatherData/WeatherDataBox"
import WeatherInputBox from "./WeatherInput/WeatherInputBox"

const WeatherBox = (props) => {
    return(
        <React.Fragment>
            <WeatherInputBox/>
            <div className={styles.weatherBox} >
                <WeatherDataBox />
            </div>
        </React.Fragment>
        
    )
}

export default WeatherBox