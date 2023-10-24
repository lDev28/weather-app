import { FC } from 'react'
import { IWeather } from '../models'
import styles from './Weather.module.scss'
import { WiHumidity } from 'react-icons/wi'
import { BsWind, BsSpeedometer2 } from 'react-icons/bs'

interface WeatherProps {
	weather: IWeather | null
}

const Weather: FC<WeatherProps> = ({ weather }) => {
	// console.log(weather)

	function dateconverter(d: number): any {
		const date = new Date(d * 1000)

		let hours = date.getHours()

		const minutes = '0' + date.getMinutes()

		// const seconds = '0' + date.getSeconds()

		const formattedTime = hours + ':' + minutes.substr(-2)
		// + ':' + seconds.substr(-2)

		return formattedTime
	}

	function tempconverter(temp: number) {
		return temp - 273.15
	}

	return (
		weather && (
			<div className={styles.Elemcontainer}>
				<h3>{dateconverter(weather.dt)}</h3>
				<h1>{tempconverter(weather.main.temp).toFixed(0)}&deg;</h1>
				<div className={styles.row}>
					<h2>{weather.name}</h2>
					<div>
						{/* <span>
							{tempconverter(weather.main.temp_min).toFixed(0)}&deg; /
						</span>
						<span>
							{tempconverter(weather.main.temp_max).toFixed(0)}&deg;{' '}
						</span> */}
						<span>
							Feels like{' '}
							{tempconverter(weather.main.feels_like).toFixed(0)}
							&deg;{' '}
						</span>
					</div>
					<div>
						<p>
							<WiHumidity className={styles.Icon} />{' '}
							{weather.main.humidity}%
						</p>
						<p>
							<BsSpeedometer2 className={styles.Icon} />{' '}
							{weather.main.pressure}
						</p>
						<p>
							<BsWind className={styles.Icon} /> {weather.wind.speed}k/h
						</p>
					</div>
				</div>
			</div>
		)
	)
}
export default Weather
