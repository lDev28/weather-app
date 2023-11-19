import React from 'react'
import { IWeather } from '../models'
import './Daily.scss'
import WeatherIcon from './WeatherIcon'

type DailyElementProps = {
	data: IWeather
}

const DailyElement: React.FC<DailyElementProps> = ({ data }) => {
	function converter(temp: number) {
		return Math.round(temp - 273.15)
	}

	function dateConverter(date: number) {
		const time = new Date(date * 1000)
		const hours = time.getHours()
		const minutes = time.getMinutes()

		const formattedTime =
			hours.toString().padStart(2, '0') +
			':' +
			minutes.toString().padStart(2, '0')

		return formattedTime
	}

	const { dt, main } = data

	return (
		<div className='daily__block'>
			<h2 className='daily__time'>{dateConverter(dt)}</h2>
			<img className='daily__humidity-icon' src='/humidity.svg' alt='' />
			<h3 className='daily__humidity-title'>{main.humidity}%</h3>
			<span className='daily__icon'>
				<WeatherIcon type={data.weather[0].icon} />
			</span>
			<h2>{converter(main.temp)}&deg;</h2>
		</div>
	)
}
export default DailyElement
