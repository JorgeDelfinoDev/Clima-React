import React from 'react';

import DisplayWeatherHeader from './DisplayWeatherHeader';
import DisplayWeatherIcon from './DisplayWeatherIcon';
import DisplayWeatherInfo from './DisplayWeatherInfo';

import './display.css';

const DisplayWeather = props => {

	const {
		name,
		humidity,
		pressure,
		temp,
		wind_speed,
		weather_icon,
	} = props.weather;

	return (
		<div className="display-weather d-flex flex-column justify-content-around py-3">
			<DisplayWeatherHeader name={name} />
			<DisplayWeatherIcon icon={weather_icon} />
			<DisplayWeatherInfo
				humidity={humidity}
				pressure={pressure}
				temp={temp}
				wind_speed={wind_speed}
			/>		
		</div>
	);
}
 
export default DisplayWeather;