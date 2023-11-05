import React from 'react'
import { IWeather } from '../models'
import './Daily.scss'
import WeatherIcon from './WeatherIcon'

type DailyElementProps = {
	data: IWeather
}

const DailyElement: React.FC<DailyElementProps> = ({ data }) => {
	function converter(temp: number) {
		// return Math.round(temp - 273.15)
		return Math.round(temp)
	}

	const { dt_txt, main } = data

	return (
		<div className='daily__block'>
			<h2>{dt_txt}</h2>
			<h2>{main.humidity}</h2>
			<span className='daily__icon'>
				<WeatherIcon type={data.weather[0].icon} />
			</span>
			<h2>{converter(main.temp)}</h2>
		</div>
	)
}
export default DailyElement
