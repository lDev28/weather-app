import React from 'react'
import { IForecast, IWeather } from '../models'
import DailyElement from './DailyElement'
import './Daily.scss'

type DailyProps = {
	data: IForecast | null
}

const Daily: React.FC<DailyProps> = ({ data }) => {
	// console.log(data)

	return (
		<div className='daily'>
			<h2>Daily Forecast</h2>
			{data?.list.map((f) => (
				<DailyElement key={f.dt} data={f} />
			))}
		</div>
	)
}
export default Daily
