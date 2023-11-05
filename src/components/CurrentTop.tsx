import React from 'react'
import { IWeather } from '../models'
import './Current.scss'
import WeatherIcon from './WeatherIcon'

type CurrentTopProps = {
	data: IWeather
}

const CurrentTop: React.FC<CurrentTopProps> = ({ data }) => {
	// console.log(data)
	function converter(temp: number) {
		return Math.round(temp - 273.15)
	}

	return (
		<div className='block'>
			<h1 className='current__title'>
				{String(converter(data?.main.temp))}&deg;
			</h1>
			<h4>{data?.name}</h4>
			<p className='current__subtitle'>
				Feels like: {converter(data?.main.feels_like)}&deg; <br />
				{new Date(data?.dt * 1000).toLocaleDateString('en-us', {
					weekday: 'long'
				})}
			</p>
			{/* <h2>icon: {data?.weather[0].icon} </h2> */}

			<div className='current__icon'>
				<WeatherIcon type={data?.weather[0].icon} />
			</div>
		</div>
	)
}
export default CurrentTop
