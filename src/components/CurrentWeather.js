import React from 'react';

import DisplayWeatherHeader from './DisplayWeatherHeader';
import DisplayWeatherIcon from './DisplayWeatherIcon';
import DisplayWeatherInfo from './DisplayWeatherInfo';

import './display.css';

const CurrentWeather = props => {
	
	const {
		name,
		humidity,
		pressure,
		temp,
		wind_speed,
		weather_icon,
	} = props.weather;

	return (
		<div className="col-12 col-md-6 p-4 p-md-3 p-lg-4">
			<div className="display-weather d-flex flex-column justify-content-around p-2">
				<DisplayWeatherHeader
					name={name}
					loading={props.loading}
				/>
				<DisplayWeatherIcon
					icon={weather_icon}
					loading={props.loading}
				/>
				<DisplayWeatherInfo
					humidity={humidity}
					pressure={pressure}
					temp={temp}
					wind_speed={wind_speed}
					loading={props.loading}
				/>
			</div>
		</div>
	);
}
 
export default CurrentWeather;