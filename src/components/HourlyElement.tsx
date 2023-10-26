import React from 'react'
import { IForecast, IWeather } from '../models'

type HourlyElementProps = {
	data: IWeather | null
}

const HourlyElement: React.FC<HourlyElementProps> = ({ data }) => {
	// console.log(data)

	return <div>Have a good coding</div>
}
export default HourlyElement
