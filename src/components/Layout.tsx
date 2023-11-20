import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { IForecast, IWeather } from '../models'
import Daily from './Daily'
import CurrentTop from './CurrentTop'
import CurrentBottom from './CurrentBottom'
import Input from './UI/Input'

const Layout: React.FC = () => {
	const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
	const [currentForecast, setCurrentForecast] = useState<IWeather | null>(null)
	const [dailyForecast, setDailyForecast] = useState<IForecast | null>(null)
	const [place, setPlace] = useState('')

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
	// console.log(location, dailyForecast)

	// const testURL = `https://api.openweathermap.org/data/2.5/weather?${
	// 	!place ? place : `lat=${location.latitude}&lon=${location.longitude}`
	// }&appid=${foreCastConfig.key}`

	const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${foreCastConfig.key}`

	const dailyForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&cnt=5&appid=${foreCastConfig.key}&units=${foreCastConfig.units}`

	async function fetchDailyData() {
		if (location.latitude !== 0 && location.longitude !== 0) {
			try {
				const response = await axios.get<IForecast>(dailyForecastURL)
				setDailyForecast(response.data)
			} catch (err) {
				console.error(err)
			}
		}
	}
	async function fetchCurrentData() {
		if (location.latitude !== 0 && location.longitude !== 0) {
			try {
				const response = await axios.get<IWeather>(currentWeatherURL)
				setCurrentForecast(response.data)
			} catch (err) {
				console.error(err)
			}
		}
	}
	useEffect(() => {
		getLocation()
	}, [])

	useEffect(() => {
		fetchCurrentData()
		fetchDailyData()
	}, [location])

	return (
		<div className='layout'>
			<div className='layout__row'>
				<Input
					className='Input search-input'
					placeholder='Check another city'
					onChange={(e) => setPlace(e.target.value)}
					value={place}
				/>
				<CurrentTop data={currentForecast} />
				<CurrentBottom data={currentForecast} />
			</div>
			<Daily data={dailyForecast} />
		</div>
	)
}
export default Layout
