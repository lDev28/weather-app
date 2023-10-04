import { FC } from 'react'
import Weather from './Weather'
import { IForecast } from '../models'

type ForecastProps = {
	forecast: IForecast | null
}

const Forecast: FC<ForecastProps> = ({ forecast }) => {
	// console.log(forecast)

	return (
		forecast && (
			<div key={forecast.cnt} style={{ border: '1px solid #ccc' }}>
				<div>{forecast.city.name}</div>
				{forecast.list.map((f) => (
					<Weather key={f.id} weather={f} />
				))}
			</div>
		)
	)
}
export default Forecast
