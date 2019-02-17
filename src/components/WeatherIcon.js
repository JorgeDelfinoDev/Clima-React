import React from 'react';

const WeatherIcon = props => {
	return (
		<img
			src={require(`../assets/images/icons/${props.icon}.png`)}
			alt="weather icon"
			style={{height: props.height}}
		/>
	);
}
 
export default WeatherIcon;