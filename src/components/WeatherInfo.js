import React from 'react';

import CurrentWeather from './CurrentWeather';
import ExtendedWeather from './ExtendedWeather';

import './weather-info.css';

const WeatherInfo = props => {

	const { weather_code } = props.currentWeather;

	let image;
	let style;

	if (weather_code) {
		switch (weather_code) {

			case weather_code <= 232:
				image = 'thunderstorm';
				break;

			case weather_code <= 321:
				image = 'shower-rain';
				break;
			
			case weather_code <= 504:
				image = 'rain';
				break;

			case 511:
				image = 'snow';
				break;

			case weather_code <= 531:
				image = 'shower-rain';
				break;

			case weather_code <= 622:
				image = 'snow';
				break;

			case weather_code <= 781:
				image = 'mist';
				break;

			case 800:
				image = 'clear-sky';
				break;

			case 801:
				image = 'few-clouds';
				break;

			case 802:
				image = 'scattered-clouds';
				break;

			case 803:
				image = 'broken-clouds';
				break;

			default:
				image = 'clear-sky';
				break;
		}

		style = {
			backgroundImage: `url(${require(`../assets/images/${image}.jpg`)})`
		}
	}

	return (
		<div className="weather-info" style={style}>
			<div className="container-fluid h-100">
				<div className="row h-100">
					<CurrentWeather
						weather={props.currentWeather}
						status={props.status}
						loading={props.loading}
						empty={props.empty}
					/>
					<ExtendedWeather
						weather={props.extendedWeather}
						status={props.status}
						loading={props.loading}
						empty={props.empty}
					/>
				</div>
			</div>
		</div>
	);
}
 
export default WeatherInfo;