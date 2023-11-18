import React from 'react'
import { IWeather } from '../models'
import './Daily.scss'
import WeatherIcon from './WeatherIcon'

type DailyElementProps = {
	data: IWeather
}

const DailyElement: React.FC<DailyElementProps> = ({ data }) => {
	// console.log(data)

	function converter(temp: number) {
		return Math.round(temp - 273.15)
	}

	function dateConverter(date: number) {
		// let h = new Date(date).getHours()
		// let m = new Date(date).getMinutes()
		// if (m < 9) {
		// 	m = `0${m}`
		// }
		// if (h < 9) {
		// 	h = `0${m}`
		// }
		// return `${h}:${m}`
		// console.log(date)

		return date
	}

	const { dt, main } = data

	return (
		<div className='daily__block'>
			<h2>{dateConverter(dt)}</h2>
			<img width={'30px'} src='/humidity.svg' alt='' />
			<h2>{main.humidity}%</h2>
			<span className='daily__icon'>
				<WeatherIcon type={data.weather[0].icon} />
			</span>
			<h2>{converter(main.temp)}</h2>
		</div>
	)
}
export default DailyElement
