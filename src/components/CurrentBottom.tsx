import React from 'react'
import { IForecast, IWeather } from '../models'

type CurrentBottomProps = {
	data: IWeather | null
}

const CurrentBottom: React.FC<CurrentBottomProps> = ({ data }) => {
	// console.log('bttom', data)

	return (
		<div>
			<h3>sunrise: {data?.sys.sunrise}</h3>
			<h3>sunset: {data?.sys.sunset}</h3>

			<div>humidity: {data?.main.humidity}</div>
			<div>wind: {data?.wind.speed}</div>
			<div>pressure: {data?.main.pressure}</div>
		</div>
	)
}
export default CurrentBottom
