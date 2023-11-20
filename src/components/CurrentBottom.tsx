import React from 'react'
import { IWeather } from '../models'

type CurrentBottomProps = {
	data: IWeather | null
}

const CurrentBottom: React.FC<CurrentBottomProps> = ({ data }) => {
	// const getDay = (date: number | undefined) => {
	// 	if (date) {
	// 		const d = new Date(date * 1000).toLocaleTimeString()
	// 		return d
	// 	}
	// }

	function dateConverter(date: number | undefined) {
		if (date) {
			const time = new Date(date * 1000)
			const hours = time.getHours()
			const minutes = time.getMinutes()

			const formattedTime =
				hours.toString().padStart(2, '0') +
				':' +
				minutes.toString().padStart(2, '0')

			return formattedTime
		}
	}

	return (
		<div className='current-bottom'>
			{/* <h1>{d}</h1> */}
			<div className='suns-block'>
				<div>
					<img className='suns' src='/sunrise.svg' alt='sunrise' />
					<p>{dateConverter(data?.sys.sunrise)}</p>
				</div>
				<div>
					<img className='suns' src='/sunset.svg' alt='sunrise' />
					<p>{dateConverter(data?.sys.sunset)}</p>
				</div>
			</div>

			<div className='bottom-nav-block'>
				<div className='bottom-nav'>
					<img className='bottom-icon' src='/humidity.svg' alt='wind' />{' '}
					<p>{data?.main.humidity}%</p>
				</div>
				<div className='bottom-nav'>
					<img
						className='bottom-icon'
						src='/weather-icons/jansa.svg'
						alt='wind'
					/>{' '}
					<p>{data?.wind.speed} k/h</p>
				</div>
				<div className='bottom-nav'>
					<img className='bottom-icon' src='/pressure.svg' alt='wind' />{' '}
					<p>{data?.main.pressure}hPa</p>
				</div>
			</div>
		</div>
	)
}
export default CurrentBottom
