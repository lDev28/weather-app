import React from 'react'
import './styles.scss'

type WeatherIconProps = {
	type: string | undefined
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ type }) => {
	switch (type) {
		case '01d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/clear.svg'
					alt='cloudy'
				/>
			)
		case '02d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/partly-cloudy.svg'
					alt='cloudy'
				/>
			)

		case '03d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/negative.svg'
					alt='cloudy'
				/>
			)

		case '04d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/negative.svg'
					alt='cloudy'
				/>
			)

		case '09d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/heavy-rain.svg'
					alt='cloudy'
				/>
			)

		case '10d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/light-rain.svg'
					alt='cloudy'
				/>
			)

		case '11d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/thunderstorm.svg'
					alt='cloudy'
				/>
			)

		case '13d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/blizzard.svg'
					alt='cloudy'
				/>
			)

		case '50d':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/fog.svg'
					alt='cloudy'
				/>
			)

		// NIGHT
		case '01n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/sunny-night.svg'
					alt='cloudy'
				/>
			)

		case '02n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/cloudy-night.svg'
					alt='cloudy'
				/>
			)

		case '03n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/negative.svg'
					alt='cloudy'
				/>
			)

		case '04n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/negative.svg'
					alt='cloudy'
				/>
			)

		case '09n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/heavy-rain.svg'
					alt='cloudy'
				/>
			)

		case '10n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/light-rain.svg'
					alt='cloudy'
				/>
			)

		case '11n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/thunderstorm.svg'
					alt='cloudy'
				/>
			)

		case '13n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/blizzard.svg'
					alt='cloudy'
				/>
			)

		case '50n':
			return (
				<img
					className='weather-icon'
					src='/weather-icons/night-fog.svg'
					alt='cloudy'
				/>
			)

		default:
			return
	}
}

export default WeatherIcon
