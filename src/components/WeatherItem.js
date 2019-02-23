import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './fade-center.css';

import TempIcon from './TempIcon';
import WeatherIcon from './WeatherIcon';
import InfoTable from './InfoTable';

import './weather-item.css';

const WeatherItem = props => {
	const {
		date,
		humidity,
		icon_desc,
		icon_code,
		pressure,
		temp,
		wind_speed
	} = props.info;

	const showToday = dt => {
		const date = new Date(dt);
		const today = new Date();

		if (date.getDate() === today.getDate()) {
			return <span className="badge badge-primary">Hoy {date.toLocaleTimeString()}</span>;
		}

		if (date.getDate() === today.getDate() + 1) {
			return <span className="badge badge-info">Mañana {date.toLocaleTimeString()}</span>;
		}

		return <span className="badge badge-secondary">{dt}</span>;
	}

	return (
		<CSSTransition
			in={!props.loading}
			timeout={500}
			classNames='fade-center'
			appear
			mountOnEnter
			unmountOnExit
		>
			<li className="list-group-item weather-item">
			<div className="row item-container">
				<div className="col-12 col-sm-4 d-flex align-items-center justify-content-center justify-content-sm-between my-3 my-sm-0">
					<WeatherIcon
						icon={icon_code}
						height={40}
					/>
					<TempIcon
						temp={temp}
						size={22}
						margin={2}
					/>
				</div>
				<div className="col-6 col-sm-4 text-center d-flex flex-column justify-content-center">
					<span className="d-block text-primary"><i>{showToday(date)}</i></span>
					<span className="d-block">{icon_desc}</span>
				</div>
				<div className="col-6 col-sm-4 text-center">
					<InfoTable
						pressure={pressure}
						humidity={humidity}
						wind_speed={wind_speed}
					/>
				</div>
			</div>
		</li>
		</CSSTransition>
	);
}
 
export default WeatherItem;