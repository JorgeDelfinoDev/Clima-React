import React from 'react';

import DisplayExtendedWeather from './DisplayExtendedWeather';

const ExtendedWeather = props => {

	const { weather } = props;
	
	return (
		<div className="col-sm-12 col-md-6 h-100 p-sm-5 p-md-3 p-lg-4">
			<DisplayExtendedWeather weather={weather}/>
		</div>
	);
}
 
export default ExtendedWeather;