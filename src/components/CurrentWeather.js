import React from 'react';

import DisplayWeather from './DisplayWeather';
import Spinner from './Spinner';
import Error404 from './Error404';
import EmptyLocation from './EmptyLocation';

const CurrentWeather = props => {
	
	const { loading, status, weather, empty } = props;
	let display;

	if (empty) {
		display = <EmptyLocation/>
	} else {
		if (loading) {
			display = <Spinner/>
		} else {
			if (status === 200) {
				display = <DisplayWeather weather={weather}/>
			} else if (status === 404) {
				display = <Error404 error={404}/>
			}
		}
	}
	

	return (
		<div className="col-12 col-md-6 p-4 p-md-3 p-lg-4 h-100">
			{ display }
		</div>
	);
}
 
export default CurrentWeather;