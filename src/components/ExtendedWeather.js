import React from 'react';

import WeatherItem from './WeatherItem';

import './display.css';

const ExtendedWeather = props => {

	const { weather } = props;

	return (
		<div className="display-extended-weather d-flex align-items-center col-sm-12 col-md-6 h-100 py-4 p-sm-5 p-md-3 p-lg-4">
			<ul className="list-group w-100">
				{
					weather && weather.length > 0 ?
					weather.map( (item, i) => {
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
								key={i}
								info={info}
								loading={props.loading}
							/>
						)
					})
					: null
				}
			</ul>
		</div>
	);
}
 
export default ExtendedWeather;