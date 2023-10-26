import React from 'react'
import { IForecast, IWeather } from '../models'
import './Current.scss'

type CurrentTopProps = {
	data: IWeather | null
}

const CurrentTop: React.FC<CurrentTopProps> = ({ data }) => {
	console.log()
	function converter(temp: number | null) {
		return Math.round(temp - 273.15)
	}

	return (
		<div className='block'>
			<h1>{converter(data?.main.temp)}</h1>
			<p>Feels like: {converter(data?.main.feels_like)}</p>
			<h5>{data?.name}</h5>
			<h2>icon: {data?.weather[0].icon}</h2>
		</div>
	)
}
export default CurrentTop
