import React from 'react';

import './spinner.css';

const Spinner = () => {
	return (
		<div className="spinner-container d-flex justify-content-center align-items-center">
			<div className="spinner">
				<div className="bounce1"></div>
				<div className="bounce2"></div>
				<div className="bounce3"></div>
			</div>
		</div>
	);
}
 
export default Spinner;