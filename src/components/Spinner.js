import React from 'react';

import './spinner.css';

const Spinner = () => {
	return (
		<div className="h-100 w-100 d-flex justify-content-center align-items-center">
			<div className="spinner m-0">
				<div className="bounce1"></div>
				<div className="bounce2"></div>
				<div className="bounce3"></div>
			</div>
		</div>
	);
}
 
export default Spinner;