import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Weather from './components/Weather'
import { IForecast, IWeather } from './models'
import Forecast from './components/Forecast'

function App() {
	const [weather, setWeather] = useState<IWeather | null>(null)
	const [forecast, setForecast] = useState<IForecast | null>(null)
	const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					})
				},
				(error) => {
					console.error(error)
				}
			)
		} else {
			console.error('Geolocation is not supported by this browser.')
		}
	}

	const key = '0e07264415470b08751eff1403e099c0'
	const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${key}&units=metric`

	const dailyForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&cnt=5&appid=${key}&units=standard`

	async function fetchCurrentData() {
		try {
			const response = await axios.get<IWeather>(currentWeatherURL)
			setWeather(response.data)
		} catch (err) {
			console.error(err)
		}
	}

	async function fetchDailyData() {
		try {
			const response = await axios.get<IForecast>(dailyForecastURL)
			setForecast(response.data)
			console.log(response.data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getLocation()
		fetchCurrentData()
		fetchDailyData()
	}, [])

	return (
		<>
			<Weather weather={weather} />
			<Forecast forecast={forecast} />
		</>
	)
}

export default App
