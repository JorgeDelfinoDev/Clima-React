import React from 'react';

const DisplayWeatherHeader = props => {

	const showDate = () => {
		let dateNow = new Date();
		dateNow = dateNow.toDateString();
		return dateNow;
	}

	return (
		<div className="row">
			<div className="col-md-12 text-center">
				<span className="badge badge-primary">{ showDate() }</span>
			</div>
			<div className="col-md-12 text-center">
				<h3>{ props.name }</h3>
			</div>
		</div>
	);
}
 
export default DisplayWeatherHeader;