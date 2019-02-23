import React from 'react';

import WeatherIcon from './WeatherIcon';

import { CSSTransition } from 'react-transition-group';

import './fade-center.css';

const DisplayWeatherIcon = props => {
	
	return (
		<div className="row py-3 py-md-0">
			<div className="col text-center">
				<CSSTransition
					in={!props.loading}
					classNames='fade-center'
					timeout={500}
					mountOnEnter
					appear
				>
					<WeatherIcon
						icon={props.icon}
						height={180}
					/>
				</CSSTransition>
			</div>
		</div>
	);
}
 
export default DisplayWeatherIcon;