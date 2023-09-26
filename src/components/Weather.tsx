import { FC } from 'react'
import { IWeather } from '../models'

interface WeatherProps {
	weather: IWeather | null
}

const Weather: FC<WeatherProps> = ({ weather }) => {
	// console.log(weather)

	// const location = weather.name
	// const { temp, temp_min, temp_max, feels_like, humidity, pressure } =
	// 	weather.main

	return (
		weather && (
			<div>
				<h1>{weather.main.temp.toFixed(0)}&deg;</h1>
				<h2>{weather.name}</h2>
				<div>
					<span>{weather.main.temp_min.toFixed(0)}&deg; /</span>
					<span>{weather.main.temp_max.toFixed(0)}&deg; </span>
					<span>
						Feels like {weather.main.feels_like.toFixed(0)}&deg;{' '}
					</span>
				</div>
				<div>
					<p>Humidity: {weather.main.humidity}%</p>
					<p>Preassure: {weather.main.pressure}</p>
					<p>Wind: {weather.wind.speed}k/h</p>
				</div>
			</div>
		)
	)
}
export default Weather
