import { FC } from 'react'
import Weather from './Weather'
import { IForecast } from '../models'
import styles from './Weather.module.scss'

type ForecastProps = {
	forecast: IForecast | null
}

const Forecast: FC<ForecastProps> = ({ forecast }) => {
	// console.log(forecast)

	return (
		forecast && (
			<>
				{/* <div>{forecast.city.name}</div> */}
				<h2>Hourly forecast</h2>
				<div key={forecast.city.id} className={styles.container}>
					{forecast.list.map((f) => (
						<Weather key={f.id} weather={f} />
					))}
				</div>
			</>
		)
	)
}
export default Forecast
