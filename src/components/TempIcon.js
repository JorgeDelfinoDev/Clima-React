import React, { Fragment } from 'react';

const TempIcon = props => {

	const { temp, size, margin } = props;

	const showFixed = info => {
		if (info) {
			info = info.toFixed(0);
			return info;
		}
	}

	const tempColor = temp => {
		if (temp <= 5) {
			return 'empty text-info';
		}
		if (temp <= 22) {
			return 'quarter text-primary';
		}
		if (temp <= 28) {
			return 'half text-success';
		}
		if (temp <= 34) {
			return 'three-quarters text-warning';
		}
		if (temp > 34) {
			return 'full text-danger';
		}
	}

	return (
		<Fragment>
			<i style={{fontSize: size}} className={`mx-${margin} fas fa-thermometer-${tempColor(temp)}`}></i>
			<span style={{fontSize: size}}>{ showFixed(temp) }°c </span>
		</Fragment>
	);
}
 
export default TempIcon;