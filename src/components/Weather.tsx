import { FC } from 'react'
import { IWeather } from '../models'
import styles from './Weather.module.scss'

interface WeatherProps {
	weather: IWeather | null
}

const Weather: FC<WeatherProps> = ({ weather }) => {
	// console.log(weather)

	function converter(temp: number) {
		return temp - 273.15
	}

	return (
		weather && (
			<div className={styles.container}>
				{/* <h3>{new Date(weather.dt).toDateString()}</h3> */}
				<h1>{converter(weather.main.temp).toFixed(0)}&deg;</h1>
				<div className={styles.row}>
					<h2>{weather.name}</h2>
					<div>
						<span>
							{converter(weather.main.temp_min).toFixed(0)}&deg; /
						</span>
						<span>
							{converter(weather.main.temp_max).toFixed(0)}&deg;{' '}
						</span>
						<span>
							Feels like {converter(weather.main.feels_like).toFixed(0)}
							&deg;{' '}
						</span>
					</div>
					<div>
						<p>Humidity: {weather.main.humidity}%</p>
						<p>Preassure: {weather.main.pressure}</p>
						<p>Wind: {weather.wind.speed}k/h</p>
					</div>
				</div>
			</div>
		)
	)
}
export default Weather
