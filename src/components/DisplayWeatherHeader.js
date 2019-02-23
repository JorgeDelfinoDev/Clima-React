import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './fade-center.css';

const DisplayWeatherHeader = props => {

	const showDate = () => {
		let dateNow = new Date();
		dateNow = dateNow.toDateString();
		return dateNow;
	}

	return (
		<CSSTransition
			in={!props.loading}
			classNames='fade-center'
			timeout={500}
			appear
			mountOnEnter
			unmountOnExit
		>
			<div className="row">
				<div className="col-md-12 text-center">
					<span className="badge badge-primary">{ showDate() }</span>
				</div>
				<div className="col-md-12 text-center">
					<h3>{ props.name }</h3>
				</div>
			</div>
		</CSSTransition>
	);
}
 
export default DisplayWeatherHeader;