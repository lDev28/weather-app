import React from 'react'
import { IWeather } from '../models'

type HourlyElementProps = {
	data: IWeather | null
}

const HourlyElement: React.FC<HourlyElementProps> = ({}) => {
	// console.log(data)

	return <div>Have a good coding</div>
}
export default HourlyElement
