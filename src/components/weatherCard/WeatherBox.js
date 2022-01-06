import Card from "../wrappers/Card"
import styles from './WeatherBox.module.css'
import WeatherDataBox from "./WeatherDataBox"
import WeatherInputBox from "./WeatherInputBox"

const WeatherBox = (props) => {
    return(
        <Card>
            <div className={styles.weatherBox} >
                <WeatherDataBox />
                <WeatherInputBox/>
                
            </div>
        </Card>
    )
}

export default WeatherBox