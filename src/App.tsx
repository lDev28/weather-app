import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Weather from './components/Weather'
import { IWeather } from './models'

function App() {
	const [weather, setWeather] = useState<IWeather>()
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
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${key}&units=metric`

	async function fetchData() {
		try {
			const response = await axios.get<IWeather>(url)
			setWeather(response.data)
			console.log(response.data)
		} catch (err) {
			console.error(err)
		}
	}
	useEffect(() => {
		getLocation()
		fetchData()
	}, [])
	// console.log(weather)

	return (
		<>
			<Weather weather={weather} />
		</>
	)
}

export default App
