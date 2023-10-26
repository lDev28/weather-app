import React from 'react'
import { IForecast, IWeather } from '../models'
import HourlyElement from './HourlyElement'

type HourlyProps = {
	data: IForecast | null
}

const Hourly: React.FC<HourlyProps> = ({ data }) => {
	return (
		<div>
			{data?.list.map((f) => (
				<HourlyElement data={f} />
			))}
		</div>
	)
}
export default Hourly
