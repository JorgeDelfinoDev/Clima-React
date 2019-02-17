import React from 'react';

const InfoTable = props => {

	const { pressure, humidity, wind_speed } = props;

	const showFixed = info => {
		if (info) {
			info = info.toFixed(0);
			return info;
		}
	}

	return (
		<table className="mx-auto">
			<tbody>
				<tr>
					<th><i className="fas fa-tachometer-alt text-danger"></i></th>
					<td>{showFixed(pressure)} hPa</td>
				</tr>
				<tr>
					<th><i className="fas fa-tint text-primary"></i></th>
					<td>{humidity} %</td>
				</tr>
				<tr>
					<th><i className="fas fa-wind text-secondary mr-2"></i></th>
					<td>{wind_speed} km/h</td>
				</tr>
			</tbody>
		</table>
	);
}
 
export default InfoTable;