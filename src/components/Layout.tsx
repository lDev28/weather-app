import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { IForecast, IWeather } from '../models'
import Daily from './Daily'
// import Hourly from './Hourly'
import CurrentTop from './CurrentTop'
import CurrentBottom from './CurrentBottom'

const Layout: React.FC = () => {
	const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
	const [currentForecast, setCurrentForecast] = useState<IWeather | null>(null)
	const [dailyForecast, setDailyForecast] = useState<IForecast | null>(null)
	// const [hourlyForecast, setHourlyForecast] = useState<IForecast | null>(null)

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

	const foreCastConfig = {
		key: '0e07264415470b08751eff1403e099c0',
		units: 'standard'
		// units: 'metric'
	}

	const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${foreCastConfig.key}`

	const dailyForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&cnt=5&appid=${foreCastConfig.key}&units=${foreCastConfig.units}`

	// Fetching
	async function fetchDailyData() {
		try {
			const response = await axios.get<IForecast>(dailyForecastURL)
			setDailyForecast(response.data)
		} catch (err) {
			console.error(err)
		}
	}
	async function fetchCurrentData() {
		try {
			const response = await axios.get<IWeather>(currentWeatherURL)
			// console.log(response.data)
			setCurrentForecast(response.data)
		} catch (err) {
			console.error(err)
		}
	}
	useEffect(() => {
		getLocation()
		fetchCurrentData()
		fetchDailyData()
		// fetchHourlyData()
	}, [])

	return (
		<div>
			<CurrentTop data={currentForecast} />
			<Daily data={dailyForecast} />
			{/* <Hourly data={hourlyForecast} /> */}
			<CurrentBottom data={currentForecast} />
		</div>
	)
}
export default Layout
