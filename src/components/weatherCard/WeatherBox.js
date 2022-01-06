import Card from "../wrappers/Card"
import styles from './WeatherBox.module.css'

const WeatherBox = () => {
    return(
        <Card>
            <div className={styles.weatherBox} >
                <div className={styles.weatherDataBox}>

                </div>
                <div className={styles.weatherInputBox}>

                </div>
            </div>
        </Card>
    )
}

export default WeatherBox