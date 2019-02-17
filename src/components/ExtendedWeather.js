import React from 'react';

import DisplayExtendedWeather from './DisplayExtendedWeather';
import Spinner from './Spinner';
import Error404 from './Error404';
import EmptyExtendedLocation from './EmptyExtendedLocation';

const ExtendedWeather = props => {

	const { loading, status, weather, empty } = props;

	let display;
	if (empty) {
		display = <EmptyExtendedLocation/>
	} else {
		if (loading) {
			display = <Spinner/>
		} else {
			if (status === 200) {
				display = <DisplayExtendedWeather weather={weather}/>
			} else if (status === 404) {
				display = <Error404 error='error'/>
			}
		}
	}
	
	return (
		<div className="col-sm-12 col-md-6 h-100 p-sm-5 p-md-3 p-lg-4">
			{ display }
		</div>
	);
}
 
export default ExtendedWeather;