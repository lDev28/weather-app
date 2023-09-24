export interface IWeather {
	base: 'string'
	clouds: { all: number }
	cod: number
	coord: { lon: number; lat: number }
	dt: number
	id: number
	main: {
		temp: number
		temp_min: number
		temp_max: number
		feels_like: number
		humidity: number
		pressure: number
	}
	name: string
	sys: {
		country: string
		id: number
		sunrise: number
		sunset: number
		type: number
	}
	timezone: number
	visibility: number
	weather: [
		{
			description: string
			icon: string
			id: number
			main: string
		}
	]
	wind: {
		speed: number
		deg: number
		gust: number
	}
}
