import React from 'react';

import WeatherIcon from './WeatherIcon';

const DisplayWeatherIcon = props => {
	
	return (
		<div className="row">
			<div className="col text-center">
				<WeatherIcon
					icon={props.icon}
					height={180}
				/>
			</div>
		</div>
	);
}
 
export default DisplayWeatherIcon;