import React from 'react';

import DisplayWeather from './DisplayWeather';

const CurrentWeather = props => {
	
	const { weather } = props;

	return (
		<div className="col-12 col-md-6 p-4 p-md-3 p-lg-4 h-100">
			<DisplayWeather weather={weather}/>
		</div>
	);
}
 
export default CurrentWeather;