import React from 'react';

import TempIcon from './TempIcon';
import InfoTable from './InfoTable';

import { CSSTransition } from 'react-transition-group';

import './fade-up.css';

const DisplayWeatherInfo = props => {

	const {
		humidity,
		pressure,
		temp,
		wind_speed,
	} = props;

	return (
		<CSSTransition
			in={!props.loading}
			classNames='fade-up'
			timeout={500}
			appear
		>
			<div className="row">
				<div className="col text-center">
					<TempIcon
						temp={temp}
						size={44}
						margin={3}
					/>
				</div>
				<div className="col text-center">
					<InfoTable
						pressure={pressure}
						humidity={humidity}
						wind_speed={wind_speed}
					/>
				</div>
			</div>
		</CSSTransition>
	);
}
 
export default DisplayWeatherInfo;