import React from 'react';

import WeatherItem from './WeatherItem';

import './display.css';

const DisplayExtendedWeather = props => {
	const { weather } = props;
	return (
		<div className="display-extended-weather h-100 py-4 d-flex align-items-center">
			<ul className="list-group w-100">
				{
					weather && weather.length > 0 ?
					weather.map(item => {
						const { dt_txt } = item;
						const { humidity, pressure, temp } = item.main;
						const { icon, description } = item.weather[0];
						const { speed } = item.wind;
		
						const info = {
							date: dt_txt,
							humidity,
							pressure,
							temp,
							icon_code: icon,
							icon_desc: description,
							wind_speed: speed
						}
		
						return (
							<WeatherItem
								info={info}
								key={dt_txt}
							/>
						)
					})
					: null
				}
			</ul>
		</div>
	);
}
 
export default DisplayExtendedWeather;