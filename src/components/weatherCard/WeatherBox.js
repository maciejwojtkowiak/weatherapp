import Background from "../wrappers/Background"
import styles from './WeatherBox.module.css'
import WeatherDataBox from "./WeatherData/WeatherDataBox"
import WeatherInputBox from "./WeatherInput/WeatherInputBox"

const WeatherBox = (props) => {
    return(
        <Background>
            <WeatherInputBox/>
            <div className={styles.weatherBox} >
                
                <WeatherDataBox />
                
                
            </div>
        </Background>
    )
}

export default WeatherBox