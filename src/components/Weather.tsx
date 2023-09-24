import { IWeather } from '../models'

interface WeatherProps {
	weather: IWeather
}

const Weather = ({ weather }: WeatherProps) => {
	// console.log(weather)
	const location = weather.name
	const { temp, temp_min, temp_max, feels_like, humidity, pressure } =
		weather.main

	return (
		<div>
			<h1>{temp}&deg;</h1>
			<h2>{location}</h2>
			<div>
				<span>{temp_min}&deg; /</span>
				<span>{temp_max}&deg; </span>
				<span>Feels like {feels_like}&deg; </span>
			</div>
			<div>
				<p>Humidity: {humidity}%</p>
				<p>Preassure: {pressure}</p>
				<p>Wind: {weather.wind.speed}k/h</p>
			</div>
		</div>
	)
}
export default Weather
